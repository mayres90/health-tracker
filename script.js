const trainingTemplates = {
    "Speed Run": {
        run: [
            { name: "Speed Run", prescription: "Interval session from your running app" }
        ],
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
        run: [
            { name: "Easy Run", prescription: "Easy aerobic run" }
        ],
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
        run: [
            { name: "Tempo Run", prescription: "Tempo session from your running app" }
        ],
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
        run: [
            { name: "Long Run", prescription: "Long easy run" }
        ],
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
const mainPlan = document.getElementById("main-plan");
const mobilityPlan = document.getElementById("mobility-plan");
const runPlan = document.getElementById("run-plan");

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

function clearPlans() {
    mainPlan.innerHTML = "";
    mobilityPlan.innerHTML = "";
    runPlan.innerHTML = "";
}

function loadRunCards(container, runs) {
    runs.forEach(run => {
        const card = document.createElement("div");
        card.className = "exercise-card";

        card.innerHTML = `
            <h3>${run.name}</h3>
            <p>${run.prescription}</p>

            <label>Distance (km)</label>
            <input type="number" step="0.01" placeholder="8.0">

            <label>Time</label>
            <input type="text" placeholder="45:30">

            <label>Average Pace</label>
            <input type="text" placeholder="5:41 / km">

            <label>Average Heart Rate</label>
            <input type="number" placeholder="145">

            <label>Notes</label>
            <input type="text" placeholder="How did it feel?">
        `;

        container.appendChild(card);
    });
}

function loadExerciseCards(container, exercises) {
    exercises.forEach(exercise => {
        const card = document.createElement("div");
        card.className = "exercise-card";

        let setRows = "";

        for (let i = 1; i <= exercise.sets; i++) {
            setRows += `
                <div class="set-row">
                    <span>Set ${i}</span>

                    <input type="number" step="0.5" placeholder="kg">

                    <input type="text" placeholder="${exercise.timed ? "sec" : "reps"}">
                </div>
            `;
        }

        card.innerHTML = `
            <h3>${exercise.name}</h3>
            <p>${exercise.prescription}</p>

            <div class="set-header">
                <span>Set</span>
                <span>Weight</span>
                <span>${exercise.timed ? "Time" : "Reps"}</span>
            </div>

            ${setRows}

            <label>Notes</label>
            <input type="text" placeholder="Optional">
        `;

        container.appendChild(card);
    });
}

function loadSimpleList(container, items) {
    items.forEach(item => {
        const card = document.createElement("div");
        card.className = "exercise-card";

        card.innerHTML = `
            <p>${item}</p>

            <label>Completed?</label>
            <select>
                <option value="">Select</option>
                <option value="Yes">Yes</option>
                <option value="Skipped">Skipped</option>
            </select>

            <label>Notes</label>
            <input type="text" placeholder="Optional">
        `;

        container.appendChild(card);
    });
}

window.addEventListener("load", function () {
    if (sessionType.value) {
        sessionType.dispatchEvent(new Event("change"));
    }
});
