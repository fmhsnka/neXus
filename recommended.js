document.addEventListener('DOMContentLoaded', function() {
    function getQueryParam(param) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
    }

    const bmi = parseFloat(getQueryParam('bmi'));

    let exercisePlan;
    if (bmi < 18.5) {
        exercisePlan = `
            <div class="exercise-box"><p>Push-up  10x</p></div>
            <div class="exercise-box"><p>Sit-ups  20x</p></div>
            <div class="exercise-box"><p>Squats  20x</p></div>
            <div class="exercise-box"><p>Leg raise  15x</p></div>
            <div class="exercise-box"><p>Pull up  10x</p></div>
        `;
        caloriesBurned = 620;
    } else if (bmi >= 18.5 && bmi < 24.9) {
        exercisePlan = `
            <div class="exercise-box"><p>Push-up  15x</p></div>
            <div class="exercise-box"><p>Tricep dips  20x</p></div>
            <div class="exercise-box"><p>Plank 20 secs</p></div>
            <div class="exercise-box"><p>Lunges  20x</p></div>
            <div class="exercise-box"><p>Sit-ups  20x</p></div>
            <div class="exercise-box"><p>Lateral raise  15x</p></div>
        `;
        caloriesBurned = 698;
    } else if (bmi >= 25 && bmi < 29.9) {
        exercisePlan = `
            <div class="exercise-box"><p>Walking 1hr</p></div>
            <div class="exercise-box"><p>Running 20 mins</p></div>
            <div class="exercise-box"><p>Jumping jacks 50x</p></div>
            <div class="exercise-box"><p>High leg raise  30x</p></div>
            <div class="exercise-box"><p>Front raise  20x</p></div>
        `;
        caloriesBurned = 798;
    } else if (bmi >= 30) {
        exercisePlan = `
            <div class="exercise-box"><p>Walking 30 mins</p></div>
            <div class="exercise-box"><p>Running 10 mins</p></div>
            <div class="exercise-box"><p>Jumping jacks  20x</p></div>
            <div class="exercise-box"><p>Jump squats  10x</p></div>
            <div class="exercise-box"><p>Shrugs  20x</p></div>
        `;
        caloriesBurned = 912;
    } else {
        exercisePlan = `<div class="exercise-box"><p>Invalid BMI value.</p></div>`;
        caloriesBurned = 0;
    }

    document.getElementById('exercise-content').innerHTML = exercisePlan;
    document.getElementById('calories-amount').innerText = caloriesBurned + '!';
});