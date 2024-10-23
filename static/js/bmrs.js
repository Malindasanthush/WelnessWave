document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('cal-form').addEventListener('submit', function (e) {
        e.preventDefault();
        calculateBMR();
    });

    function calculateBMR() {
        // Set initial BMR output to 0
        document.getElementById('bmr-output').innerText = "0";
        document.getElementById('descr').innerText = "N/A";

        // Get input values
        const age = document.getElementById('age').value;
        const gender = document.querySelector('input[name="gender"]:checked').value;
        const weight = document.getElementById('weight').value;
        const height = document.getElementById('height').value;

        // Validate inputs
        if (age <= 0 || weight <= 0 || height <= 0) {
            alert('Please enter valid inputs.');
            return;
        }

        // Calculate BMR
        let bmr;
        if (gender === 'male') {
            bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
        } else {
            bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
        }

        // Calculate calorie needs for moderately active level
        const calories = bmr * 1.55;

        // Display the result
        setTimeout(() => {
            document.getElementById('bmr-output').innerText = `${bmr.toFixed(2)}`;
            document.getElementById('descr').innerText = `You need approximately ${calories.toFixed(2)} calories/day based on your moderately active lifestyle.`;
        }, 0);
    }
});
