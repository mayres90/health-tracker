const workoutTemplates = {
    "Upper Strength": [
        { name: "Dead Bug", type: "Core / Warm-up", prescription: "2-3 sets x 8-10 each side" },
        { name: "Band Pull-Apart", type: "Mobility / Activation", prescription: "2 sets x 15-20" },
        { name: "Scapular Push-Up", type: "Mobility / Activation", prescription: "2 sets x 8-12" },
        { name: "Bench Press", type: "Strength", prescription: "4 sets x 4-6 reps" },
        { name: "Pull-Up or Assisted Pull-Up", type: "Strength", prescription: "4 sets x 4-6 reps" },
        { name: "Overhead Press", type: "Strength", prescription: "3 sets x 5-8 reps" },
        { name: "Barbell Row or Dumbbell Row", type: "Strength", prescription: "3 sets x 6-8 reps" },
        { name: "Farmer Carry", type: "Core / Carry", prescription: "3 rounds x 30-45 seconds" },
        { name: "Chest Stretch", type: "Cooldown", prescription: "60 seconds each side" },
        { name: "Lat Stretch", type: "Cooldown", prescription: "60 seconds each side" },
        { name: "Thoracic Rotation", type: "Cooldown", prescription: "8-10 each side" }
    ],

    "Lower Strength": [
        { name: "Glute Bridge", type: "Warm-up", prescription: "2 sets x 10-15" },
        { name: "Hip Flexor Rock-Back", type: "Mobility", prescription: "2 sets x 8-10 each side" },
        { name: "Ankle Rocks", type: "Mobility", prescription: "2 sets x 10 each side" },
        { name: "Back Squat or Front Squat", type: "Strength", prescription: "4 sets x 4-6 reps" },
        { name: "Romanian Deadlift", type: "Strength", prescription: "3 sets x 6-8 reps" },
        { name: "Leg Press", type: "Strength", prescription: "3 sets x 8-10 reps" },
        { name: "Standing Calf Raise", type: "Strength / Tendon", prescription: "3 sets x 10-15 reps" },
        { name: "Side Plank", type: "Core", prescription: "3 sets x 30-45 seconds each side" },
        { name: "Calf Stretch", type: "Cooldown", prescription: "60 seconds each side" },
        { name: "Hamstring Stretch", type: "Cooldown", prescription: "60 seconds each side" },
        { name: "Peroneal / Outer Calf Stretch", type: "Cooldown", prescription: "60 seconds each side" }
    ],

    "Upper Volume": [
        { name: "Plank", type: "Core / Warm-up", prescription: "2-3 sets x 30-60 seconds" },
        { name: "Band External Rotation", type: "Mobility / Activation", prescription: "2 sets x 12-15 each side" },
        { name: "Incline Dumbbell Press", type: "Volume", prescription: "3 sets x 8-12 reps" },
        { name: "Lat Pulldown", type: "Volume", prescription: "3 sets x 8-12 reps" },
        { name: "Seated Row", type: "Volume", prescription: "3 sets x 10-12 reps" },
        { name: "Lateral Raise", type: "Volume", prescription: "3 sets x 12-15 reps" },
        { name: "Biceps Curl", type: "Volume", prescription: "2-3 sets x 10-15 reps" },
        { name: "Triceps Pressdown or Dips", type: "Volume", prescription: "2-3 sets x 10-15 reps" },
        { name: "Hanging Knee Raise or Reverse Crunch", type: "Core", prescription: "3 sets x 8-12 reps" },
        { name: "Chest Stretch", type: "Cooldown", prescription: "60 seconds each side" },
        { name: "Shoulder Stretch", type: "Cooldown", prescription: "60 seconds each side" }
    ],

    "Lower Volume": [
        { name: "Bird Dog", type: "Core / Warm-up", prescription: "2 sets x 8-10 each side" },
        { name: "World's Greatest Stretch", type: "Mobility", prescription: "1-2 rounds each side" },
        { name: "Trap Bar Deadlift or Deadlift", type: "Volume / Strength", prescription: "3 sets x 5-8 reps" },
        { name: "Bulgarian Split Squat", type: "Volume", prescription: "3 sets x 8-10 each side" },
        { name: "Hamstring Curl", type: "Volume", prescription: "3 sets x 10-12 reps" },
        { name: "Leg Extension", type: "Volume", prescription: "3 sets x 10-12 reps" },
        { name: "Seated Calf Raise", type: "Strength / Tendon", prescription: "3 sets x 12-15 reps" },
        { name: "Pallof Press or Cable Hold", type: "Core", prescription: "3 sets x 10-12 each side" },
        { name: "Calf Stretch", type: "Cooldown", prescription: "60 seconds each side" },
        { name: "Hip Flexor Stretch", type: "Cooldown", prescription: "60 seconds each side" },
        { name: "Hamstring Stretch", type: "Cooldown", prescription: "60 seconds each side" },
        { name: "Peroneal / Outer Calf Stretch", type: "Cooldown", prescription: "60 seconds each side" }
    ],

    "Mobility": [
        { name: "Cat-Cow", type: "Spine", prescription: "10 reps" },
        { name: "Thoracic Rotation", type: "Spine", prescription: "8-10 each side" },
        { name: "Hip 90/90 Switches", type: "Hips", prescription: "2 sets x 8 each side" },
        { name: "Couch Stretch", type: "Hips", prescription: "60 seconds each side" },
        { name: "Hamstring Floss", type: "Posterior Chain", prescription: "10 reps each side" },
        { name: "Ankle Rocks", type: "Ankles", prescription: "2 sets x 10 each side" },
        { name: "Calf Stretch", type: "Calves", prescription: "60 seconds each side" },
        { name: "Peroneal / Outer Calf Stretch", type: "Lower Leg", prescription: "60 seconds each side" },
        { name: "Dead Bug", type: "Core", prescription: "2 sets x 8-10 each side" },
        { name: "Side Plank", type: "Core", prescription: "2 sets x 30-45 seconds each side" }
    ]
};

const workoutTypeSelect = document.getElementById("workout-type");
const workoutPlanDiv = document.getElementById("workout-plan");
const currentSessionDiv = document.getElementById("current-session");

workoutTypeSelect.addEventListener("change", function () {
    const selectedWorkout = workoutTypeSelect.value;
    workoutPlanDiv.innerHTML = "";
    currentSessionDiv.innerHTML = "";

    if (!selectedWorkout) {
        return;
    }

    const exercises = workoutTemplates[selectedWorkout];

    exercises.forEach((exercise, index) => {
        const exerciseCard = document.createElement("div");
        exerciseCard.className = "exercise-card";

        exerciseCard.innerHTML = `
            <h3>${exercise.name}</h3>
            <p>${exercise.type}</p>
            <p>${exercise.prescription}</p>

            <label>Weight / Resistance</label>
            <input type="text" id="weight-${index}" placeholder="80 kg, bodyweight, band, or leave blank">

            <label>Actual Reps / Time</label>
            <input type="text" id="reps-${index}" placeholder="5, 5, 5, 5 or 60 sec">

            <label>Notes</label>
            <input type="text" id="notes-${index}" placeholder="Optional">
        `;

        workoutPlanDiv.appendChild(exerciseCard);
    });
});
