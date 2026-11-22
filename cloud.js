// Cloud storage for Health Tracker. Browser localStorage is retained as a cache and backup.
const SUPABASE_URL = 'https://htsofvcgxmvuhjqqhgvf.supabase.co';
const SUPABASE_KEY = 'sb_publishable_Qn-QVg5Nnsvqhu7qe0VhHw_ydeXydFX';
const db = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
let cloudUser = null;
let cloudReady = false;
const cloudStatus = document.getElementById('cloud-status');
const cloudAuth = document.getElementById('cloud-auth');
const cloudTools = document.getElementById('cloud-tools');
function statusCloud(message) { cloudStatus.textContent = message; }
function readLocal(key) { try { return JSON.parse(localStorage.getItem(key)) || []; } catch { return []; } }
async function stableId(prefix, id) {
    const bytes = new TextEncoder().encode(prefix + ':' + String(id));
    const digest = new Uint8Array(await crypto.subtle.digest('SHA-256', bytes));
    digest[6] = (digest[6] & 15) | 80;
    digest[8] = (digest[8] & 63) | 128;
    const hex = Array.from(digest.slice(0, 16), b => b.toString(16).padStart(2, '0')).join('');
    return `${hex.slice(0,8)}-${hex.slice(8,12)}-${hex.slice(12,16)}-${hex.slice(16,20)}-${hex.slice(20)}`;
}
async function cloudSaveWorkout(workout, importing = false) {
    if (!cloudUser) throw new Error("Not signed in");
    if (!cloudReady && !importing) throw new Error("Cloud is not ready");
    const id = await stableId('workout', workout.id);
    const { error } = await db.from('workout_sessions').upsert({ id, user_id: cloudUser.id, session_date: workout.date, session_type: workout.type, session_data: workout });
    if (error) throw error;
}
async function cloudSaveWeight(entry, importing = false) {
    if (!cloudUser) throw new Error("Not signed in");
    if (!cloudReady && !importing) throw new Error("Cloud is not ready");
    const id = await stableId('weight', entry.id);
    const { error } = await db.from('bodyweight_entries').upsert({ id, user_id: cloudUser.id, entry_date: entry.date, weight_kg: entry.bodyweight });
    if (error) throw error;
}
async function cloudDeleteWorkout(id) {
    if (!cloudReady || !cloudUser) return;
    const uuid = await stableId('workout', id);
    const { error } = await db.from('workout_sessions').delete().eq('id', uuid);
    if (error) throw error;
}
async function fetchAll(table, columns) {
    let all = [], offset = 0;
    while (true) {
        const { data, error } = await db.from(table).select(columns).range(offset, offset + 999);
        if (error) throw error;
        all.push(...data);
        if (data.length < 1000) return all;
        offset += 1000;
    }
}
async function cloudRefresh() {
    if (!cloudUser || !cloudReady) return;
    const [workouts, weights] = await Promise.all([
        fetchAll('workout_sessions', 'session_data'),
        fetchAll('bodyweight_entries', 'id,entry_date,weight_kg')
    ]);
    const sessions = workouts.map(row => row.session_data).sort((a,b) => a.date.localeCompare(b.date));
    const bodyweights = weights.map(row => ({id: row.id, date: row.entry_date, bodyweight: Number(row.weight_kg)})).sort((a,b) => a.date.localeCompare(b.date));
    const localSessions = readLocal('trainingSessions');
    const localWeights = readLocal('bodyweights');
    if ((localSessions.length > 0 && sessions.length === 0) ||
        (localWeights.length > 0 && bodyweights.length === 0)) {
        throw new Error('Cloud contains no matching records for existing local data. Local data has NOT been replaced.');
    }
    localStorage.setItem('trainingSessions', JSON.stringify(sessions));
    localStorage.setItem('bodyweights', JSON.stringify(bodyweights));
    renderSavedSessions();
    renderBodyweightHistory();
    renderDashboard();
    statusCloud(`Connected. ${sessions.length} workouts and ${bodyweights.length} bodyweight entries synced.`);
}
async function cloudImport() {
    if (!cloudUser) return;
    if (!confirm('Import the workouts and bodyweight entries currently stored in THIS browser to your cloud account? Existing cloud records will not be deleted.')) return;
    const sessions = readLocal('trainingSessions');
    const weights = readLocal('bodyweights');
    const button = document.getElementById('cloud-import');
    button.disabled = true;
    statusCloud('Importing. Do not close this page.');
    try {
        for (const workout of sessions) await cloudSaveWorkout(workout, true);
        for (const entry of weights) await cloudSaveWeight(entry, true);
        const [remoteSessions, remoteWeights] = await Promise.all([
            fetchAll('workout_sessions', 'id'),
            fetchAll('bodyweight_entries', 'id')
        ]);
        if (remoteSessions.length < sessions.length || remoteWeights.length < weights.length) {
            throw new Error(`Upload not verified: cloud has ${remoteSessions.length} workouts and ${remoteWeights.length} weights; this browser has ${sessions.length} and ${weights.length}.`);
        }
        cloudReady = true;
        await cloudRefresh();
        localStorage.setItem('cloudMigrated:' + cloudUser.id, 'yes');
        alert('Cloud import verified. Check the counts above before using another device.');
    } catch (error) {
        cloudReady = false;
        statusCloud('Import failed: ' + error.message + '. Your browser data is unchanged.');
    } finally { button.disabled = false; }
}
async function onCloudAuth(user) {
    cloudUser = user;
    cloudAuth.hidden = !!user;
    cloudTools.hidden = !user;
    cloudReady = false;
    if (!user) { statusCloud('Not signed in. Workouts remain stored in this browser.'); return; }
    document.getElementById('cloud-email-display').textContent = user.email;
    try {
        const [remoteSessions, remoteWeights] = await Promise.all([
            db.from('workout_sessions').select('id', {count:'exact',head:true}),
            db.from('bodyweight_entries').select('id', {count:'exact',head:true})
        ]);
        if (remoteSessions.error) throw remoteSessions.error;
        if (remoteWeights.error) throw remoteWeights.error;
        const hasRemote = (remoteSessions.count || 0) + (remoteWeights.count || 0) > 0;
        const hasLocal = readLocal('trainingSessions').length + readLocal('bodyweights').length > 0;
        if (hasRemote) {
            cloudReady = true;
            await cloudRefresh();
            localStorage.setItem('cloudMigrated:' + user.id, 'yes');
        } else if (hasLocal) {
            statusCloud('Signed in. Cloud is empty. Import this browser’s existing data before continuing.');
        } else {
            cloudReady = true;
            statusCloud('Connected. No workouts yet.');
        }
    } catch (error) {cloudReady = false; statusCloud('Sync error: '+error.message);}
}
document.getElementById('cloud-signin').addEventListener('click', async () => {
    const email = document.getElementById('cloud-email').value.trim();
    const password = document.getElementById('cloud-password').value;
    if (!email || !password) { statusCloud('Enter email and password.'); return; }
    statusCloud('Signing in...');
    const { error } = await db.auth.signInWithPassword({email, password});
    if (error) statusCloud(error.message);
});
document.getElementById('cloud-signup').addEventListener('click', async () => {
    const email = document.getElementById('cloud-email').value.trim();
    const password = document.getElementById('cloud-password').value;
    if (!email || password.length < 8) { statusCloud('Enter an email and a password of at least 8 characters.'); return; }
    const { data, error } = await db.auth.signUp({email, password});
    statusCloud(error ? error.message : (data.session ? 'Account created and signed in.' : 'Account created. Check your email to confirm your address, then sign in.'));
});
document.getElementById('cloud-signout').addEventListener('click', () => db.auth.signOut());
document.getElementById('cloud-import').addEventListener('click', cloudImport);
document.getElementById('cloud-refresh').addEventListener('click', async () => {
    if (!cloudReady) { statusCloud('Import your phone data first.'); return; }
    try { await cloudRefresh(); } catch (error) { statusCloud('Sync error: ' + error.message); }
});
db.auth.onAuthStateChange((_event, session) => {
    // Defer queries until after the auth callback completes.
    setTimeout(() => onCloudAuth(session?.user || null), 0);
});
