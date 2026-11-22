const trainingTemplates = {
    "Speed Run": {
        "run": [
            {
                "name": "Speed Run",
                "prescription": "Speed session as prescribed by your running app"
            }
        ],
        "recovery": [
            "Shoulder pendulums: 1 × 15 each direction",
            "Side arm circles: 2 × 15",
            "Wall crawls: 2 × 15",
            "Thoracic rotations: 1 × 8 each side",
            "Knee to wall: 1 × 10 each leg",
            "Straight knee calf stretch: 1 × 30 sec each",
            "Bent knee calf stretch: 1 × 30 sec each",
            "Calf foam rolling: 1 × 60 sec each",
            "Foot massage ball: 1 × 60 sec each"
        ],
        "additional": [
            {
                "name": "Standing calf raises",
                "sets": 2,
                "prescription": "2 × 15"
            },
            {
                "name": "Toe raises",
                "sets": 2,
                "prescription": "2 × 15"
            }
        ]
    },
    "Upper Strength": {
        "main": [
            {
                "name": "Bench Press",
                "sets": 4,
                "prescription": "4 × 3–5"
            },
            {
                "name": "Pull-ups",
                "sets": 4,
                "prescription": "4 × 3–5",
                "bodyweight": true
            },
            {
                "name": "Overhead Press",
                "sets": 3,
                "prescription": "3 × 5–6"
            },
            {
                "name": "Barbell Row",
                "sets": 3,
                "prescription": "3 × 5–6"
            },
            {
                "name": "Push-ups",
                "sets": 3,
                "prescription": "3 × near maximum",
                "bodyweight": true
            },
            {
                "name": "Front Plank",
                "sets": 3,
                "prescription": "3 × 45–60 sec",
                "timed": true
            }
        ],
        "recovery": [
            "Shoulder pendulums: 1 × 15 each direction",
            "Side arm circles: 2 × 15",
            "Wall crawls: 2 × 15",
            "Thoracic rotations: 1 × 8 each side",
            "Knee to wall: 1 × 10 each leg",
            "Straight knee calf stretch: 1 × 30 sec each",
            "Bent knee calf stretch: 1 × 30 sec each",
            "Pec stretch: 2 × 30 sec",
            "Lat stretch: 2 × 30 sec",
            "Mid-deltoid stretch: 2 × 30 sec"
        ],
        "additional": [
            {
                "name": "Band External Rotation",
                "sets": 2,
                "prescription": "2 × 12–15"
            }
        ]
    },
    "Easy Run": {
        "run": [
            {
                "name": "Easy Run",
                "prescription": "Easy aerobic run as prescribed by your running app"
            }
        ],
        "recovery": [
            "Shoulder pendulums: 1 × 15 each direction",
            "Side arm circles: 2 × 15",
            "Wall crawls: 2 × 15",
            "Thoracic rotations: 1 × 8 each side",
            "Knee to wall: 1 × 10 each leg",
            "Straight knee calf stretch: 1 × 30 sec each",
            "Bent knee calf stretch: 1 × 30 sec each",
            "Calf foam rolling: 1 × 60 sec each",
            "Foot massage ball: 1 × 60 sec each",
            "Glute stretch: 1 × 30 sec each"
        ],
        "additional": [
            {
                "name": "Star Excursion Balance",
                "sets": 2,
                "prescription": "2 × 45 sec each leg",
                "timed": true
            }
        ]
    },
    "Lower Strength": {
        "main": [
            {
                "name": "Back Squat",
                "sets": 4,
                "prescription": "4 × 3–5"
            },
            {
                "name": "Romanian Deadlift",
                "sets": 3,
                "prescription": "3 × 5–6"
            },
            {
                "name": "Walking Lunges",
                "sets": 3,
                "prescription": "3 × 10 each leg"
            },
            {
                "name": "Standing Calf Raise",
                "sets": 3,
                "prescription": "3 × 12–15"
            },
            {
                "name": "Ab Wheel Rollout",
                "sets": 3,
                "prescription": "3 × 8–12"
            }
        ],
        "recovery": [
            "Shoulder pendulums: 1 × 15 each direction",
            "Side arm circles: 2 × 15",
            "Wall crawls: 2 × 15",
            "Thoracic rotations: 1 × 8 each side",
            "Knee to wall: 1 × 10 each leg",
            "Straight knee calf stretch: 1 × 30 sec each",
            "Bent knee calf stretch: 1 × 30 sec each",
            "Quad stretch: 1 × 30 sec each",
            "Hip flexor stretch: 1 × 30 sec each",
            "Hamstring stretch: 1 × 30 sec each"
        ],
        "additional": [
            {
                "name": "Toe Raises",
                "sets": 2,
                "prescription": "2 × 15"
            }
        ]
    },
    "Tempo Run": {
        "run": [
            {
                "name": "Tempo Run",
                "prescription": "Tempo session as prescribed by your running app"
            }
        ],
        "recovery": [
            "Shoulder pendulums: 1 × 15 each direction",
            "Side arm circles: 2 × 15",
            "Wall crawls: 2 × 15",
            "Thoracic rotations: 1 × 8 each side",
            "Knee to wall: 1 × 10 each leg",
            "Straight knee calf stretch: 1 × 30 sec each",
            "Bent knee calf stretch: 1 × 30 sec each",
            "Calf foam rolling: 1 × 60 sec each",
            "Hip flexor stretch: 1 × 30 sec each"
        ],
        "additional": [
            {
                "name": "Band External Rotation",
                "sets": 2,
                "prescription": "2 × 12–15"
            }
        ]
    },
    "Joint Strength and Stability": {
        "main": [
            {
                "name": "Single Leg Romanian Deadlift",
                "sets": 3,
                "prescription": "3 × 8 each leg"
            },
            {
                "name": "Dumbbell Lateral Raise",
                "sets": 3,
                "prescription": "3 × 12–15"
            },
            {
                "name": "Dumbbell Front Raise",
                "sets": 3,
                "prescription": "3 × 12–15"
            },
            {
                "name": "Band External Rotation",
                "sets": 3,
                "prescription": "3 × 12–15"
            },
            {
                "name": "Step Downs",
                "sets": 3,
                "prescription": "3 × 8 each leg"
            },
            {
                "name": "Star Excursion Balance",
                "sets": 2,
                "prescription": "2 × 45 sec each leg",
                "timed": true
            },
            {
                "name": "Single Leg Calf Raise",
                "sets": 3,
                "prescription": "3 × 12 each leg"
            },
            {
                "name": "Side Plank",
                "sets": 3,
                "prescription": "3 × 30–45 sec each side",
                "timed": true
            }
        ],
        "recovery": [
            "Shoulder pendulums: 1 × 15 each direction",
            "Side arm circles: 2 × 15",
            "Wall crawls: 2 × 15",
            "Thoracic rotations: 1 × 8 each side",
            "Knee to wall: 1 × 10 each leg",
            "Straight knee calf stretch: 1 × 30 sec each",
            "Bent knee calf stretch: 1 × 30 sec each"
        ]
    },
    "Long Run": {
        "run": [
            {
                "name": "Long Run",
                "prescription": "Easy long run, progressing towards 10–20 km"
            }
        ],
        "recovery": [
            "Shoulder pendulums: 1 × 15 each direction",
            "Side arm circles: 2 × 15",
            "Wall crawls: 2 × 15",
            "Thoracic rotations: 2 × 8 each side",
            "Knee to wall: 2 × 10 each leg",
            "Straight knee calf stretch: 2 × 30 sec each",
            "Bent knee calf stretch: 2 × 30 sec each",
            "Hip flexor stretch: 2 × 30 sec each",
            "Hamstring stretch: 2 × 30 sec each",
            "Glute stretch: 2 × 30 sec each",
            "Pec stretch: 2 × 30 sec",
            "Lat stretch: 2 × 30 sec",
            "Calf foam rolling: 1 × 90 sec each",
            "Quad foam rolling: 1 × 60 sec each",
            "Foot massage ball: 1 × 60 sec each"
        ]
    }
};

const sessionType = document.getElementById("session-type");
const sessionDate = document.getElementById("session-date");
const mainPlan = document.getElementById("main-plan");
const mobilityPlan = document.getElementById("mobility-plan");
const runPlan = document.getElementById("run-plan");
const submitSessionButton = document.getElementById("submit-session-button");
const clearDraftButton = document.getElementById("clear-draft-button");
const draftStatus = document.getElementById("draft-status");
const savedSessionsDiv = document.getElementById("saved-sessions");

const checkinDate = document.getElementById("checkin-date");
const bodyweightInput = document.getElementById("bodyweight");
const saveBodyweightButton = document.getElementById("save-bodyweight-button");
const bodyweightHistoryDiv = document.getElementById("bodyweight-history");

let draftTimer = null;
let isRestoringDraft = false;

sessionType.addEventListener("change", function () {
    clearPlans();

    const selected = sessionType.value;
    if (!selected) {
        scheduleDraftSave();
        return;
    }

    const template = trainingTemplates[selected];

    if (template.run) loadRunCards(runPlan, template.run);
    if (template.main) loadExerciseCards(mainPlan, template.main);
    if (template.additional) loadExerciseCards(document.getElementById("additional-plan"), template.additional);
    if (template.recovery) loadSimpleList(mobilityPlan, template.recovery);


    scheduleDraftSave();
});

submitSessionButton.addEventListener("click", submitSession);
clearDraftButton.addEventListener("click", clearDraft);
saveBodyweightButton.addEventListener("click", saveBodyweight);

document.getElementById('session-date').addEventListener('input', scheduleDraftSave);
for (const id of ['run-plan','main-plan','additional-plan','mobility-plan']) {
    document.getElementById(id).addEventListener('input', scheduleDraftSave);
    document.getElementById(id).addEventListener('change', scheduleDraftSave);
}
document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden' && draftTimer) { clearTimeout(draftTimer); draftTimer = null; saveDraft(); }
});
window.addEventListener('pagehide', () => {
    if (draftTimer) { clearTimeout(draftTimer); draftTimer = null; saveDraft(); }
});

function clearPlans() {
    mainPlan.innerHTML = "";
    mobilityPlan.innerHTML = "";
    runPlan.innerHTML = "";
    document.getElementById("additional-plan").innerHTML = "";
}

function loadRunCards(container, runs) {
    runs.forEach(run => {
        const card = document.createElement("div");
        card.className = "exercise-card run-card";
        card.dataset.name = run.name;
        card.dataset.prescription = run.prescription;

        card.innerHTML = `
            <h3>${run.name}</h3>
            <p>${run.prescription}</p>
            <label>Distance (km)</label>
            <input class="run-distance" type="number" step="0.01" placeholder="8.0">
            <label>Time</label>
            <input class="run-time" type="text" placeholder="45:30">
            <label>Average Pace</label>
            <input class="run-pace" type="text" placeholder="5:41 / km">
            <label>Average Heart Rate</label>
            <input class="run-hr" type="number" placeholder="145">
            <label>Notes</label>
            <input class="run-notes" type="text" placeholder="How did it feel?">
        `;

        container.appendChild(card);
    });
}

function loadExerciseCards(container, exercises) {
    exercises.forEach(exercise => {
        const card = document.createElement("div");
        card.className = "exercise-card strength-card";
        card.dataset.name = exercise.name;
        card.dataset.prescription = exercise.prescription;
        card.dataset.timed = exercise.timed ? "true" : "false";
        card.dataset.bodyweight = exercise.bodyweight ? "true" : "false";

        const lastPerformance = getLastExercisePerformance(exercise.name);
        let lastPerformanceText = "";

        if (lastPerformance) {
            const setSummary = lastPerformance.sets
                .filter(set => set.weight !== null || set.reps !== "")
                .map(set => `${set.weight ?? "BW"} x ${set.reps}`)
                .join(", ");

            lastPerformanceText = `<p class="last-performance">Last time (${lastPerformance.date}): ${setSummary}</p>`;
        }

        let setRows = "";

        for (let i = 1; i <= exercise.sets; i++) {
            setRows += `
                <div class="set-row">
                    <span>Set ${i}</span>
                    <input class="set-weight" type="number" step="0.5" inputmode="decimal" placeholder="kg">
                    <input class="set-reps" type="number" min="0" step="1" inputmode="numeric" placeholder="${exercise.timed ? "sec" : "reps"}">
                </div>
            `;
        }

        card.innerHTML = `
            <h3>${exercise.name}</h3>
            <p>${exercise.prescription}</p>
            ${lastPerformanceText}
            ${lastPerformance ? '<button type="button" class="copy-last secondary-button">Copy Last Workout</button>' : ''}
            ${exercise.bodyweight ? '<p>Weight: enter added kg as positive, band assistance as negative or 0 for bodyweight.</p>' : ''}
            <div class="set-header">
                <span>Set</span>
                <span>Weight</span>
                <span>${exercise.timed ? "Time" : "Reps"}</span>
            </div>
            ${setRows}
            <label>Notes</label>
            <input class="exercise-notes" type="text" placeholder="Optional">
        `;

        const copyButton = card.querySelector('.copy-last');
        if (copyButton && lastPerformance) copyButton.addEventListener('click', () => {
            card.querySelectorAll('.set-row').forEach((row, index) => {
                const previous = lastPerformance.sets[index];
                if (!previous) return;
                row.querySelector('.set-weight').value = previous.weight ?? '';
                row.querySelector('.set-reps').value = previous.reps ?? '';
            });
            scheduleDraftSave();
        });
        container.appendChild(card);
    });
}

function loadSimpleList(container, items) {
    items.forEach(item => {
        const card = document.createElement("div");
        card.className = "exercise-card mobility-card";
        card.dataset.name = item;

        card.innerHTML = `
            <p>${item}</p>
            <label>Completed?</label>
            <select class="mobility-status">
                <option value="">Select</option>
                <option value="Yes">Yes</option>
                <option value="Skipped">Skipped</option>
            </select>
            <label>Notes</label>
            <input class="mobility-notes" type="text" placeholder="Optional">
        `;

        container.appendChild(card);
    });
}

function scheduleDraftSave() {
    if (isRestoringDraft) return;

    draftStatus.textContent = "Draft changes pending...";

    clearTimeout(draftTimer);

    draftTimer = setTimeout(() => { draftTimer = null; saveDraft(); }, 800);
}

function saveDraft() {
    const draft = {
        date: sessionDate.value,
        type: sessionType.value,
        runs: collectRuns(),
        exercises: collectExercises(),
        mobility: collectMobility()
    };

    localStorage.setItem("currentDraftSession", JSON.stringify(draft));
    draftStatus.textContent = "Draft autosaved.";
}

function restoreDraft() {
    const draft = JSON.parse(localStorage.getItem("currentDraftSession") || "null");

    if (!draft) {
        draftStatus.textContent = "No draft saved.";
        return;
    }

    isRestoringDraft = true;

    sessionDate.value = draft.date || "";
    sessionType.value = draft.type || "";

    if (sessionType.value) {
        sessionType.dispatchEvent(new Event("change"));
    }

    setTimeout(() => {
        restoreRunDraft(draft.runs || []);
        restoreExerciseDraft(draft.exercises || []);
        restoreMobilityDraft(draft.mobility || []);

        draftStatus.textContent = "Draft restored.";
        isRestoringDraft = false;
    }, 100);
}

function restoreRunDraft(runs) {
    const runCards = document.querySelectorAll(".run-card");

    runCards.forEach((card, index) => {
        const run = runs[index];
        if (!run) return;

        card.querySelector(".run-distance").value = run.distance ?? "";
        card.querySelector(".run-time").value = run.time || "";
        card.querySelector(".run-pace").value = run.pace || "";
        card.querySelector(".run-hr").value = run.averageHeartRate || "";
        card.querySelector(".run-notes").value = run.notes || "";
    });
}

function restoreExerciseDraft(exercises) {
    const strengthCards = document.querySelectorAll(".strength-card");

    strengthCards.forEach((card, exerciseIndex) => {
        const exercise = exercises[exerciseIndex];
        if (!exercise) return;

        const rows = card.querySelectorAll(".set-row");

        rows.forEach((row, setIndex) => {
            const set = exercise.sets[setIndex];
            if (!set) return;

            row.querySelector(".set-weight").value = set.weight ?? "";
            row.querySelector(".set-reps").value = set.reps ?? "";
        });

        card.querySelector(".exercise-notes").value = exercise.notes || "";
    });
}

function restoreMobilityDraft(mobilityItems) {
    const mobilityCards = document.querySelectorAll(".mobility-card");

    mobilityCards.forEach((card, index) => {
        const item = mobilityItems[index];
        if (!item) return;

        card.querySelector(".mobility-status").value = item.status || "";
        card.querySelector(".mobility-notes").value = item.notes || "";
    });
}

function clearDraft() {
    clearTimeout(draftTimer);
    localStorage.removeItem("currentDraftSession");

    sessionDate.value = "";
    sessionType.value = "";

    clearPlans();
    draftStatus.textContent = "Draft cleared.";
}

async function submitSession() {
    if (!sessionDate.value || !sessionType.value) {
        alert("Enter a date and select a session type.");
        return;
    }

    const session = {
        id: Date.now(),
        date: sessionDate.value,
        type: sessionType.value,
        runs: collectRuns(),
        exercises: collectExercises(),
        mobility: collectMobility()
    };

    const sessions = JSON.parse(localStorage.getItem("trainingSessions")) || [];
    if (typeof cloudUser !== 'undefined' && (!cloudUser || !cloudReady)) {
        alert('Cloud account is not ready. Import your existing phone data first.'); return;
    }
    try { await cloudSaveWorkout(session); } catch (error) { alert('Cloud save failed: ' + error.message); return; }
    sessions.push(session);

    localStorage.setItem("trainingSessions", JSON.stringify(sessions));
    localStorage.removeItem("currentDraftSession");

    renderSavedSessions();
    renderDashboard();
    clearDraft();

    draftStatus.textContent = "Session submitted. Draft cleared.";
    alert("Session submitted.");
}

function collectRuns() {
    return Array.from(document.querySelectorAll(".run-card")).map(card => ({
        name: card.dataset.name,
        prescription: card.dataset.prescription,
        distance: card.querySelector(".run-distance").value,
        time: card.querySelector(".run-time").value,
        pace: card.querySelector(".run-pace").value,
        averageHeartRate: card.querySelector(".run-hr").value,
        notes: card.querySelector(".run-notes").value
    }));
}

function collectExercises() {
    return Array.from(document.querySelectorAll(".strength-card")).map(card => {
        const sets = Array.from(card.querySelectorAll(".set-row")).map((row, index) => {
            const weightValue = row.querySelector(".set-weight").value;
            const repsValue = row.querySelector(".set-reps").value;

            return {
                set: index + 1,
                weight: weightValue === "" ? null : Number(weightValue),
                reps: repsValue
            };
        });

        return {
            name: card.dataset.name,
            prescription: card.dataset.prescription,
            timed: card.dataset.timed === "true",
            bodyweight: card.dataset.bodyweight === "true",
            sets: sets,
            notes: card.querySelector(".exercise-notes").value,
            totalVolume: calculateTotalVolume(sets, card.dataset.bodyweight === "true", card.dataset.timed === "true")
        };
    });
}

function collectMobility() {
    return Array.from(document.querySelectorAll(".mobility-card")).map(card => ({
        name: card.dataset.name,
        status: card.querySelector(".mobility-status").value,
        notes: card.querySelector(".mobility-notes").value
    }));
}

function calculateTotalVolume(sets, bodyweight = false, timed = false) {
    if (timed) return null;
    const entries = JSON.parse(localStorage.getItem('bodyweights') || '[]');
    const latestWeight = entries.slice().sort((a,b) => b.date.localeCompare(a.date))[0]?.bodyweight;
    if (bodyweight && !latestWeight) return null;
    return sets.reduce((total, set) => {
        if (set.reps === '' || set.reps === null || !Number.isFinite(Number(set.reps))) return total;
        const load = bodyweight ? Number(latestWeight) + (set.weight ?? 0) : set.weight;
        return load === null ? total : total + Math.max(0, load) * Number(set.reps);
    }, 0);
}

function getLastExercisePerformance(exerciseName) {
    const sessions = JSON.parse(localStorage.getItem('trainingSessions') || '[]');
    const sorted = sessions.slice().sort((a,b) => (b.date || '').localeCompare(a.date || ''));
    for (const session of sorted) {
        const match = session.exercises?.find(exercise => exercise.name === exerciseName);
        if (match) return { ...match, date: session.date };
    }
    return null;
}

function renderSavedSessions() {
    const sessions = JSON.parse(localStorage.getItem("trainingSessions")) || [];
    savedSessionsDiv.innerHTML = "";

    if (sessions.length === 0) {
        savedSessionsDiv.innerHTML = "<p>No sessions saved yet.</p>";
        return;
    }

    sessions.slice().reverse().forEach(session => {
        const card = document.createElement("div");
        card.className = "exercise-card";

        const exerciseSummary = (session.exercises || []).map(exercise => {
            const sets = (exercise.sets || []).filter(x => x.reps !== '' && x.reps != null).map(x => `${x.weight ?? 'BW'} kg × ${x.reps}${exercise.timed ? ' sec' : ''}`).join(', ');
            return `<p>${escapeHtml(exercise.name)}: ${escapeHtml(sets || 'No sets recorded')}</p>`;
        }).join('');
        const runSummary = (session.runs || []).map(run => `<p>${escapeHtml(run.name)}: ${escapeHtml(run.distance)} km, ${escapeHtml(run.time)}</p>`).join("");

        card.innerHTML = `
            <h3>${escapeHtml(session.date)} · ${escapeHtml(session.type)}</h3>
            ${runSummary}
            ${exerciseSummary}
            <button class="delete-button" onclick="deleteSession(${session.id})">Delete Session</button>
        `;

        savedSessionsDiv.appendChild(card);
    });
}

async function deleteSession(sessionId) {
    const sessions = JSON.parse(localStorage.getItem("trainingSessions")) || [];
    if (!confirm('Delete this session?')) return;
    if (typeof cloudUser !== 'undefined' && (!cloudUser || !cloudReady)) { alert('Import your existing data first.'); return; }
    try { await cloudDeleteWorkout(sessionId); } catch (error) { alert('Cloud deletion failed: ' + error.message); return; }
    const updatedSessions = sessions.filter(session => session.id !== sessionId);

    localStorage.setItem("trainingSessions", JSON.stringify(updatedSessions));
    renderSavedSessions();
    renderDashboard();
}

async function saveBodyweight() {
    if (!checkinDate.value || !bodyweightInput.value) {
        alert("Enter a date and bodyweight.");
        return;
    }

    const entry = {
        id: Date.now(),
        date: checkinDate.value,
        bodyweight: Number(bodyweightInput.value)
    };

    const bodyweights = JSON.parse(localStorage.getItem("bodyweights")) || [];
    if (typeof cloudUser !== 'undefined' && (!cloudUser || !cloudReady)) { alert('Import your existing data first.'); return; }
    try { await cloudSaveWeight(entry); } catch (error) { alert('Cloud save failed: ' + error.message); return; }
    bodyweights.push(entry);

    localStorage.setItem("bodyweights", JSON.stringify(bodyweights));
    renderBodyweightHistory();
    renderDashboard();

    alert("Bodyweight saved.");
}

function renderBodyweightHistory() {
    const bodyweights = JSON.parse(localStorage.getItem("bodyweights")) || [];
    bodyweightHistoryDiv.innerHTML = "";

    if (bodyweights.length === 0) {
        bodyweightHistoryDiv.innerHTML = "<p>No bodyweight entries saved yet.</p>";
        return;
    }

    bodyweights.slice().reverse().forEach(entry => {
        const card = document.createElement("div");
        card.className = "exercise-card";
        card.innerHTML = `<p>${entry.date}: ${entry.bodyweight} kg</p>`;
        bodyweightHistoryDiv.appendChild(card);
    });
}

window.addEventListener("load", function () {
    renderSavedSessions();
    renderBodyweightHistory();
    renderDashboard();
    restoreDraft();
});


// Download existing browser data without modifying it.
document.getElementById("export-data-button").addEventListener("click", function () {
    const keys = ["trainingSessions", "bodyweights", "currentDraftSession"];
    const backup = {
        format: "health-tracker-localstorage-backup",
        version: 1,
        exportedAt: new Date().toISOString(),
        origin: window.location.origin,
        data: {}
    };
    for (const key of keys) {
        const raw = localStorage.getItem(key);
        if (raw === null) {
            backup.data[key] = null;
        } else {
            try { backup.data[key] = JSON.parse(raw); }
            catch (error) { backup.data[key] = raw; }
        }
    }
    const file = new Blob([JSON.stringify(backup, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(file);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "health-tracker-backup-" + new Date().toISOString().slice(0, 10) + ".json";
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
});

function escapeHtml(value) {
    return String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}
let dashboardCharts = [];
function renderDashboard() {
    if (!window.Chart) return;
    dashboardCharts.forEach(chart => chart.destroy()); dashboardCharts = [];
    const sessions = JSON.parse(localStorage.getItem('trainingSessions') || '[]');
    const weights = JSON.parse(localStorage.getItem('bodyweights') || '[]').slice().sort((a,b) => a.date.localeCompare(b.date));
    const runs = sessions.flatMap(s => (s.runs || []).filter(r => Number(r.distance)>0).map(r => ({date:s.date, distance:Number(r.distance), time:r.time}))).sort((a,b)=>a.date.localeCompare(b.date));
    const completed = sessions.filter(s => s.date);
    const totalKm = runs.reduce((sum,r)=>sum+r.distance,0);
    document.getElementById('dashboard-summary').textContent = `${completed.length} sessions · ${totalKm.toFixed(1)} km logged · ${weights.length} weigh-ins`;
    const graph = (id, labels, values, label) => {
        const canvas = document.getElementById(id);
        dashboardCharts.push(new Chart(canvas, {type:'line',data:{labels,datasets:[{label,data:values,borderColor:'#70a5ff',backgroundColor:'rgba(112,165,255,.12)',tension:.2,fill:true}]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{labels:{color:'#eee'}}},scales:{x:{ticks:{color:'#aaa',maxTicksLimit:7}},y:{ticks:{color:'#aaa'}}}}}));
    };
    graph('weight-chart',weights.map(w=>w.date),weights.map(w=>Number(w.bodyweight)),'Bodyweight (kg)');
    const weeks = new Map();
    for (const r of runs) {
        const d = new Date(r.date+'T12:00:00'); const dow = (d.getDay()+6)%7; d.setDate(d.getDate()-dow);
        const key = d.toISOString().slice(0,10); weeks.set(key,(weeks.get(key)||0)+r.distance);
    }
    graph('run-chart',[...weeks.keys()].sort(),[...weeks.keys()].sort().map(k=>Number(weeks.get(k).toFixed(2))),'Weekly running distance (km)');
    const selector = document.getElementById('strength-exercise');
    const selected = selector.value;
    const names = [...new Set(sessions.flatMap(s=>(s.exercises||[]).map(e=>e.name)))].sort();
    selector.replaceChildren(new Option('Select exercise',''),...names.map(n=>new Option(n,n)));
    selector.value = names.includes(selected) ? selected : (names[0] || '');
    renderStrengthChart(sessions);
    const counts = new Map();
    for (const s of completed) {const key=s.date.slice(0,7); counts.set(key,(counts.get(key)||0)+1);}
    graph('consistency-chart',[...counts.keys()].sort(),[...counts.keys()].sort().map(k=>counts.get(k)),'Sessions per month');
}
function renderStrengthChart(sessions) {
    const existing = dashboardCharts.find(c=>c.canvas.id==='strength-chart');
    if (existing) {existing.destroy();dashboardCharts=dashboardCharts.filter(c=>c!==existing);}
    const name=document.getElementById('strength-exercise').value;
    const points=sessions.slice().sort((a,b)=>a.date.localeCompare(b.date)).flatMap(s=>(s.exercises||[]).filter(e=>e.name===name).map(e=>({date:s.date,volume:e.totalVolume})) ).filter(p=>p.volume!==null && p.volume!==undefined && Number.isFinite(Number(p.volume)));
    dashboardCharts.push(new Chart(document.getElementById('strength-chart'),{type:'line',data:{labels:points.map(p=>p.date),datasets:[{label:'Recorded volume (kg × reps)',data:points.map(p=>p.volume),borderColor:'#70a5ff',tension:.2}]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{labels:{color:'#eee'}}},scales:{x:{ticks:{color:'#aaa',maxTicksLimit:7}},y:{ticks:{color:'#aaa'}}}}}));
}
document.getElementById('strength-exercise').addEventListener('change',()=>renderStrengthChart(JSON.parse(localStorage.getItem('trainingSessions')||'[]')));
