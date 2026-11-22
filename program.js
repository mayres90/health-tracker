// v12: account-scoped program editor. Completed sessions remain immutable.
const programDefaults = structuredClone(trainingTemplates);
let programWorking = structuredClone(trainingTemplates);
let programDirty = false;
let programUserId = null;
const programStatus = document.getElementById('program-status');
const programSelect = document.getElementById('program-session');
const programEditor = document.getElementById('program-editor');
const programGroups = [ ['main','Main workout'], ['additional','Additional strengthening'], ['run','Running'], ['recovery','Mobility and recovery'] ];
function programMessage(message) { programStatus.textContent = message; }
function programIsSignedIn() { return !!programUserId && typeof cloudUser !== 'undefined' && cloudUser?.id === programUserId; }
function programValidate(raw) {
  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) throw Error('Program must be an object of named workouts.');
  const names = Object.keys(raw);
  if (!names.length || names.length > 40) throw Error('Program must contain 1 to 40 workouts.');
  const out = {};
  for (const name of names) {
    if (!name.trim() || name.length > 90) throw Error('Invalid workout name.');
    const day = raw[name];
    if (!day || typeof day !== 'object' || Array.isArray(day)) throw Error('Invalid workout: ' + name);
    const valid = {};
    for (const [key] of programGroups) {
      const items = day[key] || [];
      if (!Array.isArray(items) || items.length > 60) throw Error('Invalid list in ' + name);
      if (key === 'recovery') {
        valid[key] = items.map(x => { if (typeof x !== 'string' || !x.trim() || x.length > 250) throw Error('Invalid recovery item.'); return x.trim(); });
      } else {
        valid[key] = items.map(x => {
          if (!x || typeof x !== 'object' || typeof x.name !== 'string' || !x.name.trim() || x.name.length > 120) throw Error('Invalid exercise name.');
          if (typeof x.prescription !== 'string' || x.prescription.length > 300) throw Error('Invalid prescription.');
          if (key === 'run') return {name:x.name.trim(),prescription:x.prescription};
          if (!Number.isInteger(Number(x.sets)) || Number(x.sets)<1 || Number(x.sets)>30) throw Error('Sets must be between 1 and 30.');
          return {name:x.name.trim(),sets:Number(x.sets),prescription:x.prescription,bodyweight:!!x.bodyweight,timed:!!x.timed};
        });
      }
    }
    out[name] = valid;
  }
  return out;
}
function programApply(program) {
  for (const key of Object.keys(trainingTemplates)) delete trainingTemplates[key];
  Object.assign(trainingTemplates, structuredClone(program));
  const chosen = sessionType.value;
  sessionType.replaceChildren(new Option('Select session type',''));
  Object.keys(trainingTemplates).forEach((name,i) => sessionType.add(new Option(`Day ${i+1} - ${name}`,name)));
  if (chosen && trainingTemplates[chosen]) sessionType.value = chosen;
  else { sessionType.value = ''; clearPlans(); }
  // Do not dispatch change: an existing unsaved draft must not be overwritten.
}
function programPickNames(preferred) {
  programSelect.replaceChildren();
  Object.keys(programWorking).forEach(name => programSelect.add(new Option(name,name)));
  if (preferred && programWorking[preferred]) programSelect.value = preferred;
}
function programMarkDirty() { programDirty = true; programMessage('Unsaved program changes. Click Save Program to Cloud.'); }
function programButton(label, handler, className='secondary-button') {
  const b = document.createElement('button'); b.type='button'; b.className=className; b.textContent=label; b.addEventListener('click',handler); return b;
}
function programField(label,value,handler,type='text') {
  const wrap=document.createElement('label'); wrap.textContent=label;
  const input=document.createElement('input'); input.type=type; input.autocomplete='off'; input.value=value;
  if(type==='number'){input.min='1';input.max='30';input.step='1';}
  input.addEventListener('input',()=>{handler(input.value);programMarkDirty();});
  wrap.appendChild(input); return wrap;
}
function programRender() {
  programEditor.replaceChildren();
  const name=programSelect.value, day=programWorking[name]; if(!day)return;
  for(const [key,title] of programGroups){
    const group=document.createElement('div');group.className='program-group';
    const heading=document.createElement('h3');heading.textContent=title;group.appendChild(heading);
    const list=day[key] || (day[key]=[]);
    list.forEach((item,index)=>{
      const box=document.createElement('div');box.className='program-item';
      if(key==='recovery') {
        box.appendChild(programField('Exercise and prescription',item,value=>list[index]=value));
      } else {
        box.appendChild(programField('Exercise',item.name,value=>item.name=value));
        box.appendChild(programField('Prescription',item.prescription,value=>item.prescription=value));
        if(key!=='run') {
          box.appendChild(programField('Sets',item.sets,value=>item.sets=Number(value),'number'));
          const flags=document.createElement('div');flags.className='program-flags';
          for(const [flag,label] of [['bodyweight','Bodyweight exercise'],['timed','Timed sets']]){
            const flagLabel=document.createElement('label');const checkbox=document.createElement('input');checkbox.type='checkbox';checkbox.checked=!!item[flag];
            checkbox.addEventListener('change',()=>{item[flag]=checkbox.checked;programMarkDirty();});
            flagLabel.append(checkbox,document.createTextNode(label));flags.appendChild(flagLabel);
          }box.appendChild(flags);
        }
      }
      const actions=document.createElement('div');actions.className='program-row-actions';
      actions.append(programButton('Up',()=>{if(index===0)return;[list[index-1],list[index]]=[list[index],list[index-1]];programMarkDirty();programRender();}),programButton('Down',()=>{if(index===list.length-1)return;[list[index+1],list[index]]=[list[index],list[index+1]];programMarkDirty();programRender();}),programButton('Remove',()=>{list.splice(index,1);programMarkDirty();programRender();}));
      box.appendChild(actions);group.appendChild(box);
    });
    group.appendChild(programButton('Add exercise',()=>{
      list.push(key==='recovery'?'New mobility exercise: 1 × 10':key==='run'?{name:'New run',prescription:'As prescribed'}:{name:'New exercise',sets:3,prescription:'3 × 10',bodyweight:false,timed:false});
      programMarkDirty();programRender();
    }));programEditor.appendChild(group);
  }
}
programSelect.addEventListener('change',programRender);
document.getElementById('program-new-session').addEventListener('click',()=>{
  const name=prompt('Name of new workout');if(name===null)return;
  const clean=name.trim();if(!clean||clean.length>90||programWorking[clean]){alert('Enter a unique workout name (up to 90 characters).');return;}
  programWorking[clean]={main:[],additional:[],run:[],recovery:[]};programPickNames(clean);programMarkDirty();programRender();
});
document.getElementById('program-rename-session').addEventListener('click',()=>{
  const old=programSelect.value;if(!old)return;const name=prompt('New workout name',old);if(name===null)return;
  const clean=name.trim();if(!clean||clean.length>90||(clean!==old&&programWorking[clean])){alert('Enter a unique workout name.');return;}
  if(clean===old)return;
  const updated={};for(const [key,value] of Object.entries(programWorking))updated[key===old?clean:key]=value;
  programWorking=updated;programPickNames(clean);programMarkDirty();programRender();
});
document.getElementById('program-delete-session').addEventListener('click',()=>{
  const name=programSelect.value;if(Object.keys(programWorking).length<=1){alert('At least one workout is required.');return;}
  if(!confirm(`Delete workout template "${name}"? Saved workouts will remain in History.`))return;
  delete programWorking[name];programPickNames();programMarkDirty();programRender();
});
async function programSave(){
  if(!programIsSignedIn()){programMessage('Sign in under Settings before saving.');return;}
  const button=document.getElementById('program-save');button.disabled=true;
  try{
    const validated=programValidate(programWorking);
    programMessage('Saving program to cloud...');
    const {error}=await db.from('workout_programs').upsert({user_id:programUserId,program_data:validated,updated_at:new Date().toISOString()});
    if(error)throw error;
    programWorking=structuredClone(validated);programApply(validated);programDirty=false;
    programMessage('Program saved to cloud. Select a workout to load the new template.');
  }catch(e){programMessage('Save failed: '+e.message);}
  finally{button.disabled=false;}
}
document.getElementById('program-save').addEventListener('click',programSave);
document.getElementById('program-export').addEventListener('click',()=>{
  try{const data=JSON.stringify(programValidate(programWorking),null,2);
    const url=URL.createObjectURL(new Blob([data],{type:'application/json'}));
    const link=document.createElement('a');link.href=url;link.download='health-tracker-program.json';document.body.appendChild(link);link.click();link.remove();setTimeout(()=>URL.revokeObjectURL(url),2000);
  }catch(e){programMessage('Export failed: '+e.message);}
});
document.getElementById('program-import').addEventListener('change',async e=>{
  const file=e.target.files[0];if(!file)return;
  try{
    if(file.size>1000000)throw Error('File too large.');
    const imported=programValidate(JSON.parse(await file.text()));
    if(!confirm('Replace the current editable program with the imported program? Save to cloud afterwards.'))return;
    programWorking=imported;programPickNames();programRender();programMarkDirty();
  }catch(err){programMessage('Import failed: '+err.message);}finally{e.target.value='';}
});
document.getElementById('program-defaults').addEventListener('click',()=>{
  if(!confirm('Restore the original seven-day program in the editor? Save to cloud to apply it.'))return;
  programWorking=structuredClone(programDefaults);programPickNames();programRender();programMarkDirty();
});
async function programAuthChanged(user){
  if(!user){programUserId=null;programMessage('Sign in under Settings to edit your program.');return;}
  if(programDirty && programUserId===user.id)return;
  programUserId=user.id;
  try{
    programMessage('Loading program from cloud...');
    const {data,error}=await db.from('workout_programs').select('program_data').eq('user_id',user.id).maybeSingle();
    if(error)throw error;
    const loaded=data?programValidate(data.program_data):structuredClone(programDefaults);
    programWorking=structuredClone(loaded);programApply(loaded);programDirty=false;
    programPickNames();programRender();
    programMessage(data?'Program loaded from cloud.':'Default program loaded. Save to cloud after editing.');
  }catch(err){programMessage('Program could not load: '+err.message+'. Existing workout templates remain available.');}
}
programPickNames();programRender();
