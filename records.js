// v10 reporting: read-only calculations from the existing synced local cache.
// No changes to database tables, workout saving or migration.
(function () {
  const originalRender = window.renderDashboard;
  if (typeof originalRender !== 'function') return;
  let paceChart = null;
  const read = key => { try { const data = JSON.parse(localStorage.getItem(key) || '[]'); return Array.isArray(data) ? data : []; } catch { return []; } };
  const numeric = value => value !== null && value !== undefined && String(value).trim() !== '' && Number.isFinite(Number(value)) ? Number(value) : null;
  const fmt = (n, digits = 1) => Number(n).toFixed(digits).replace(/\.0$/, '');
  const dateLabel = date => /^\d{4}-\d{2}-\d{2}$/.test(date || '') ? date.split('-').reverse().join('/') : (date || 'Unknown');
  function durationSeconds(value) {
    if (value === null || value === undefined) return null;
    const raw = String(value).trim();
    if (!raw) return null;
    const parts = raw.split(':');
    if (parts.length === 1) { const n = numeric(parts[0]); return n !== null && n > 0 ? n * 60 : null; } // bare number = minutes
    if (parts.length !== 2 && parts.length !== 3) return null;
    if (!parts.every(p => /^\d+(?:\.\d+)?$/.test(p))) return null;
    const numbers = parts.map(Number);
    if (numbers.slice(1).some(n => n >= 60)) return null;
    const seconds = numbers.reduce((sum, n) => sum * 60 + n, 0);
    return seconds > 0 ? seconds : null;
  }
  function weekStart(iso) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(iso || '')) return null;
    const date = new Date(iso + 'T12:00:00Z');
    if (Number.isNaN(date.getTime())) return null;
    const day = (date.getUTCDay() + 6) % 7;
    date.setUTCDate(date.getUTCDate() - day);
    return date.toISOString().slice(0, 10);
  }
  function paceText(secondsPerKm) {
    if (!Number.isFinite(secondsPerKm) || secondsPerKm <= 0) return '—';
    const seconds = Math.round(secondsPerKm);
    return `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2,'0')}/km`;
  }
  function cell(row, value) { const td = document.createElement('td'); td.textContent = value; row.appendChild(td); }
  function tile(container, title, value, detail) {
    const card = document.createElement('div'); card.className = 'record-tile';
    for (const [className, text] of [['record-label', title], ['record-value', value], ['record-detail', detail]]) {
      const p = document.createElement('p'); p.className = className; p.textContent = text; card.appendChild(p);
    }
    container.appendChild(card);
  }
  function renderRecords() {
    const sessions = read('trainingSessions');
    const strength = new Map();
    const weeks = new Map();
    const runs = [];
    for (const session of sessions) {
      const date = session.date || '';
      for (const exercise of session.exercises || []) {
        if (!exercise || !exercise.name || exercise.timed || exercise.bodyweight) continue;
        for (const set of exercise.sets || []) {
          const weight = numeric(set.weight), reps = numeric(set.reps);
          if (weight === null || weight <= 0 || reps === null || reps <= 0) continue;
          const estimated = reps <= 10 ? weight * (1 + reps / 30) : null;
          const existing = strength.get(exercise.name);
          if (!existing) strength.set(exercise.name, { name: exercise.name, weight, reps, date, estimate: estimated, bestEstimate: estimated });
          else {
            if (weight > existing.weight || (weight === existing.weight && reps > existing.reps)) Object.assign(existing, {weight,reps,date,estimate:estimated});
            if (estimated !== null && (existing.bestEstimate === null || estimated > existing.bestEstimate)) existing.bestEstimate = estimated;
          }
        }
      }
      for (const run of session.runs || []) {
        const distance = numeric(run.distance);
        if (distance === null || distance <= 0) continue;
        const seconds = durationSeconds(run.time);
        runs.push({date, distance, seconds});
        const week = weekStart(date);
        if (!week) continue;
        const aggregate = weeks.get(week) || {distance:0, timedDistance:0, seconds:0};
        aggregate.distance += distance;
        if (seconds !== null) { aggregate.timedDistance += distance; aggregate.seconds += seconds; }
        weeks.set(week, aggregate);
      }
    }
    const tbody = document.getElementById('strength-records-body'); tbody.replaceChildren();
    const records = [...strength.values()].sort((a,b) => a.name.localeCompare(b.name));
    for (const item of records) {
      const row = document.createElement('tr');
      [item.name, `${fmt(item.weight)} kg`, fmt(item.reps,0), item.bestEstimate === null ? '—' : `${fmt(item.bestEstimate)} kg`, dateLabel(item.date)].forEach(v=>cell(row,v));
      tbody.appendChild(row);
    }
    if (!records.length) { const row=document.createElement('tr'); const td=document.createElement('td');td.colSpan=5;td.textContent='No recorded weighted strength sets yet.';row.appendChild(td);tbody.appendChild(row); }
    const runningBody = document.getElementById('running-weeks-body'); runningBody.replaceChildren();
    const ordered = [...weeks.entries()].sort((a,b)=>a[0].localeCompare(b[0]));
    for (const [week, data] of [...ordered].reverse()) {
      const row = document.createElement('tr');
      const pace = data.timedDistance > 0 ? data.seconds / data.timedDistance : null;
      [dateLabel(week), `${fmt(data.distance)} km`, pace === null ? '—' : paceText(pace), pace === null ? '—' : `${fmt(3600/pace,2)} km/h`].forEach(v=>cell(row,v));
      runningBody.appendChild(row);
    }
    if (!ordered.length) { const row=document.createElement('tr');const td=document.createElement('td');td.colSpan=4;td.textContent='No recorded runs yet.';row.appendChild(td);runningBody.appendChild(row); }
    const summary = document.getElementById('personal-records'); summary.replaceChildren();
    const findLift = name => records.find(r => r.name.toLowerCase() === name.toLowerCase());
    for (const [label,name] of [['Bench Press','Bench Press'],['Back Squat','Back Squat'],['Deadlift','Deadlift']]) {
      const record=findLift(name);
      tile(summary,label,record ? `${fmt(record.weight)} kg` : '—',record ? `${fmt(record.reps,0)} reps · ${dateLabel(record.date)}` : 'No record yet');
    }
    const longest = runs.reduce((best,r)=>!best || r.distance>best.distance?r:best,null);
    tile(summary,'Longest Run',longest?`${fmt(longest.distance,2)} km`:'—',longest?dateLabel(longest.date):'No record yet');
    const peak = ordered.reduce((best,[week,d])=>!best || d.distance>best.distance?{week,...d}:best,null);
    tile(summary,'Highest Weekly Distance',peak?`${fmt(peak.distance,2)} km`:'—',peak?`Week of ${dateLabel(peak.week)}`:'No record yet');
    const fiveKm = runs.filter(r=>r.seconds !== null && Math.abs(r.distance-5)<=0.05).sort((a,b)=>a.seconds-b.seconds)[0];
    tile(summary,'Fastest 5 km',fiveKm?`${Math.floor(fiveKm.seconds/60)}:${String(Math.round(fiveKm.seconds%60)).padStart(2,'0')}`:'—',fiveKm?dateLabel(fiveKm.date):'Requires a logged run of 4.95–5.05 km');
    if (paceChart) {paceChart.destroy();paceChart=null;}
    const canvas=document.getElementById('pace-chart');
    if (window.Chart && canvas && !document.getElementById('view-progress').hidden) {
      const valid=ordered.filter(([,w])=>w.timedDistance>0);
      paceChart=new Chart(canvas,{type:'line',data:{labels:valid.map(([w])=>w),datasets:[{label:'Average weekly pace (min/km)',data:valid.map(([,w])=>Number((w.seconds/w.timedDistance/60).toFixed(3))),borderColor:'#70a5ff',tension:.2,spanGaps:false}]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{labels:{color:'#eee'}},tooltip:{callbacks:{label:ctx=>`Average pace: ${paceText(ctx.parsed.y*60)}`}}},scales:{x:{ticks:{color:'#aaa',maxTicksLimit:7}},y:{reverse:true,ticks:{color:'#aaa',callback:value=>paceText(Number(value)*60)}}}}});
    }
  }
  window.renderDashboard = function (...args) { originalRender.apply(this,args); renderRecords(); };
  if (!document.getElementById('view-progress').hidden) renderRecords();
})();
