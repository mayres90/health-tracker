const trainingTemplates = {
    "Speed Run": {
        run: [{ name: "Speed Run", prescription: "Interval session from your running app" }],
        recovery: [
            "Foam roll calves: 1 min each",
            "Calf stretch, straight knee: 30 sec each",
            "Calf stretch, bent knee: 30 sec each",
            "Hip flexor stretch: 30 sec each"
        ],
        ankle: [
            "Knee-to-wall ankle mobilisation: 2 x 10 each side",
            "Band ankle eversion: 2 x 15 each side",
            "Single-leg balance: 2 x 30-60 sec each side"
        ],
        shoulder: [
            "Thoracic rotations: 8 each side",
            "Foam roll upper back: 1-2 min",
            "Wall slides: 2 x 8",
            "Band external rotations: 2 x 10",
            "Arm reach/protraction: 2 x 8 each side"
        ]
    },

    "Upper Strength": {
        main: [
            { name: "Bench Press", prescription: "4 x 3-5", sets: 4 },
            { name: "Pull-ups", prescription: "4 x 3-5 assisted, bodyweight or weighted", sets: 4 },
            { name: "Overhead Press", prescription: "3 x 5-6", sets: 3 },
            { name: "Barbell Row or Chest Supported Row", prescription: "3 x 5-6", sets: 3 },
            { name: "Push-ups", prescription: "3 sets near max, stop 1-2 reps before failure", sets: 3 },
            { name: "Front Plank", prescription: "3 x 45-60 sec", sets: 3, timed: true }
        ],
        recovery: [
            "Foam roll upper back: 1-2 min",
            "Pec stretch: 30 sec each",
            "Lat stretch: 30 sec each"
        ],
        shoulder: [
            "Thoracic rotations: 8 each side",
            "Wall slides: 2 x 8",
            "Band external rotations: 2 x 10",
            "Arm reach/protraction: 2 x 8 each side"
        ]
    },

    "Easy Run": {
        run: [{ name: "Easy Run", prescription: "Easy aerobic run" }],
        recovery: [
            "Massage ball feet: 1-2 min each",
            "Foam roll calves: 1 min each",
            "Glute stretch: 30 sec each"
        ],
        ankle: [
            "Knee-to-wall ankle mobilisation: 2 x 10 each side",
            "Band ankle eversion: 2 x 15 each side",
            "Single-leg balance: 2 x 30-60 sec each side"
        ],
        shoulder: [
            "Thoracic rotations: 8 each side",
            "Wall slides: 2 x 8",
            "Band external rotations: 2 x 10",
            "Arm reach/protraction: 2 x 8 each side"
        ]
    },

    "Lower Strength": {
        main: [
            { name: "Back Squat", prescription: "4 x 3-5", sets: 4 },
            { name: "Romanian Deadlift", prescription: "3 x 5-6", sets: 3 },
            { name: "Walking Lunges", prescription: "3 x 10 each leg, bodyweight", sets: 3 },
            { name: "Standing Calf Raise", prescription: "3 x 12-15", sets: 3 },
            { name: "Ab Wheel Rollout", prescription: "3 x 8-12", sets: 3 }
        ],
        recovery: [
            "Foam roll calves: 1 min each",
            "Foam roll quads: 1 min each",
            "Hip flexor stretch: 30 sec each",
            "Hamstring stretch: 30 sec each"
        ],
        ankle: [
            "Knee-to-wall ankle mobilisation: 2 x 10 each side",
            "Band ankle eversion: 2 x 15 each side",
            "Single-leg balance: 2 x 30-60 sec each side"
        ],
        shoulder: [
            "Thoracic rotations: 8 each side",
            "Wall slides: 2 x 8",
            "Band external rotations: 2 x 10",
            "Arm reach/protraction: 2 x 8 each side"
        ]
    },

    "Tempo Run": {
        run: [{ name: "Tempo Run", prescription: "Tempo session from your running app" }],
        recovery: [
            "Foam roll calves: 1 min each",
            "Calf stretch, straight knee: 30 sec each",
            "Calf stretch, bent knee: 30 sec each",
            "Quad stretch: 30 sec each"
        ],
        shoulder: [
            "Thoracic rotations: 8 each side",
            "Wall slides: 2 x 8",
            "Band external rotations: 2 x 10",
            "Arm reach/protraction: 2 x 8 each side"
        ]
    },

    "Full Body Volume": {
        main: [
            { name: "Deadlift", prescription: "3 x 6-8", sets: 3 },
            { name: "Incline Dumbbell Press", prescription: "3 x 8-12", sets: 3 },
            { name: "Chin-ups or Lat Pulldown", prescription: "3 x 8-12", sets: 3 },
            { name: "Dumbbell Row", prescription: "3 x 10-12", sets: 3 },
            { name: "Dumbbell Shoulder Press", prescription: "3 x 10-12", sets: 3 },
            { name: "Side Plank", prescription: "3 x 30-45 sec each side", sets: 3, timed: true }
        ],
        finisher: [
            "Optional finisher, only if fresh: 2 rounds",
            "10 Goblet Squats",
            "10 Push-ups",
            "10 Rows"
        ],
        recovery: [
            "Foam roll upper back: 1-2 min",
            "Pec stretch: 30 sec each",
            "Thoracic rotations: 5 each side"
        ],
        shoulder: [
            "Thoracic rotations: 8 each side",
            "Wall slides: 2 x 8",
            "Band external rotations: 2 x 10",
            "Arm reach/protraction: 2 x 8 each side"
        ]
    },

    "Long Run + Mobility": {
        run: [{ name: "Long Run", prescription: "Long easy run" }],
        recovery: [
            "Foam roll calves: 1-2 min each",
            "Foam roll quads: 1 min each",
            "Foam roll glutes: 1 min total",
            "Massage ball feet: 1-1.5 min each",
            "Calf stretch, straight knee: 30 sec each",
            "Calf stretch, bent knee: 30 sec each",
            "Hip flexor stretch: 30 sec each",
            "Glute stretch: 30 sec each",
            "Hamstring stretch: 30 sec each"
        ],
        shoulder: [
            "Thoracic rotations: 8 each side",
            "Band external rotations: 2 x 10",
            "Wall slides: 2 x 8"
        ]
    }
};

const sessionType = document.getElementById("session-type");
const sessionDate = document.getElementById("session-date");
const mainPlan = document.getElementById("main-plan");
const mobilityPlan = document.getElementById("mobility-plan");
const runPlan = document.getElementById("run-plan");
const saveSessionButton = document.getElementById("save-session-button");
const savedSessionsDiv = document.getElementById("saved-sessions");

const checkinDate = document.getElementById("checkin-date");
const bodyweightInput = document.getElementById("bodyweight");
const saveBodyweightButton = document.getElementById("save-bodyweight-button");
const bodyweightHistoryDiv = document.getElementById("bodyweight-history");

sessionType.addEventListener("change", function () {
    clearPlans();

    const selected = sessionType.value;
    if (!selected) return;

    const template = trainingTemplates[selected];

    if (template.run) loadRunCards(runPlan, template.run);
    if (template.main) loadExerciseCards(mainPlan, template.main);
    if (template.finisher) loadSimpleList(mainPlan, template.finisher);
    if (template.recovery) loadSimpleList(mobilityPlan, template.recovery);
    if (template.ankle) loadSimpleList(mobilityPlan, template.ankle);
    if (template.shoulder) loadSimpleList(mobilityPlan, template.shoulder);
});

saveSessionButton.addEventListener("click", saveSession);
saveBodyweightButton.addEventListener("click", saveBodyweight);

function clearPlans() {
    mainPlan.innerHTML = "";
    mobilityPlan.innerHTML = "";
    runPlan.innerHTML = "";
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

        const lastPerformance = getLastExercisePerformance(exercise.name);
        let lastPerformanceText = "";

        if (lastPerformance) {
            const setSummary = lastPerformance.sets
                .filter(set => set.weight !== null || set.reps !== "")
                .map(set => `${set.weight ?? "BW"} x ${set.reps}`)
                .join(", ");

            lastPerformanceText = `<p class="last-performance">Last time: ${setSummary}</p>`;
        }

        let setRows = "";

        for (let i = 1; i <= exercise.sets; i++) {
            setRows += `
                <div class="set-row">
                    <span>Set ${i}</span>
                    <input class="set-weight" type="number" step="0.5" placeholder="kg">
                    <input class="set-reps" type="text" placeholder="${exercise.timed ? "sec" : "reps"}">
                </div>
            `;
        }

        card.innerHTML = `
            <h3>${exercise.name}</h3>
            <p>${exercise.prescription}</p>
            ${lastPerformanceText}

            <div class="set-header">
                <span>Set</span>
                <span>Weight</span>
                <span>${exercise.timed ? "Time" : "Reps"}</span>
            </div>

            ${setRows}

            <label>Notes</label>
            <input class="exercise-notes" type="text" placeholder="Optional">
        `;

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

function saveSession() {
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
    sessions.push(session);

    localStorage.setItem("trainingSessions", JSON.stringify(sessions));

    renderSavedSessions();
    alert("Session saved.");
}

function collectRuns() {
    const runCards = document.querySelectorAll(".run-card");

    return Array.from(runCards).map(card => ({
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
    const strengthCards = document.querySelectorAll(".strength-card");

    return Array.from(strengthCards).map(card => {
        const setRows = card.querySelectorAll(".set-row");

        const sets = Array.from(setRows).map((row, index) => {
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
            sets: sets,
            notes: card.querySelector(".exercise-notes").value,
            totalVolume: calculateTotalVolume(sets)
        };
    });
}

function collectMobility() {
    const mobilityCards = document.querySelectorAll(".mobility-card");

    return Array.from(mobilityCards).map(card => ({
        name: card.dataset.name,
        status: card.querySelector(".mobility-status").value,
        notes: card.querySelector(".mobility-notes").value
    }));
}

function calculateTotalVolume(sets) {
    return sets.reduce((total, set) => {
        const repsNumber = Number(set.reps);

        if (set.weight !== null && !isNaN(repsNumber)) {
            return total + set.weight * repsNumber;
        }

        return total;
    }, 0);
}

function getLastExercisePerformance(exerciseName) {
    const sessions = JSON.parse(localStorage.getItem("trainingSessions")) || [];

    for (let i = sessions.length - 1; i >= 0; i--) {
        const session = sessions[i];

        if (!session.exercises) continue;

        const matchingExercise = session.exercises.find(exercise => exercise.name === exerciseName);

        if (matchingExercise) {
            return matchingExercise;
        }
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

        const exerciseSummary = session.exercises.map(exercise => {
            return `<p>${exercise.name}: ${exercise.totalVolume} kg total volume</p>`;
        }).join("");

        const runSummary = session.runs.map(run => {
            return `<p>${run.name}: ${run.distance} km, ${run.time}</p>`;
        }).join("");

        card.innerHTML = `
            <h3>${session.date} - ${session.type}</h3>
            ${runSummary}
            ${exerciseSummary}
        `;

        savedSessionsDiv.appendChild(card);
    });
}

function saveBodyweight() {
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
    bodyweights.push(entry);

    localStorage.setItem("bodyweights", JSON.stringify(bodyweights));

    renderBodyweightHistory();
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

        card.innerHTML = `
            <p>${entry.date}: ${entry.bodyweight} kg</p>
        `;

        bodyweightHistoryDiv.appendChild(card);
    });
}

window.addEventListener("load", function () {
    renderSavedSessions();
    renderBodyweightHistory();

    if (sessionType.value) {
        sessionType.dispatchEvent(new Event("change"));
    }
});
