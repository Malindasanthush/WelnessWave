function calculate() {
  // Get input values
  const age = document.getElementById('age').value;
  const height = document.getElementById('height').value;
  const weight = document.getElementById('weight').value;
  const gender = document.querySelector('input[name="gender"]:checked').value;

  // Calculate BMI
  const bmi = (weight / ((height / 100) ** 2)).toFixed(2);
  let bmiCategory;
  let calorieAdjustment;

  // Determine BMI category and adjustment factor
  if (bmi < 18.5) {
    bmiCategory = "Underweight";
    calorieAdjustment = 1.2; // Add 20%
  } else if (bmi >= 18.5 && bmi < 24) {
    bmiCategory = "Healthy";
    calorieAdjustment = 1.2; // Add 20%
  } else if (bmi >= 24 && bmi < 30) {
    bmiCategory = "Overweight";
    calorieAdjustment = 0.8; // Subtract 20%
  } else {
    bmiCategory = "Obese";
    calorieAdjustment = 0.7; // Subtract 30%
  }

  // Calculate BMR using Harris-Benedict equation
  let bmr;
  if (gender === 'male') {
    bmr = (88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age)) * 1.3;
  } else {
    bmr = (447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age)) * 1.3;
  }
  bmr = bmr.toFixed(2);

  // Calculate daily calories needs
  const adjustedCalories = (bmr * calorieAdjustment).toFixed(2);
  const carbs = (adjustedCalories * 0.5 / 4).toFixed(2); // 50% of calories from carbs, 4 kcal/g
  const protein = (adjustedCalories * 0.3 / 4).toFixed(2); // 30% of calories from protein, 4 kcal/g
  const fats = (adjustedCalories * 0.2 / 9).toFixed(2); // 20% of calories from fats, 9 kcal/g

  // Display results
  document.getElementById('bmi-result').textContent = `BMI: ${bmi} (${bmiCategory})`;
  document.getElementById('bmr-result').textContent = `Basic Calorie: ${bmr} kcal/day`;
  document.getElementById('calories-result').textContent = `Target Calorie: ${adjustedCalories} kcal`;
  document.getElementById('carbs-result').textContent = `Carbs: ${carbs}g`;
  document.getElementById('protein-result').textContent = `Protein: ${protein}g`;
  document.getElementById('fats-result').textContent = `Fats: ${fats}g`;
  //Carbs
  const CNut = (carbs/3);
  const Rice = Math.floor((CNut/28)*100);
  const Pasta = Math.floor((CNut/28)*100);
  const MungBeans = Math.floor((CNut/25)*100);
  const Chickpea = Math.floor((CNut/28)*100);
  const BrownRice = Math.floor((CNut/28)*100);
  const KidneyBeans = Math.floor((CNut/28)*100);
  const Oats = Math.floor((CNut/30)*100);
//Protein
  const PNut = (protein/2);
  const Chickenbreast = Math.floor((PNut/28)*100);
  const Tuna = Math.floor((PNut/25)*100);
  const poke =Math.floor((PNut/25)*100);
  //Fats
  const FNut = fats
  const Avacado = Math.floor((fats/20)*100);
  // Define workout plans
  const workoutPlans = {
    underweight: {
      male: [
        "Cycling 20min,Bench-press 12 3,Pushups 12 4 ,Shoulder-press 12 3, Dumbell-Lateral-raises 12 4,Smith-squat 12 4 ,Deadlift 12 4,EZbar-curl 12 3,Tricep-push-down 12 3,Supported-pullups 12 3,Abs-crunches 15 4,3-Days-per-Week(Low-weight)",
        "Running 20min,Incline-press 12 3,Dips 12 4 ,Front-raises 12 4, Reverse-fly 12 4 ,Barbell-squat 12 4,Deadlift 12 4,Dumbbell-curl 12 3,Tricep-rope-down 12 3,Lat-pull-down 12 3,Reverse-crunches 15 4,3-Days-per-Week(Low-weight)",
        "Cycling 20min,Dumbbell-Bench-press 12 3,Pushups 12 4 ,Arnold-press 12 3, Upright-row 12 4,Dumbbell-squat 12 4 ,Deadlift 12 4,Barbell-curl 12 3,Tricep-dips 12 3,Supported-pullups 12 3,Leg-raises 15 4,3-Days-per-Week(Low-weight)",
        "Running 20min,Dumbbell-Fly 12 4,Dips 12 4 ,Shoulder-press 12 3, Dumbell-Lateral-raises 12 4,Goblin-squat 12 4 ,Deadlift 12 4,Hammer-curl 12 3,Tricep-extention 12 3,Lat-pull-down 12 3,Abs-crunches 15 4,3-Days-per-Week(Low-weight)",
        "Cycling 20min,Chest-press 12 4,Pushups 12 4 ,Front-raises 12 3, Reverse-fly 12 4,Smith-squat 12 4 ,Deadlift 12 4,Barbell-curl 12 3,Tricep-push-down 12 3,Supported-pullups 12 3,Cable-crunches 15 4,3-Days-per-Week(Low-weight)",
        "Running 20min,Cable-fly 12 4,Dips 12 4 ,Arnold-press 12 3, Upright-row 12 4,Barbell-squat 12 4 ,Deadlift 12 4,Hammer-curl 12 3,Tricep-rope-down 12 3,Lat-pull-down 12 3,Leg-raises 15 4,3-Days-per-Week(Low-weight)",
        "Cycling 20min,Dumbbell-pullover 12 3,Pushups 12 4 ,Shoulder-press 12 4, Dumbell-Lateral-raises 12 3 ,Dumbbell-squat 12 4 ,Deadlift 12 4,Ezbar-curl 12 3,Tricep-push-down 12 3,Supported-pullups 12 3,Reverse-crunches 15 4,3-Days-per-Week(Low-weight)",
        "Running 20min,Cable-CrossOver 12 4,Dips 12 4 ,Dumbbell-Shoulder-press 12 4,Reverse-fly 12 3 ,Goblin-squat 12 4 ,Deadlift 12 4,Dumbbell-curl 12 3,Tricep-extention 12 3,Lat-pull-down 12 3,Seated-crunches 15 4,3-Days-per-Week(Low-weight)",
        "Cycling 20min,Plate-press 12 4,Pushups 12 4 ,Arnold-press 12 3,Upright-row 12 4,Smith-squat 12 4 ,Deadlift 12 4,Barbell-curl 12 3,Tricep-dips 12 3,Supported-pullups 12 3,Bicycle-crunches 15 4,3-Days-per-Week(Low-weight)",
        "Running 20min,Bench-press 12 3,Dips 12 4 ,Neck-press 12 3, Dumbell-Lateral-raises 12 4,Split-squat 12 4 ,Deadlift 12 4,Hammer-curl 12 3,Tricep-rope-down 12 3,Lat-pull-down 12 3,Abs-crunches 15 4,3-Days-per-Week(Low-weight)",
        "Cycling 20min,Low-cable-fly 12 4,Pushups 12 4 ,Push-press 12 3,Reverse-fly 12 4,Smith-squat 12 4 ,Deadlift 12 4,Barbell-curl 12 3,Tricep-push-down 12 3,Supported-pullups 12 3,Leg-raises 15 4,3-Days-per-Week(Low-weight)",
        "Running 20min,Dumbbell-Incline-press 12 3, Dips 12 4 ,Front-raises 12 3,upright-row 12 4,Goblin-squat 12 4,Deadlift 12 4,Cable-curl 12 3,Tricep-extention 12 3,Lat-pull-down 12 3,Reverse-crunches 15 4,3-Days-per-Week(Low-weight)",
        "Cycling 20min,Decline-press 12 3,Pushups 12 4 ,Dumbbell-Shoulder-press 12 3, Dumbell-Lateral-raises 12 4,Dumbbell-squat 12 4 ,Deadlift 12 4,Barbell-curl 12 3,Tricep-rope-down 12 3,Supported-pullups 12 3,Abs-crunches 15 4,3-Days-per-Week(Low-weight)",
        "Running 20min,Cable-chest-press 12 3,Dips 12 4 ,Arnold-press 12 3, Reverse-fly 12 4,Smith-squat 12 4,Deadlift 12 4,Hammer-curl 12 3,Tricep-push-down 12 3,Lat-pull-down 12 3,Leg-raises 15 4,3-Days-per-Week(Low-weight)",

      ],
      female: [
        "Cycling 20min,Bench-press 12 3,modified-Pushups 12 3,Shoulder-press 12 3,Dumbell-Lateral-raises 12 3,Smith-squat 12 3 ,Deadlift 12 3,EZbar-curl 12 3,Tricep-push-down 12 3,Supported-pullups 12 3,Abs-crunches 15 4,3-Days-per-Week(Low-weight)",
        "Running 20min,Incline-press 12 3,modified-Dips 12 3,Front-raises 12 3,Reverse-fly 12 3 ,Barbell-squat 12 3,Deadlift 12 3,Dumbbell-curl 12 3,Tricep-rope-down 12 3,Lat-pull-down 12 3,Reverse-crunches 15 4,3-Days-per-Week(Low-weight)",
        "Cycling 20min,Dumbbell-Bench-press 12 3,modified-Pushups 12 3,Arnold-press 12 3,Upright-row 12 3,Dumbbell-squat 12 3 ,Deadlift 12 3,Barbell-curl 12 3,Tricep-dips 12 3,Supported-pullups 12 3,Leg-raises 15 4,3-Days-per-Week(Low-weight)",
        "Running 20min,Dumbbell-Fly 12 3,modified-Dips 12 3,Shoulder-press 12 3,Dumbell-Lateral-raises 12 3,Goblin-squat 12 3 ,Deadlift 12 3,Hammer-curl 12 3,Tricep-extention 12 3,Lat-pull-down 12 3,Abs-crunches 15 4,3-Days-per-Week(Low-weight)",
        "Cycling 20min,Chest-press 12 3,modified-Pushups 12 3,Front-raises 12 3,Reverse-fly 12 3,Smith-squat 12 3 ,Deadlift 12 3,Barbell-curl 12 3,Tricep-push-down 12 3,Supported-pullups 12 3,Cable-crunches 15 4,3-Days-per-Week(Low-weight)",
        "Running 20min,Cable-fly 12 3,modified-Dips 12 3,Arnold-press 12 3,Upright-row 12 3,Barbell-squat 12 3 ,Deadlift 12 3,Hammer-curl 12 3,Tricep-rope-down 12 3,Lat-pull-down 12 3,Leg-raises 15 4,3-Days-per-Week(Low-weight)",
        "Cycling 20min,Dumbbell-pullover 12 3,modified-Pushups 12 3,Shoulder-press 12 3,Dumbell-Lateral-raises 12 3 ,Dumbbell-squat 12 3 ,Deadlift 12 3,Ezbar-curl 12 3,Tricep-push-down 12 3,Supported-pullups 12 3,Reverse-crunches 15 4,3-Days-per-Week(Low-weight)",
        "Running 20min,Cable-CrossOver 12 3,modified-Dips 12 3,Dumbbell-Shoulder-press 12 3,Reverse-fly 12 3 ,Goblin-squat 12 3 ,Deadlift 12 3,Dumbbell-curl 12 3,Tricep-extention 12 3,Lat-pull-down 12 3,Seated-crunches 15 4,3-Days-per-Week(Low-weight)",
        "Cycling 20min,Plate-press 12 3,modified-Pushups 12 3,Arnold-press 12 3,Upright-row 12 3,Smith-squat 12 3 ,Deadlift 12 3,Barbell-curl 12 3,Tricep-dips 12 3,Supported-pullups 12 3,Bicycle-crunches 15 4,3-Days-per-Week(Low-weight)",
        "Running 20min,Bench-press 12 3,modified-Dips 12 3,Dumbbell-Shoulder-press 12 3,Dumbell-Lateral-raises 12 3,Split-squat 12 3 ,Deadlift 12 4,Hammer-curl 12 3,Tricep-rope-down 12 3,Lat-pull-down 12 3,Abs-crunches 15 4,3-Days-per-Week(Low-weight)",
        "Cycling 20min,Low-cable-fly 12 3,modified-Pushups 12 3,Dumbbell-Shoulder-press 12 3,Reverse-fly 12 3,Smith-squat 12 3 ,Deadlift 12 3,Barbell-curl 12 3,Tricep-push-down 12 3,Supported-pullups 12 3,Leg-raises 15 4,3-Days-per-Week(Low-weight)",
        "Running 20min,Dumbbell-Incline-press 12 3,modified-Dips 12 3,Front-raises 12 3,upright-row 12 3,Goblin-squat 12 3,Deadlift 12 3,Cable-curl 12 3,Tricep-extention 12 3,Lat-pull-down 12 3,Reverse-crunches 15 4,3-Days-per-Week(Low-weight)",
        "Cycling 20min,Decline-press 12 3,modified-Pushups 12 3,Dumbbell-Shoulder-press 12 3,Dumbell-Lateral-raises 12 3,Dumbbell-squat 12 3 ,Deadlift 12 3,Barbell-curl 12 3,Tricep-rope-down 12 3,Supported-pullups 12 3,Abs-crunches 15 4,3-Days-per-Week(Low-weight)",
        "Running 20min,Cable-chest-press 12 3,modified-Dips 12 3,Arnold-press 12 3,Reverse-fly 12 3,Smith-squat 12 3,Deadlift 12 3,Hammer-curl 12 3,Tricep-push-down 12 3,Lat-pull-down 12 3,Leg-raises 15 4,3-Days-per-Week(Low-weight)",

      ]
    },
    healthy: {
      male: [
        "Cycling 30min,Bench-press 10 4,Pushups 12 4,Shoulder-press 10 4, Dumbbell-Lateral-raises 12 4,Smith-squat 10 4,Deadlift 12 4,EZbar-curl 10 3,Tricep-push-down 10 3,pullups 10 4,Abs-crunches 15 4,4-Days-per-Week(medium-weight)",
        "Running 30min,Incline-press 10 4,Dips 10 4,Front-raises 10 4, Dumbbell-Lateral-raises 12 4 ,Barbell-squat 10 4,Deadlift 10 4,Dumbbell-curl 10 3,Tricep-rope-down 10 3,Lat-pull-down 10 4,Reverse-crunches 15 4,4-Days-per-Week(medium-weight)",
        "Cycling 30min,Dumbbell-Bench-press 10 4,Pushups 10 4,Arnold-press 10 4,Dumbbell-Lateral-raises 12 4,Dumbbell-squat 10 4,Deadlift 10 4,Barbell-curl 10 3,Tricep-dips 10 3,pullups 10 4,Leg-raises 15 4,4-Days-per-Week(medium-weight)",
        "Running 30min,Dumbbell-Fly 12 4,Dips 10 4,Shoulder-press 10 4, Dumbbell-Lateral-raises 12 4,Barbell-squat 10 4,Deadlift 10 4,Hammer-curl 10 3,Tricep-extention 10 3,Lat-pull-down 10 4,Abs-crunches 15 4,4-Days-per-Week(medium-weight)",
        "Cycling 30min,Cable-Chest-press 10 4,Pushups 10 4,Front-raises 10 4,Dumbbell-Lateral-raises 12 4,Smith-squat 10 4,Deadlift 12 4,Barbell-curl 10 3,Tricep-push-down 10 3,pullups 10 4,Cable-crunches 15 4,4-Days-per-Week(medium-weight)",
        "Running 30min,Cable-fly 12 4,Dips 10 4,Arnold-press 10 4, Dumbbell-Lateral-raises 12 4,Barbell-squat 10 4,Deadlift 12 4,Hammer-curl 10 3,Tricep-rope-down 10 3,Lat-pull-down 10 4,Leg-raises 15 4,4-Days-per-Week(medium-weight)",
        "Cycling 30min,Dumbbell-pullover 10 4,Pushups 12 4,Shoulder-press 10 4,Dumbbell-Lateral-raises 12 4 ,Dumbbell-squat 10 4,Deadlift 12 4,Ezbar-curl 10 3,Tricep-push-down 10 3,pullups 10 4,Reverse-crunches 15 4,4-Days-per-Week(medium-weight)",
        "Running 30min,Cable-CrossOver 12 4,Dips 10 4,Dumbbell-Shoulder-press 10 4,Dumbbell-Lateral-raises 12 4,Goblin-squat 10 4,Deadlift 10 4,Dumbbell-curl 10 3,Tricep-extention 10 3,Lat-pull-down 10 4,Seated-crunches 15 4,4-Days-per-Week(medium-weight)",
        "Cycling 30min,Plate-press 10 4,Pushups 12 4,Arnold-press 10 4,Upright-row 12 4,Smith-squat 10 3 ,Deadlift 12 4,Barbell-curl 10 4,Tricep-dips 10 4,pullups 10 4,Bicycle-crunches 15 4,4-Days-per-Week(medium-weight)",
        "Running 30min,Bench-press 10 4,Dips 10 4,Dumbbell-Shoulder-press 10 4,Dumbbell-Lateral-raises 12 4,Split-squat 10 4,Deadlift 12 4,Hammer-curl 10 3,Tricep-rope-down 10 3,Lat-pull-down 10 4,Abs-crunches 15 4,4-Days-per-Week(medium-weight)",
        "Cycling 30min,Low-cable-fly 12 4,Pushups 10 4,Dumbbell-Shoulder-press 10 4,Dumbbell-Lateral-raises 12 4,Smith-squat 10 4,Deadlift 10 4,Barbell-curl 10 3,Tricep-push-down 10 3,pullups 10 4,Leg-raises 15 4,4-Days-per-Week(medium-weight)",
        "Running 30min,Dumbbell-Incline-press 10 4,Dips 10 4,Front-raises 10 4,upright-row 12 4,Barbell-squat 10 4,Deadlift 12 4,Cable-curl 10 4,Tricep-extention 10 3,Lat-pull-down 10 4,Reverse-crunches 15 4,4-Days-per-Week(medium-weight)",
        "Cycling 30min,Decline-press 10 4,Pushups 10 4,Dumbbell-Shoulder-press 10 4, Dumbbell-Lateral-raises 12 4,Dumbbell-squat 10 4,Deadlift 10 4,Barbell-curl 10 4,Tricep-rope-down 10 4,pullups 10 4,Abs-crunches 15 4,4-Days-per-Week(medium-weight)",
        "Running 30min,Cable-chest-press 10 4,Dips 10 4,Arnold-press 10 4,Dumbbell-Lateral-raises 12 4,Smith-squat 10 3,Deadlift 12 4,Hammer-curl 10 4,Tricep-push-down 10 4,Lat-pull-down 10 4,Leg-raises 15 4,4-Days-per-Week(medium-weight)",
      ],
      female: [
        "Warm-up(Cycling) 30min,Bench-press 10 3,Pushups 10 3,Shoulder-press 10 3, Dumbbell-Lateral-raises 12 3,Smith-squat 10 3 ,Deadlift 12 3,EZbar-curl 10 3,Tricep-push-down 10 3,pullups 10 3,Abs-crunches 15 4,4-Days-per-Week(medium-weight)",
        "Warm-up(Running) 30min,Incline-press 10 3,Dips 10 3,Front-raises 10 3, Dumbbell-Lateral-raises 12 3,Barbell-squat 10 3,Deadlift 12 3,Dumbbell-curl 10 3,Tricep-rope-down 10 3,Lat-pull-down 10 3,Reverse-crunches 15 4,4-Days-per-Week(medium-weight)",
        "Warm-up(Cycling) 30min,Dumbbell-Bench-press 10 3,Pushups 10 3,Arnold-press 10 3, Dumbbell-Lateral-raises 12 3,Dumbbell-squat 10 3 ,Deadlift 12 3,Barbell-curl 10 3,Tricep-dips 10 3,pullups 10 3,Leg-raises 15 4,4-Days-per-Week(medium-weight)",
        "Warm-up(Running) 30min,Dumbbell-Fly 10 3,Dips 10 3,Shoulder-press 10 3, Dumbbell-Lateral-raises 12 3,,Barbell-squat 10 3 ,Deadlift 12 3,Hammer-curl 10 3,Tricep-extention 10 3,Lat-pull-down 10 3,Abs-crunches 15 4,4-Days-per-Week(medium-weight)",
        "Warm-up(Cycling) 30min,Cable-Chest-press 10 3,Pushups 10 3,Front-raises 10 3,Dumbbell-Lateral-raises 12 3,Smith-squat 10 3 ,Deadlift 12 3,Barbell-curl 10 3,Tricep-push-down 10 3,pullups 10 3,Cable-crunches 15 4,4-Days-per-Week(medium-weight)",
        "Warm-up(Running) 30min,Cable-fly 10 3,Dips 10 3,Arnold-press 10 3,Dumbbell-Lateral-raises 12 3,Barbell-squat 10 3 ,Deadlift 12 3,Hammer-curl 10 3,Tricep-rope-down 10 3,Lat-pull-down 10 3,Leg-raises 15 4,4-Days-per-Week(medium-weight)",
        "Warm-up(Cycling) 30min,Dumbbell-pullover 10 3,Pushups 10 3,Shoulder-press 10 3,Dumbbell-Lateral-raises 12 3,Dumbbell-squat 10 3 ,Deadlift 12 3,Ezbar-curl 10 3,Tricep-push-down 10 3,pullups 10 3,Reverse-crunches 15 4,4-Days-per-Week(medium-weight)",
        "Warm-up(Running) 30min,Cable-CrossOver 10 3,Dips 10 3,Dumbbell-Shoulder-press 12 3,Dumbbell-Lateral-raises 12 3,Goblin-squat 10 3,Deadlift 10 3,Dumbbell-curl 10 3,Tricep-extention 10 3,Lat-pull-down 10 3,Seated-crunches 15 4,4-Days-per-Week(medium-weight)",
        "Warm-up(Cycling) 30min,Plate-press 10 3,Pushups 10 3,Arnold-press 10 3,Upright-row 10 3,Smith-squat 10 3,Deadlift 12 4,Barbell-curl 10 3,Tricep-dips 10 3,pullups 10 3,Bicycle-crunches 15 4,4-Days-per-Week(medium-weight)",
        "Warm-up(Running) 30min,Bench-press 10 3,Dips 10 3,Dumbbell-Shoulder-press 10 3,Dumbbell-Lateral-raises 12 3,Split-squat 10 3,Deadlift 12 3,Hammer-curl 10 3,Tricep-rope-down 10 3,Lat-pull-down 10 3,Abs-crunches 15 4,4-Days-per-Week(medium-weight)",
        "Warm-up(Cycling) 30min,Low-cable-fly 10 3,Pushups 10 3,Dumbbell-Shoulder-press 10 3,Dumbbell-Lateral-raises 12 3,Smith-squat 10 3,Deadlift 10 3,Barbell-curl 10 3,Tricep-push-down 10 3,pullups 10 3,Leg-raises 15 4,4-Days-per-Week(medium-weight)",
        "Warm-up(Running) 30min,Dumbbell-Incline-press 10 3,Dips 10 3,Front-raises 10 3,upright-row 12 3,Barbell-squat 10 3,Deadlift 12 3,Cable-curl 10 3,Tricep-extention 10 3,Lat-pull-down 10 3,Reverse-crunches 15 4,4-Days-per-Week(medium-weight)",
        "Warm-up(Cycling) 30min,Decline-press 10 3,Pushups 10 3,Dumbbell-Shoulder-press 10 3,Dumbbell-Lateral-raises 12 3,Dumbbell-squat 10 3,Deadlift 10 3,Barbell-curl 10 3,Tricep-rope-down 10 3,pullups 10 3,Abs-crunches 15 4,4-Days-per-Week(medium-weight)",
        "Warm-up(Running) 30min,Cable-chest-press 10 3,Dips 10 3,Arnold-press 10 3,Dumbbell-Lateral-raises 12 3,Smith-squat 10 3,Deadlift 12 3,Hammer-curl 10 3,Tricep-push-down 10 3,Lat-pull-down 10 3,Leg-raises 15 4,4-Days-per-Week(medium-weight)",
      ]
    },
    overweight: {
      male: [
        "Cycling 40min,Bench-press 10 4,Pushups 10 4,Clean-press 10 4,Upright-row 15 4,Smith-squat 10 4,Deadlift 12 4,EZbar-curl 10 3,Tricep-push-down 10 4,Man-maker 20 5,Box-jumps 20 5,5-Days-per-Week(medium-weight)",
        "Running 40min,Incline-press 10 4,Dips 10 4,Dumbbell-Shoulder-press 12 4, Dumbbell-Lateral-raises 12 4,Barbell-squat 10 4,Deadlift 12 4,Dumbbell-curl 10 4,Tricep-rope-down 10 4,Lat-pull-down 10 4,Reverse-crunches 15 5,5-Days-per-Week(medium-weight)",
        "Cycling 40min,Dumbbell-Bench-press 10 4,Pushups 10 4,Clean-press 10 4,Dumbbell-Lateral-raises 12 4,Dumbbell-squat 10 3 ,Deadlift 12 4,Barbell-curl 10 4,Tricep-dips 10 4,Man-maker 20 5,Box-jumps 20 5,5-Days-per-Week(medium-weight)",
        "Running 40min,Dumbbell-Fly 10 4,Dips 10 4,Shoulder-press 10 4,Dumbbell-Lateral-raises 12 4,Barbell-squat 10 3 ,Deadlift 12 4,Hammer-curl 10 4,Tricep-extention 10 4,Lat-pull-down 10 3,Abs-crunches 15 5,5-Days-per-Week(medium-weight)",
        "Cycling 40min,Cable-Chest-press 10 4,Pushups 10 4,Shoulder-raises 10 4,Dumbbell-Lateral-raises 12 3,Smith-squat 10 4,Deadlift 12 4,Barbell-curl 10 4,Tricep-push-down 10 4,Man-maker 20 5,Box-jumps 20 5,5-Days-per-Week(medium-weight)",
        "Running 40min,Cable-fly 10 4,Pushups 10 4,Clean-press 10 4,Dumbbell-Lateral-raises 12 3,Barbell-squat 10 4,Deadlift 12 4,Hammer-curl 10 4,Tricep-rope-down 10 4,Lat-pull-down 10 4,Leg-raises 15 4,5-Days-per-Week(medium-weight)",
        "Cycling 40min,Dumbbell-pullover 10 4,Dips 10 4,Shoulder-press 10 4,Dumbbell-Lateral-raises 12 4,Dumbbell-squat 10 4,Deadlift 12 4,Ezbar-curl 10 4,Tricep-push-down 10 4,Man-maker 20 5,Box-jumps 20 5,5-Days-per-Week(medium-weight)",
        "Running 40min,Cable-CrossOver 10 4,Pushups 10 4,Dumbbell-Shoulder-press 12 4,Dumbbell-Lateral-raises 12 4,Goblin-squat 10 4,Deadlift 10 4,Dumbbell-curl 10 4,Tricep-extention 10 4,Lat-pull-down 10 4,Seated-crunches 15 4,5-Days-per-Week(medium-weight)",
        "Cycling 40min,Plate-press 10 4,Dips 10 4,Clean-press 10 4,Upright-row 10 3,Smith-squat 10 4,Deadlift 12 4,Barbell-curl 10 3,Tricep-dips 10 4,Man-maker 20 5,Bicycle-crunches 15 4,5-Days-per-Week(medium-weight)",
        "Running 40min,Bench-press 10 4,Pushups 10 4,Dumbbell-Shoulder-press 10 4,Dumbbell-Lateral-raises 12 4,Split-squat 10 4,Deadlift 12 4,Hammer-curl 10 4,Tricep-rope-down 10 4,Lat-pull-down 10 3,Abs-crunches 15 4,5-Days-per-Week(medium-weight)",
        "Cycling 40min,Low-cable-fly 10 4,Dips 10 4,Dumbbell-Shoulder-press 10 4,Dumbbell-Lateral-raises 12 4,Smith-squat 10 4,Deadlift 10 4,Barbell-curl 10 4,Tricep-push-down 10 4,Man-maker 20 5,Box-jumps 20 5,5-Days-per-Week(medium-weight)",
        "Running 40min,Dumbbell-Incline-press 10 4,Pushups 10 4,Clean-press 10 4,upright-row 12 3,Barbell-squat 10 4,Deadlift 12 4,Cable-curl 10 4,Tricep-extention 10 4,Lat-pull-down 10 4,Reverse-crunches 15 4,5-Days-per-Week(medium-weight)",
        "Cycling 40min,Decline-press 10 4,Dips 10 4,Dumbbell-Shoulder-press 10 4,Dumbbell-Lateral-raises 12 4,Dumbbell-squat 10 3,Deadlift 10 4,Barbell-curl 10 4,Tricep-rope-down 10 4,Man-maker 20 5,Abs-crunches 15 4,5-Days-per-Week(medium-weight)",
        "Running 40min,Cable-chest-press 10 4,Pushups 10 4,Clean-press 10 4,Dumbbell-Lateral-raises 12 4,Smith-squat 10 3,Deadlift 12 4,Hammer-curl 10 4,Tricep-push-down 10 4,Lat-pull-down 10 4,Box-jumps 20 5,5-Days-per-Week(medium-weight)",
      ],
      female: [
        "Cycling 40min,Bench-press 10 3,Pushups 10 3,Clean-press 10 4,Dumbbell-Lateral-raises 12 3,Smith-squat 10 3,Deadlift 12 4,EZbar-curl 10 3,Tricep-push-down 10 3,Man-maker 20 5,Box-jumps 20 5,5-Days-per-Week(medium-weight)",
        "Running 40min,Incline-press 10 3,Dips 10 3,Shoulder-press 10 4,Dumbbell-Lateral-raises 12 3,Barbell-squat 10 3,Deadlift 12 3,Dumbbell-curl 10 3,Tricep-rope-down 10 4,Lat-pull-down 10 4,Reverse-crunches 15 5,5-Days-per-Week(medium-weight)",
        "Cycling 40min,Dumbbell-Bench-press 10 3,Pushups 10 3,Clean-press 10 4,Dumbbell-Lateral-raises 12 3,Dumbbell-squat 10 3,Deadlift 12 3,Barbell-curl 10 3,Tricep-dips 10 4,Man-maker 20 5,Box-jumps 20 5,5-Days-per-Week(medium-weight)",
        "Running 40min,Dumbbell-Fly 10 3,Dips 10 3,Shoulder-press 10 4,Dumbbell-Lateral-raises 12 3,,Barbell-squat 10 3,Deadlift 12 3,Hammer-curl 10 3,Tricep-extention 10 4,Lat-pull-down 10 3,Abs-crunches 15 5,5-Days-per-Week(medium-weight)",
        "Cycling 40min,Cable-Chest-press 10 3,Pushups 10 3,Shoulder-raises 10 4,Dumbbell-Lateral-raises 12 3,Smith-squat 10 3,Deadlift 12 3,Barbell-curl 10 3,Tricep-push-down 10 4,Man-maker 20 5,Box-jumps 20 5,5-Days-per-Week(medium-weight)",
        "Running 40min,Cable-fly 10 3,Dips 10 3,Clean-press 10 4,Dumbbell-Lateral-raises 12 3,Barbell-squat 10 3,Deadlift 12 3,Hammer-curl 10 3,Tricep-rope-down 10 4,Lat-pull-down 10 4,Leg-raises 15 4,5-Days-per-Week(medium-weight)",
        "Cycling 40min,Dumbbell-pullover 10 3,Pushups 10 3,Shoulder-press 10 4,Dumbbell-Lateral-raises 12 3,Dumbbell-squat 10 3,Deadlift 12 3,Ezbar-curl 10 3,Tricep-push-down 10 4,Man-maker 20 5,Box-jumps 20 5,5-Days-per-Week(medium-weight)",
        "Running 40min,Cable-CrossOver 10 3,Dips 10 3,Dumbbell-Shoulder-press 12 4,Dumbbell-Lateral-raises 12 3,Goblin-squat 10 3,Deadlift 10 3,Dumbbell-curl 10 4,Tricep-extention 10 4,Lat-pull-down 10 4,Seated-crunches 15 4,5-Days-per-Week(medium-weight)",
        "Cycling 40min,Plate-press 10 3,Pushups 10 3,Clean-press 10 5,Upright-row 10 4,Smith-squat 10 3,Deadlift 12 3,Barbell-curl 10 3,Tricep-dips 10 3,Man-maker 20 5,Bicycle-crunches 15 4,5-Days-per-Week(medium-weight)",
        "Running 40min,Bench-press 10 3,Dips 10 3,Dumbbell-Shoulder-press 10 4,Dumbbell-Lateral-raises 12 3,Split-squat 10 3,Deadlift 12 3,Hammer-curl 10 4,Tricep-rope-down 10 4,Lat-pull-down 10 3,Abs-crunches 15 4,5-Days-per-Week(medium-weight)",
        "Cycling 40min,Low-cable-fly 10 3,Pushups 10 3,Dumbbell-Shoulder-press 10 4,Dumbbell-Lateral-raises 12 3,Smith-squat 10 3,Deadlift 10 3,Barbell-curl 10 4,Tricep-push-down 10 4,Man-maker 20 5,Box-jumps 20 5,5-Days-per-Week(medium-weight)",
        "Running 40min,Dumbbell-Incline-press 10 3,Dips 10 3,Clean-press 10 4,upright-row 12 3,Barbell-squat 10 3,Deadlift 12 3,Cable-curl 10 3,Tricep-extention 10 4,Lat-pull-down 10 4,Reverse-crunches 15 4,5-Days-per-Week(medium-weight)",
        "Cycling 40min,Decline-press 10 3,Dips 10 3,Dumbbell-Shoulder-press 10 4,Dumbbell-Lateral-raises 12 3,Dumbbell-squat 10 3,Deadlift 10 3,Barbell-curl 10 4,Tricep-rope-down 10 4,Man-maker 20 5,Abs-crunches 15 4,5-Days-per-Week(medium-weight)",
        "Running 40min,Cable-chest-press 10 3,Pushups 10 3,Clean-press 10 4,Dumbbell-Lateral-raises 12 3,Smith-squat 10 3,Deadlift 12 3,Hammer-curl 10 3,Tricep-push-down 10 4,Lat-pull-down 10 4,Box-jumps 20 5,5-Days-per-Week(medium-weight)",
      ]
    },
    obese: {
      male: [
        "Cycling 60min,Bench-press 20 4,modified-Pushups 15 4,Clean-press 15 5,Bupree 20 5,Smith-squat 12 4,Deadlift 12 4,EZbar-curl 12 4,Tricep-push-down 12 4,Man-maker 20 5,Box-jumps 20 5,6-Days-per-Week(Low-weight)",
        "Running 60min,Incline-press 20 4,modified-Dips 15 4,lunges 20 4, Dumbbell-Lateral-raises 12 4,Barbell-squat 12 4,Deadlift 12 4,Dumbbell-curl 12 4,Tricep-rope-down 12 4,Lat-pull-down 12 4,Reverse-crunches 15 5,6-Days-per-Week(Low-weight)",
        "Cycling 60min,Dumbbell-Bench-press 20 4,modified-Pushups 15 4,Clean-press 15 5, Dumbbell-Lateral-raises 12 4,Dumbbell-squat 12 4 ,Deadlift 12 4,Barbell-curl 12 4,Tricep-dips 12 4,Man-maker 20 5,Box-jumps 20 5,6-Days-per-Week(Low-weight)",
        "Running 60min,Dumbbell-Fly 20 4,modified-Dips 15 4,Shoulder-press 15 5, Dumbbell-Lateral-raises 12 4,,Barbell-squat 12 4 ,Deadlift 12 4,Hammer-curl 12 4,Tricep-extention 12 4,Lat-pull-down 12 3,Abs-crunches 15 5,6-Days-per-Week(Low-weight)",
        "Cycling 60min,Cable-Chest-press 20 4,modified-Pushups 15 4,Shoulder-raises 12 5,Dumbbell-Lateral-raises 15 4,Smith-squat 12 4,Deadlift 12 4,Barbell-curl 12 4,Tricep-push-down 12 4,Man-maker 20 5,Box-jumps 20 5,6-Days-per-Week(Low-weight)",
        "Running 60min,Cable-fly 20 4,modified-Dips 15 4,Clean-press 12 5,Dumbbell-Lateral-raises 15 4,Barbell-squat 12 4 ,Deadlift 12 4,Hammer-curl 12 4,Tricep-rope-down 12 4,Lat-pull-down 12 4,Leg-raises 15 4,6-Days-per-Week(Low-weight)",
        "Cycling 60min,Dumbbell-pullover 20 4,modified-Pushups 15 4,Shoulder-press 12 5,Dumbbell-Lateral-raises 15 4,Dumbbell-squat 12 4 ,Deadlift 12 4,Ezbar-curl 12 4,Tricep-push-down 12 4,Man-maker 20 5,Box-jumps 20 5,6-Days-per-Week(Low-weight)",
        "Running 60min,Cable-CrossOver 20 4,modified-Dips 15 4,Dumbbell-Shoulder-press 12 5,Dumbbell-Lateral-raises 15 4,Goblin-squat 12 4,Deadlift 12 4,Dumbbell-curl 12 4,Tricep-extention 12 4,Lat-pull-down 12 4,Seated-crunches 15 4,6-Days-per-Week(Low-weight)",
        "Cycling 60min,Plate-press 20 4,modified-Pushups 15 4,Clean-press 12 5,Upright-row 12 5,Smith-squat 12 4,Deadlift 12 4,Barbell-curl 12 4,Tricep-dips 12 4,Man-maker 20 5,Bicycle-crunches 15 4,6-Days-per-Week(Low-weight)",
        "Running 60min,Bench-press 20 4,modified-Dips 15 4,Dumbbell-Shoulder-press 12 5,Dumbbell-Lateral-raises 12 4,Split-squat 12 4,Deadlift 12 4,Hammer-curl 12 4,Tricep-rope-down 12 4,Lat-pull-down 12 3,Abs-crunches 15 4,6-Days-per-Week(Low-weight)",
        "Cycling 60min,Low-cable-fly 20 4,modified-Pushups 15 4,Dumbbell-Shoulder-press 12 5,Dumbbell-Lateral-raises 12 4,Smith-squat 12 4,Deadlift 12 4,Barbell-curl 12 4,Tricep-push-down 12 4,Man-maker 20 5,Box-jumps 20 5,6-Days-per-Week(Low-weight)",
        "Running 60min,Dumbbell-Incline-press 20 4,modified-Dips 15 4,Clean-press 12 5,upright-row 12 3,Barbell-squat 12 4,Deadlift 12 4,Cable-curl 12 4,Tricep-extention 12 4,Lat-pull-down 12 4,Reverse-crunches 15 4,6-Days-per-Week(Low-weight)",
        "Cycling 60min,Decline-press 20 4,modified-Pushups 15 4,Dumbbell-Shoulder-press 12 5,Dumbbell-Lateral-raises 12 4,Dumbbell-squat 12 4,Deadlift 12 4,Barbell-curl 12 4,Tricep-rope-down 12 4,Man-maker 20 5,Abs-crunches 15 4,6-Days-per-Week(Low-weight)",
        "Running 60min,Cable-chest-press 20 4,modified-Dips 15 4,Clean-press 12 5,Dumbbell-Lateral-raises 12 4,Smith-squat 12 3,Deadlift 12 4,Hammer-curl 12 4,Tricep-push-down 12 4,Lat-pull-down 12 4,Box-jumps 20 5,6-Days-per-Week(Low-weight)",
      ],
      female: [
        "Cycling 60min,Bench-press 20 3,modified-Pushups 15 3,Clean-press 15 4,Bupree 20 4,Smith-squat 12 4,Deadlift 12 4,EZbar-curl 12 3,Tricep-push-down 12 3,Man-maker 20 4,Box-jumps 20 4,6-Days-per-Week(Low-weight)",
        "Running 60min,Incline-press 20 3,modified-Dips 15 3,lunges 20 3, Dumbbell-Lateral-raises 12 3,Barbell-squat 12 3,Deadlift 12 3,Dumbbell-curl 12 3,Tricep-rope-down 12 4,Lat-pull-down 12 3,Reverse-crunches 15 4,6-Days-per-Week(Low-weight)",
        "Cycling 60min,Dumbbell-Bench-press 20 3,modified-Pushups 15 3,Clean-press 15 4, Dumbbell-Lateral-raises 12 3,Dumbbell-squat 12 3 ,Deadlift 12 3,Barbell-curl 12 3,Tricep-dips 12 4,Man-maker 20 4,Box-jumps 20 4,6-Days-per-Week(Low-weight)",
        "Running 60min,Dumbbell-Fly 20 3,modified-Pushups 15 3,Shoulder-press 15 4, Dumbbell-Lateral-raises 12 3,Barbell-squat 12 3 ,Deadlift 12 3,Hammer-curl 12 3,Tricep-extention 12 4,Lat-pull-down 12 3,Abs-crunches 15 4,6-Days-per-Week(Low-weight)",
        "Cycling 60min,Cable-Chest-press 20 3,modified-Dips 15 3,Shoulder-raises 12 4,Dumbbell-Lateral-raises 15 3,Smith-squat 12 4,Deadlift 12 3,Barbell-curl 12 3,Tricep-push-down 12 4,Man-maker 20 4,Box-jumps 20 4,6-Days-per-Week(Low-weight)",
        "Running 60min,Cable-fly 20 3,modified-Pushups 15 3,Clean-press 12 4,Dumbbell-Lateral-raises 15 3,Barbell-squat 12 4 ,Deadlift 12 3,Hammer-curl 12 3,Tricep-rope-down 12 4,Lat-pull-down 12 4,Leg-raises 15 3,6-Days-per-Week(Low-weight)",
        "Cycling 60min,Dumbbell-pullover 20 3,modified-Dips 15 3,Shoulder-press 12 4,Dumbbell-Lateral-raises 15 3,Dumbbell-squat 12 3,Deadlift 12 3,Ezbar-curl 12 3,Tricep-push-down 12 4,Man-maker 20 4,Box-jumps 20 4,6-Days-per-Week(Low-weight)",
        "Running 60min,Cable-CrossOver 20 3,modified-Pushups 15 3,Dumbbell-Shoulder-press 12 4,Dumbbell-Lateral-raises 15 3,Goblin-squat 12 3,Deadlift 12 3,Dumbbell-curl 12 4,Tricep-extention 12 4,Lat-pull-down 12 3,Seated-crunches 15 3,6-Days-per-Week(Low-weight)",
        "Cycling 60min,Plate-press 20 3,modified-Dips 15 3,Clean-press 12 4,Upright-row 12 3,Smith-squat 12 3,Deadlift 12 4,Barbell-curl 12 3,Tricep-dips 12 3,Man-maker 20 4,Bicycle-crunches 15 3,6-Days-per-Week(Low-weight)",
        "Running 60min,Bench-press 20 3,modified-Pushups 15 3,Dumbbell-Shoulder-press 12 4,Dumbbell-Lateral-raises 12 3,Split-squat 12 3,Deadlift 12 3,Hammer-curl 12 3,Tricep-rope-down 12 3,Lat-pull-down 12 3,Abs-crunches 15 3,6-Days-per-Week(Low-weight)",
        "Cycling 60min,Low-cable-fly 20 3,modified-Dips 15 3,Dumbbell-Shoulder-press 12 4,Dumbbell-Lateral-raises 12 3,Smith-squat 12 3,Deadlift 12 3,Barbell-curl 12 3,Tricep-push-down 12 3,Man-maker 20 5,Box-jumps 20 4,6-Days-per-Week(Low-weight)",
        "Running 60min,Dumbbell-Incline-press 20 3,modified-Pushups 15 3,Clean-press 12 4,upright-row 12 4,Barbell-squat 12 3,Deadlift 12 3,Cable-curl 12 3,Tricep-extention 12 3,Lat-pull-down 12 3,Reverse-crunches 15 3,6-Days-per-Week(Low-weight)",
        "Cycling 60min,Decline-press 20 3,modified-Dips 15 3,Dumbbell-Shoulder-press 12 4,Dumbbell-Lateral-raises 12 3,Dumbbell-squat 12 3,Deadlift 12 3,Barbell-curl 12 3,Tricep-rope-down 12 3,Man-maker 20 4,Abs-crunches 15 3,6-Days-per-Week(Low-weight)",
        "Running 60min,Cable-chest-press 20 3,modified-Pushups 15 3,Clean-press 12 4,Dumbbell-Lateral-raises 12 3,Smith-squat 12 3,Deadlift 12 3,Hammer-curl 12 3,Tricep-push-down 12 3,Lat-pull-down 12 3,Box-jumps 20 4,6-Days-per-Week(Low-weight)",
      ]
    }
  };

  // Select a random workout plan
  let workoutPlan;
  if (bmi < 18.5) {
    workoutPlan = workoutPlans.underweight[gender][Math.floor(Math.random() * 14)];
  } else if (bmi >= 18.5 && bmi < 24) {
    workoutPlan = workoutPlans.healthy[gender][Math.floor(Math.random() * 14)];
  } else if (bmi >= 24 && bmi < 30) {
    workoutPlan = workoutPlans.overweight[gender][Math.floor(Math.random() * 14)];
  } else {
    workoutPlan = workoutPlans.obese[gender][Math.floor(Math.random() * 14)];
  }

  // Split the workout plan into individual exercises
  const exercises = workoutPlan.split(',');

  // Display workout plan in the table
  for (let i = 0; i < exercises.length; i++) {
    let imageSrc, details;
    const [exercise, reps, sets] = exercises[i].trim().split(' ');
    document.getElementById(`exercise-${i + 1}`).textContent = exercise;
    document.getElementById(`reps-${i + 1}`).textContent = reps;
    document.getElementById(`sets-${i + 1}`).textContent = sets;
    document.getElementById(`exercise-${i + 1}`).addEventListener('click', function () {
      if (exercise.toLowerCase() === 'bench-press') {
        imageSrc='static/img/SPOTO_BP.gif';
        document.getElementById('img-2').src =imageSrc;
document.getElementById('para-2-1').textContent = '1) Exercise Details: Lie flat on a bench with your feet firmly planted on the ground. Grip the barbell with hands slightly wider than shoulder-width apart. Unrack the bar, lower it slowly to your chest, then press it back up to the starting position.';
document.getElementById('para-2-2').textContent = '2) Muscle Activation: The bench press primarily activates the pectoralis major(chest) (60-70%), with significant contributions from the triceps brachii (20-30%) and anterior deltoids(shoulder) (10-15%).' ;
document.getElementById('para-2-3').textContent = '3) Common Mistakes:  The Back Excessively';

      }else if (exercise.toLowerCase()==='cycling'){
        imageSrc='static/img/ASSAULT_BIKE.gif';
        document.getElementById('img-1').src =imageSrc;
        document.getElementById('para-1-1').textContent='1)Exercise Details: Cycling is a cardiovascular exercise performed on a bicycle, either outdoors or on a stationary bike indoors. To start, adjust your bike seat and handlebars for comfort and safety.';
        document.getElementById('para-1-2').textContent='2)Muscle Activation: Cycling primarily activates the quadriceps (40-50%), hamstrings (15-20%), glutes (15-20%), and calves (10-15%).';
        document.getElementById('para-1-3').textContent='3)Common Mistakes: Overusing High Gears';

      }else if (exercise.toLowerCase()==='running') {
        imageSrc = 'static/img/RUNNING (1).gif';
        document.getElementById('img-1').src =imageSrc;
        document.getElementById('para-1-1').textContent = '1)Exercise Details: Running is a cardiovascular exercise performed by moving at a pace faster than walking. It can be done outdoors on various terrains or indoors on a treadmill.';
        document.getElementById('para-1-2').textContent = '2)Muscle Activation: Running primarily activates the quadriceps (30-40%), hamstrings (20-30%), glutes (20-30%), and calves (10-20%).';
        document.getElementById('para-1-3').textContent = '3)Common Mistakes: Overstriding';
      }else if (exercise.toLowerCase()==='incline-press') {
        imageSrc = 'static/img/BB_INC_PRESS.gif';
        document.getElementById('img-2').src = imageSrc;
        document.getElementById('para-2-1').textContent = '1)Exercise Details: The incline bench press is a variation of the bench press performed on an incline bench, typically set at a 30 to 45-degree angle. Lie back on the incline bench with your feet firmly on the ground.';
        document.getElementById('para-2-2').textContent = '2)Muscle Activation: The incline bench press primarily targets the upper portion of the pectoralis major(chest) (45-60%), with significant contributions from the anterior deltoids(shoulder) (20-30%) and triceps brachii (15-20%).';
        document.getElementById('para-2-3').textContent = '3)Common Mistakes: Incorrect Bench Angle';
      }else if (exercise.toLowerCase()==='dumbbell-bench-press') {
        imageSrc = 'static/img/DB_BP.gif';
        document.getElementById('img-2').src = imageSrc;
        document.getElementById('para-2-1').textContent = '1)Exercise Details: Lie flat on a bench with a dumbbell in each hand. Hold the dumbbells above your chest with palms facing forward. Lower the dumbbells slowly to the sides of your chest, then press them back up to the starting position.';
        document.getElementById('para-2-2').textContent = '2)Muscle Activation: The dumbbell bench press primarily activates the pectoralis major(chest) (60-70%), with significant contributions from the triceps brachii (20-30%) and anterior deltoids(shoulder) (10-15%).';
        document.getElementById('para-2-3').textContent = '3)Common Mistakes: Excessive Arching';
      }else if (exercise.toLowerCase()==='dumbbell-fly'){
        imageSrc = 'static/img/DB-FLY.gif';
        document.getElementById('img-2').src = imageSrc;
        document.getElementById('para-2-1').textContent = '1)Exercise Details:The dumbbell fly is an isolation exercise that targets the chest muscles. It involves lying on a bench and extending arms out to the sides with dumbbells, then bringing them together above the chest in a wide arc.';
        document.getElementById('para-2-2').textContent = '2)Muscle Activation:Primarily targets the pectorals(chest) (80%), deltoids(shoulder) (15%), and triceps (5%).';
        document.getElementById('para-2-3').textContent = '3)Common Mistakes:A common mistake is using too much weight, which can lead to improper form and increase the risk of shoulder injury.';

      }else if (exercise.toLowerCase()==='cable-chest-press'){
        imageSrc = 'static/img/cable-standing-chest-press.gif';
        document.getElementById('img-2').src = imageSrc;
        document.getElementById('para-2-1').textContent = '1)Exercise Details:The chest press is a compound exercise that focuses on building strength in the upper body. It involves pressing a weight away from the chest while lying on a bench, either with a barbell or dumbbells.';
        document.getElementById('para-2-2').textContent = '2)Muscle Activation:Primarily targets the pectoral muscles(chest) (70%), deltoids(shoulder) (20%), and triceps (10%).';
        document.getElementById('para-2-3').textContent = '3)Common Mistakes:Flaring elbows too wide.';

      }else if (exercise.toLowerCase()==='cable-fly'){
        imageSrc = 'static/img/STD_CABLE_FLY.gif';
        document.getElementById('img-2').src = imageSrc;
        document.getElementById('para-2-1').textContent = '1)Exercise Details:The cable machine fly is an isolation exercise targeting the chest muscles. It involves standing between two cable stacks, pulling the handles together in a wide arc, simulating a hugging motion.';
        document.getElementById('para-2-2').textContent = '2)Muscle Activation:Primarily targets the pectorals(chest) (75%), deltoids(shoulders) (20%), and biceps (5%).';
        document.getElementById('para-2-3').textContent = '3)Common Mistakes:Using momentum to pull the cables.';

      }else if (exercise.toLowerCase()==='dumbbell-pullover'){
        imageSrc = 'static/img/DB_PULLOVER.gif';
        document.getElementById('img-2').src = imageSrc;
        document.getElementById('para-2-1').textContent = '1)Exercise Details:The pullover is an exercise that targets the chest and back muscles. It involves lying on a bench and extending a weight overhead, then pulling it back over the chest in an arc-like motion.';
        document.getElementById('para-2-2').textContent = '2)Muscle Activation:Primarily targets the latissimus dorsi(back) (60%), pectorals(chest) (30%), and triceps (10%).';
        document.getElementById('para-2-3').textContent = '3)Common Mistakes:Allowing the lower back arch.';

      }else if (exercise.toLowerCase()==='cable-crossover'){
        imageSrc = 'static/img/CROSS_OVER.gif';
        document.getElementById('img-2').src = imageSrc;
        document.getElementById('para-2-1').textContent = '1)Exercise Details:The cable crossover is an isolation exercise for the chest. It involves standing between two cable machines and pulling the handles together in front of you, crossing them at chest level.';
        document.getElementById('para-2-2').textContent = '2)Muscle Activation:Primarily targets the pectorals(chest) (80%) and deltoids(shoulders) (20%)';
        document.getElementById('para-2-3').textContent = '3)Common Mistakes:Not maintaining a slight bend in the elbows.';

      }else if (exercise.toLowerCase()==='plate-press'){
        imageSrc = 'static/img/plate-press.gif';
        document.getElementById('img-2').src = imageSrc;
        document.getElementById('para-2-1').textContent = '1)Exercise Details:The plate press is an exercise that targets the chest and triceps. It involves lying on a bench and pressing a weight plate from the chest straight up, focusing on pushing with the arms.';
        document.getElementById('para-2-2').textContent = '2)Muscle Activation:Primarily targets the pectorals(chest) (70%), triceps (20%), and deltoids(shoulders) (10%).';
        document.getElementById('para-2-3').textContent = '3)Common Mistakes:Allowing the elbows to flare out.';

      }else if (exercise.toLowerCase()==='low-cable-fly'){
        imageSrc = 'static/img/LP_CABLE_FLY.gif';
        document.getElementById('img-2').src = imageSrc;
        document.getElementById('para-2-1').textContent = '1)Exercise Details:The low-cable fly is an isolation exercise for the chest. It involves standing between two low cable machines, pulling the cables up and together in a wide arc to engage the upper chest.';
        document.getElementById('para-2-2').textContent = '2)Muscle Activation:Primarily targets the upper pectorals(chest) (75%) and deltoids(shoulders) (25%).';
        document.getElementById('para-2-3').textContent = '3)Common Mistakes:Pulling the cables too high, losing chest activation.';

      }else if (exercise.toLowerCase()==='dumbbell-incline-press'){
        imageSrc = 'static/img/LP_CABLE_FLY.gif';
        document.getElementById('img-2').src = imageSrc;
        document.getElementById('para-2-1').textContent = '1)Exercise Details:The dumbbell incline press targets the upper chest. It involves lying on an incline bench and pressing dumbbells upward from shoulder level to above the chest.';
        document.getElementById('para-2-2').textContent = '2)Muscle Activation:Primarily targets the upper pectorals(chest) (70%), deltoids(shoulders) (20%), and triceps (10%).';
        document.getElementById('para-2-3').textContent = '3)Common Mistakes:Overarching the lower back.';

      }else if (exercise.toLowerCase()==='decline-press'){
        imageSrc = 'static/img/BB_DEC_BP.gif';
        document.getElementById('img-2').src = imageSrc;
        document.getElementById('para-2-1').textContent = '1)Exercise Details:The decline press focuses on the lower chest. It involves lying on a decline bench and pressing a barbell or dumbbells upward from below the chest.';
        document.getElementById('para-2-2').textContent = '2)Muscle Activation:Primarily targets the lower pectorals(chest) (75%), deltoids(shoulders) (15%), and triceps (10%).';
        document.getElementById('para-2-3').textContent = '3)Common Mistakes:Letting the elbows flare out too wide.';

      }else if (exercise.toLowerCase()==='pushups'){
        imageSrc = 'static/img/PUSH_UP.gif';
        document.getElementById('img-3').src = imageSrc;
        document.getElementById('para-3-1').textContent = '1)Exercise Details:Push-ups are a bodyweight exercise targeting the chest, shoulders, and triceps. They involve lowering and raising the body using the arms while keeping the body in a plank position.';
        document.getElementById('para-3-2').textContent = '2)Muscle Activation:Primarily targets the pectorals(chest) (60%), deltoids(shoulders) (20%), and triceps (20%).';
        document.getElementById('para-3-3').textContent = '3)Common Mistakes:Allowing the hips to sag.';

      }else if (exercise.toLowerCase()==='dips'){
        imageSrc = 'static/img/DIPS.gif';
        document.getElementById('img-3').src = imageSrc;
        document.getElementById('para-3-1').textContent = '1)Exercise Details:Dips are a bodyweight exercise that targets the chest and triceps. They involve lowering and raising the body using parallel bars or dip handles, keeping the arms straight.';
        document.getElementById('para-3-2').textContent = '2)Muscle Activation:Primarily targets the lower pectorals(chest) (75%), deltoids(shoulders) (15%), and triceps (10%).';
        document.getElementById('para-3-3').textContent = '3)Common Mistakes:Letting the elbows flare out too wide.';

      }else if (exercise.toLowerCase()==='modified-pushups'){
        imageSrc = 'static/img/Knee-Push-Up.gif';
        document.getElementById('img-3').src = imageSrc;
        document.getElementById('para-3-1').textContent = '1)Exercise Details:Knee push-ups are a modified version of push-ups, performed with the knees on the ground to reduce resistance. They target the chest, shoulders, and triceps while maintaining a plank-like position from the knees up.';
        document.getElementById('para-3-2').textContent = '2)Muscle Activation:Primarily targets the pectorals(chest) (60%), deltoids(shoulders) (25%), and triceps (15%).';
        document.getElementById('para-3-3').textContent = '3)Common Mistakes:Allowing the hips to drop too low.';

      }else if (exercise.toLowerCase()==='modified-dips'){
        imageSrc = 'static/img/ASS_DIP_MC.gif';
        document.getElementById('img-3').src = imageSrc;
        document.getElementById('para-3-1').textContent = '1)Exercise Details:Assisted dips use a machine or band to reduce body weight, making it easier to perform dips. This exercise targets the chest and triceps while providing support to complete the movement.';
        document.getElementById('para-3-2').textContent = '2)Muscle Activation:Primarily targets the triceps (50%), pectorals(chest) (40%), and deltoids(shoulders) (10%).';
        document.getElementById('para-3-3').textContent = '3)Common Mistakes:Not adjusting the assistance level properly.';

      }else if (exercise.toLowerCase()==='shoulder-press'){
        imageSrc = 'static/img/SEAT_BB_SHD_PRESS.gif';
        document.getElementById('img-4').src = imageSrc;
        document.getElementById('para-4-1').textContent = '1)Exercise Details:The barbell seated overhead press is a compound exercise targeting the shoulders. It involves pressing a barbell overhead from a seated position, keeping the back straight and core engaged.';
        document.getElementById('para-4-2').textContent = '2)Muscle Activation:Primarily targets the deltoids(shoulders) (70%), triceps (20%), and upper chest (10%).';
        document.getElementById('para-4-3').textContent = '3)Common Mistakes:Arching the lower back excessively.';

      }else if (exercise.toLowerCase()==='front-raises'){
        imageSrc = 'static/img/DB_F_RAISE.gif';
        document.getElementById('img-4').src = imageSrc;
        document.getElementById('para-4-1').textContent = '1)Exercise Details:Dumbbell front raises isolate the front deltoids. They involve lifting dumbbells straight up in front of the body to shoulder height while keeping the arms extended.';
        document.getElementById('para-4-2').textContent = '2)Muscle Activation:Primarily targets the front deltoids(shoulders) (80%) and secondary muscles include the upper pectorals(chest) (20%).';
        document.getElementById('para-4-3').textContent = '3)Common Mistakes:Not adjusting the assistance level properly.';

      }else if (exercise.toLowerCase()==='arnold-press'){
        imageSrc = 'static/img/ARNOLD_DB_PRESS.gif';
        document.getElementById('img-4').src = imageSrc;
        document.getElementById('para-4-1').textContent = '1)Exercise Details:The Arnold press is a variation of the shoulder press that targets the deltoids. It involves rotating the dumbbells from a palms-in position to palms-out as you press them overhead.';
        document.getElementById('para-4-2').textContent = '2)Muscle Activation:Primarily targets the deltoids(shoulders) (70%), with secondary emphasis on the triceps (20%) and upper chest (10%).';
        document.getElementById('para-4-3').textContent = '3)Common Mistakes:Not fully rotating the dumbbells.';

      }else if (exercise.toLowerCase()==='dumbbell-shoulder-press'){
        imageSrc = 'static/img/SEAT_DB_SHD_PRESS.gif';
        document.getElementById('img-4').src = imageSrc;
        document.getElementById('para-4-1').textContent = '1)Exercise Details:The seated dumbbell shoulder press targets the shoulders while seated. It involves pressing dumbbells upward from shoulder level to full extension, maintaining a straight back.';
        document.getElementById('para-4-2').textContent = '2)Muscle Activation:Primarily targets the deltoids(shoulders) (70%), with secondary activation in the triceps (20%) and upper chest (10%).';
        document.getElementById('para-4-3').textContent = '3)Common Mistakes:Leaning back too much while pressing.';

      }else if (exercise.toLowerCase()==='neck-press'){
        imageSrc = 'static/img/BB_SNATCH.gif';
        document.getElementById('img-4').src = imageSrc;
        document.getElementById('para-4-1').textContent = '1)Exercise Details:The neck press is a less common shoulder exercise where a barbell is pressed from behind the neck to above the head while seated. It primarily targets the shoulders and triceps.';
        document.getElementById('para-4-2').textContent = '2)Muscle Activation:Primarily targets the deltoids (65%), with secondary emphasis on the triceps (25%) and upper chest (10%).';
        document.getElementById('para-4-3').textContent = '3)Common Mistakes:Not keeping the barbell close to the neck, risking shoulder strain.';

      }else if (exercise.toLowerCase()==='clean-press'){
        imageSrc = 'static/img/BB_SNATCH.gif';
        document.getElementById('img-4').src = imageSrc;
        document.getElementById('para-4-1').textContent = '1)Exercise Details:The clean press is a dynamic full-body exercise involving lifting a barbell from the ground to shoulder height (clean) and then pressing it overhead (press). It engages multiple muscle groups.';
        document.getElementById('para-4-2').textContent = '2)Muscle Activation:Primarily targets the shoulders (50%), legs (25%), and upper back (25%).';
        document.getElementById('para-4-3').textContent = '3)Common Mistakes:Failing to properly catch the barbell on the shoulders.';

      }else if (exercise.toLowerCase()==='lunges'){
        imageSrc = 'static/img/dumbbell-lunges.gif';
        document.getElementById('img-4').src = imageSrc;
        document.getElementById('para-4-1').textContent = '1)Exercise Details:Lunges are a lower-body exercise that targets the quadriceps, hamstrings, and glutes. They involve stepping forward into a lunge position and lowering the body until both knees are bent at 90 degrees, then returning to the starting position.';
        document.getElementById('para-4-2').textContent = '2)Muscle Activation:Primarily targets the quadriceps (60%), glutes (25%), and hamstrings (15%).';
        document.getElementById('para-4-3').textContent = '3)Common Mistakes:Knee extending past the toes.';

      }else if (exercise.toLowerCase()==='dumbbell-lateral-raises'){
        imageSrc = 'static/img/DB_LAT_RAISE.gif';
        document.getElementById('img-5').src = imageSrc;
        document.getElementById('para-5-1').textContent = '1)Exercise Details:Dumbbell lateral raises isolate the shoulders. They involve lifting dumbbells out to the sides until shoulder height while keeping the arms slightly bent.';
        document.getElementById('para-5-2').textContent = '2)Muscle Activation:Primarily targets the lateral deltoids (80%), with secondary activation in the trapezius (20%).';
        document.getElementById('para-5-3').textContent = '3)Common Mistakes:Using too much weight, leading to swinging.';

      }else if (exercise.toLowerCase()==='upright-row'){
        imageSrc = 'static/img/BB_UPRIGHT_ROW.gif';
        document.getElementById('img-5').src = imageSrc;
        document.getElementById('para-5-1').textContent = '1)Exercise Details:The upright row targets the shoulders and upper back. It involves pulling a barbell or dumbbells up to the chin while keeping the elbows higher than the wrists.';
        document.getElementById('para-5-2').textContent = '2)Muscle Activation:Primarily targets the deltoids (60%), with secondary emphasis on the trapezius (30%) and biceps (10%).';
        document.getElementById('para-5-3').textContent = '3)Common Mistakes:Pulling the weights too high, which can strain the shoulders.';

      }else if (exercise.toLowerCase()==='reverse-fly'){
        imageSrc = 'static/img/REV_PEC_DECK_MC.gif';
        document.getElementById('img-5').src = imageSrc;
        document.getElementById('para-5-1').textContent = '1)Exercise Details:The reverse fly is an isolation exercise for the rear deltoids and upper back. It involves bending at the hips, with arms extended to the sides, lifting dumbbells to shoulder height.';
        document.getElementById('para-5-2').textContent = '2)Muscle Activation:Primarily targets the rear deltoids (70%), with secondary emphasis on the rhomboids (20%) and trapezius (10%).';
        document.getElementById('para-5-3').textContent = '3)Common Mistakes:Allowing the shoulders to shrug during the lift.';

      }else if (exercise.toLowerCase()==='bupree'){
        imageSrc = 'static/img/BURPEE.gif';
        document.getElementById('img-5').src = imageSrc;
        document.getElementById('para-5-1').textContent = '1)Exercise Details:The reverse fly is an isolation exercise for the rear deltoids and upper back. It involves bending at the hips, with arms extended to the sides, lifting dumbbells to shoulder height.';
        document.getElementById('para-5-2').textContent = '2)Muscle Activation:Primarily targets the rear deltoids (70%), with secondary emphasis on the rhomboids (20%) and trapezius (10%).';
        document.getElementById('para-5-3').textContent = '3)Common Mistakes:Allowing the shoulders to shrug during the lift.';

      }else if (exercise.toLowerCase()==='bupree'){
        imageSrc = 'static/img/BURPEE.gif';
        document.getElementById('img-6').src = imageSrc;
        document.getElementById('para-6-1').textContent = '1)Exercise Details:The reverse fly is an isolation exercise for the rear deltoids and upper back. It involves bending at the hips, with arms extended to the sides, lifting dumbbells to shoulder height.';
        document.getElementById('para-6-2').textContent = '2)Muscle Activation:Primarily targets the rear deltoids (70%), with secondary emphasis on the rhomboids (20%) and trapezius (10%).';
        document.getElementById('para-6-3').textContent = '3)Common Mistakes:Allowing the shoulders to shrug during the lift.';

      }else if (exercise.toLowerCase()==='smith-squat'){
        imageSrc = 'static/img/SM_SQT.gif';
        document.getElementById('img-6').src = imageSrc;
        document.getElementById('para-6-1').textContent = '1)Exercise Details:The Smith squat is a variation of the squat performed on a Smith machine. It involves squatting with a barbell fixed on a vertical track, focusing on the quadriceps, hamstrings, and glutes.';
        document.getElementById('para-6-2').textContent = '2)Muscle Activation:Primarily targets the quadriceps (60%), with secondary activation in the glutes (25%) and hamstrings (15%).';
        document.getElementById('para-6-3').textContent = '3)Common Mistakes:Allowing the knees to cave inward during the squat.';

      }else if (exercise.toLowerCase()==='barbell-squat'){
        imageSrc = 'static/img/BB_BSQT.gif';
        document.getElementById('img-6').src = imageSrc;
        document.getElementById('para-6-1').textContent = '1)Exercise Details:The barbell squat is a fundamental lower-body exercise. It involves placing a barbell across the upper back and bending the knees to lower the body into a squat position, then returning to a standing position.';
        document.getElementById('para-6-2').textContent = '2)Muscle Activation:Primarily targets the quadriceps (60%), with secondary activation in the glutes (25%) and hamstrings (15%).';
        document.getElementById('para-6-3').textContent = '3)Common Mistakes:Letting the knees push past the toes or collapsing inward.';

      }else if (exercise.toLowerCase()==='dumbbell-squat'){
        imageSrc = 'static/img/DB_SM_DL.gif';
        document.getElementById('img-6').src = imageSrc;
        document.getElementById('para-6-1').textContent = '1)Exercise Details:The dumbbell squat is a lower-body exercise where dumbbells are held at the sides or shoulders. It involves squatting down by bending the knees and hips, then returning to a standing position.';
        document.getElementById('para-6-2').textContent = '2)Muscle Activation:Primarily targets the quadriceps (60%), with secondary activation in the glutes (25%) and hamstrings (15%).';
        document.getElementById('para-6-3').textContent = '3)Common Mistakes:Allowing the knees to cave inward or extend past the toes.';

      }else if (exercise.toLowerCase()==='split-squat'){
        imageSrc = 'static/img/DB_SPLIT_SQT.gif';
        document.getElementById('img-6').src = imageSrc;
        document.getElementById('para-6-1').textContent = '1)Exercise Details:The split squat is a unilateral lower-body exercise. It involves placing one foot forward and the other behind, lowering the body by bending the front knee, and then returning to the starting position.';
        document.getElementById('para-6-2').textContent = '2)Muscle Activation:Primarily targets the quadriceps (65%), with secondary activation in the glutes (25%) and hamstrings (10%).';
        document.getElementById('para-6-3').textContent = '3)Common Mistakes:Letting the front knee extend beyond the toes.';

      }else if (exercise.toLowerCase()==='goblin-squat'){
        imageSrc = 'static/img/kettlebell-goblet-squat.gif';
        document.getElementById('img-6').src = imageSrc;
        document.getElementById('para-6-1').textContent = '1)Exercise Details:The goblet squat is a variation of the squat where a dumbbell or kettlebell is held at chest level. It involves squatting down while keeping the weight close to the body, then standing back up.';
        document.getElementById('para-6-2').textContent = '2)Muscle Activation:Primarily targets the quadriceps (60%), with secondary activation in the glutes (25%) and hamstrings (15%).';
        document.getElementById('para-6-3').textContent = '3)Common Mistakes:Allowing the chest to collapse forward.';

      }else if (exercise.toLowerCase()==='deadlift'){
        imageSrc = 'static/img/DEFICIT_DL.gif';
        document.getElementById('img-7').src = imageSrc;
        document.getElementById('para-7-1').textContent = '1)Exercise Details:The deadlift is a compound exercise that involves lifting a barbell from the ground to hip level, then lowering it back down. It targets multiple muscle groups, including the lower back, glutes, and hamstrings.';
        document.getElementById('para-7-2').textContent = '2)Muscle Activation:Primarily targets the hamstrings (40%), glutes (30%), and lower back (20%), with secondary activation in the core (10%).';
        document.getElementById('para-7-3').textContent = '3)Common Mistakes:Allowing the back to round during the lift.';

      }else if (exercise.toLowerCase()==='ezbar-curl'){
        imageSrc = 'static/img/EZB_CURL.gif';
        document.getElementById('img-8').src = imageSrc;
        document.getElementById('para-8-1').textContent = '1)Exercise Details:The EZ bar curl is an isolation exercise for the biceps. It involves curling an EZ bar towards the shoulders while keeping the elbows close to the body, focusing on the biceps.';
        document.getElementById('para-8-2').textContent = '2)Muscle Activation:Primarily targets the biceps brachii (80%), with secondary activation in the brachialis (15%) and forearms (5%).';
        document.getElementById('para-8-3').textContent = '3)Common Mistakes:Using excessive weight, which can lead to swinging.';

      }else if (exercise.toLowerCase()==='hammer-curl'){
        imageSrc = 'static/img/DB_HAM_CURL.gif';
        document.getElementById('img-8').src = imageSrc;
        document.getElementById('para-8-1').textContent = '1)Exercise Details:The hammer curl is an exercise for the biceps and forearms. It involves curling dumbbells with a neutral grip (palms facing each other) towards the shoulders.';
        document.getElementById('para-8-2').textContent = '2)Muscle Activation:Primarily targets the brachialis (60%), with secondary emphasis on the biceps brachii (30%) and forearms (10%).';
        document.getElementById('para-8-3').textContent = '3)Common Mistakes:Using momentum to lift the weights.';

      }else if (exercise.toLowerCase()==='barbell-curl'){
        imageSrc = 'static/img/REV_BB_CURL.gif';
        document.getElementById('img-8').src = imageSrc;
        document.getElementById('para-8-1').textContent = '1)Exercise Details:The barbell curl is a classic exercise for the biceps. It involves curling a barbell from a fully extended arm position to shoulder level while keeping the elbows close to the torso.';
        document.getElementById('para-8-2').textContent = '2)Muscle Activation:Primarily targets the biceps brachii (75%), with secondary activation in the brachialis (15%) and forearms (10%).';
        document.getElementById('para-8-3').textContent = '3)Common Mistakes:Swinging the body to assist with the lift.';

      }else if (exercise.toLowerCase()==='dumbbell-curl'){
        imageSrc = 'static/img/DB_BC_CURL.gif';
        document.getElementById('img-8').src = imageSrc;
        document.getElementById('para-8-1').textContent = '1)Exercise Details:The dumbbell curl isolates the biceps. It involves curling dumbbells from a fully extended position to shoulder level, with arms at the sides and palms facing up.';
        document.getElementById('para-8-2').textContent = '2)Muscle Activation:Primarily targets the biceps brachii (80%), with secondary activation in the brachialis (15%) and forearms (5%).';
        document.getElementById('para-8-3').textContent = '3)Common Mistakes:Using excessive weight, leading to swinging.';

      }else if (exercise.toLowerCase()==='cable-curl'){
        imageSrc = 'static/img/CABLE_CURL.gif';
        document.getElementById('img-8').src = imageSrc;
        document.getElementById('para-8-1').textContent = '1)Exercise Details:The cable curl targets the biceps using a cable machine. It involves pulling a handle or bar from a fully extended arm position to shoulder level, maintaining constant tension.';
        document.getElementById('para-8-2').textContent = '2)Muscle Activation:Primarily targets the biceps brachii (75%), with secondary activation in the brachialis (20%) and forearms (5%).';
        document.getElementById('para-8-3').textContent = '3)Common Mistakes:Allowing the shoulders to move or shrug.';

      }else if (exercise.toLowerCase()==='tricep-push-down'){
        imageSrc = 'static/img/CABLE_PUSH_DOWN.gif';
        document.getElementById('img-9').src = imageSrc;
        document.getElementById('para-9-1').textContent = '1)Exercise Details:The tricep pushdown is an isolation exercise for the triceps using a cable machine. It involves pushing a bar or rope attachment down from chest height to full arm extension.';
        document.getElementById('para-9-2').textContent = '2)Muscle Activation:Primarily targets the triceps brachii (85%), with secondary activation in the forearms (15%).';
        document.getElementById('para-9-3').textContent = '3)Common Mistakes:Using the shoulders to assist in the pushdown.';

      }else if (exercise.toLowerCase()==='tricep-rope-down'){
        imageSrc = 'static/img/rope.gif';
        document.getElementById('img-9').src = imageSrc;
        document.getElementById('para-9-1').textContent = '1)Exercise Details:The tricep pushdown is an isolation exercise for the triceps using a cable machine. It involves pushing a bar or rope attachment down from chest height to full arm extension.';
        document.getElementById('para-9-2').textContent = '2)Muscle Activation:Primarily targets the triceps brachii (85%), with secondary activation in the forearms (15%).';
        document.getElementById('para-9-3').textContent = '3)Common Mistakes:Using the shoulders to assist in the pushdown.';

      }else if (exercise.toLowerCase()==='tricep-extention'){
        imageSrc = 'static/img/SEAT_DB_TRI_EXT.gif';
        document.getElementById('img-9').src = imageSrc;
        document.getElementById('para-9-1').textContent = '1)Exercise Details:The tricep extension is an isolation exercise targeting the triceps. It involves extending the arms overhead with a dumbbell, barbell, or cable, then lowering it behind the head.';
        document.getElementById('para-9-2').textContent = '2)Muscle Activation:Primarily targets the triceps brachii (80%), with secondary activation in the shoulders (10%) and forearms (10%).';
        document.getElementById('para-9-3').textContent = '3)Common Mistakes:Flaring the elbows out too wide.';

      }else if (exercise.toLowerCase()==='tricep-dips'){
        imageSrc = 'static/img/BENCH_DIPS.gif';
        document.getElementById('img-9').src = imageSrc;
        document.getElementById('para-9-1').textContent = '1)Exercise Details:Tricep dips are a bodyweight exercise targeting the triceps. They involve lowering and raising the body using parallel bars, with elbows bending to lower the body and extending to lift it.';
        document.getElementById('para-9-2').textContent = '2)Muscle Activation:Primarily targets the triceps brachii (75%), with secondary activation in the pectorals (15%) and deltoids (10%).';
        document.getElementById('para-9-3').textContent = '3)Common Mistakes:Leaning too far forward, which shifts focus to the chest.';

      }else if (exercise.toLowerCase()==='supported-pullups'){
        imageSrc = 'static/img/ASS_PULLUP_MC.gif';
        document.getElementById('img-10').src = imageSrc;
        document.getElementById('para-10-1').textContent = '1)Exercise Details:Pull-ups are a bodyweight exercise that targets the upper back and biceps. They involve hanging from a bar with palms facing away and pulling the body upward until the chin is above the bar.';
        document.getElementById('para-10-2').textContent = '2)Muscle Activation:Primarily targets the latissimus dorsi (70%), with secondary activation in the biceps (20%) and upper back (10%).';
        document.getElementById('para-10-3').textContent = '3)Common Mistakes:Using momentum or swinging to complete the movement.';

      }else if (exercise.toLowerCase()==='pullups'){
        imageSrc = 'static/img/PULL_UP.gif';
        document.getElementById('img-10').src = imageSrc;
        document.getElementById('para-10-1').textContent = '1)Exercise Details:Pull-ups are a bodyweight exercise that targets the upper back and biceps. They involve hanging from a bar with palms facing away and pulling the body upward until the chin is above the bar.';
        document.getElementById('para-10-2').textContent = '2)Muscle Activation:Primarily targets the latissimus dorsi (70%), with secondary activation in the biceps (20%) and upper back (10%).';
        document.getElementById('para-10-3').textContent = '3)Common Mistakes:Using momentum or swinging to complete the movement.';

      }else if (exercise.toLowerCase()==='man-maker'){
        imageSrc = 'static/img/man-maker.gif';
        document.getElementById('img-10').src = imageSrc;
        document.getElementById('para-10-1').textContent = '1)Exercise Details:The man maker is a full-body exercise combining a dumbbell push-up, row, squat, and overhead press. It starts in a push-up position with dumbbells, progresses to a row on each side, a jump to a squat, and finishes with an overhead press.';
        document.getElementById('para-10-2').textContent = '2)Muscle Activation:Primarily targets the shoulders (30%), chest (20%), back (20%), legs (20%), and core (10%).';
        document.getElementById('para-10-3').textContent = '3)Common Mistakes:Rushing through the movements, compromising form.';

      }else if (exercise.toLowerCase()==='lat-pull-down'){
        imageSrc = 'static/img/LAT_PULL_DOWN.gif';
        document.getElementById('img-10').src = imageSrc;
        document.getElementById('para-10-1').textContent = '1)Exercise Details:The lat pull-down targets the upper back, specifically the latissimus dorsi. It involves pulling a bar down to the chest from an overhead position using a cable machine, while seated with knees secured.';
        document.getElementById('para-10-2').textContent = '2)Muscle Activation:Primarily targets the latissimus dorsi (70%), with secondary activation in the biceps (20%) and shoulders (10%).';
        document.getElementById('para-10-3').textContent = '3)Common Mistakes:Using too much momentum to pull the bar down.';

      }else if (exercise.toLowerCase()==='abs-crunches'){
        imageSrc = 'static/img/CRUNCH.gif';
        document.getElementById('img-11').src = imageSrc;
        document.getElementById('para-11-1').textContent = '1)Exercise Details:Abs crunches are a core exercise targeting the abdominal muscles. They involve lying on your back, bending the knees, and lifting the upper torso towards the knees in a controlled manner.';
        document.getElementById('para-11-2').textContent = '2)Muscle Activation:Primarily targets the rectus abdominis (80%) and obliques (20%).';
        document.getElementById('para-11-3').textContent = '3)Common Mistakes:Pulling on the neck instead of using the abs.';

      }else if (exercise.toLowerCase()==='reverse-crunches'){
        imageSrc = 'static/img/REV_CRUNCH.gif';
        document.getElementById('img-11').src = imageSrc;
        document.getElementById('para-11-1').textContent = '1)Exercise Details:Reverse crunches target the lower abdominal muscles. They involve lying on your back, lifting the hips off the ground by curling the knees towards the chest, and then lowering back down.';
        document.getElementById('para-11-2').textContent = '2)Muscle Activation:Primarily targets the lower rectus abdominis (80%) and obliques (20%).';
        document.getElementById('para-11-3').textContent = '3)Common Mistakes:Using momentum to lift the hips instead of controlled movements.';

      }else if (exercise.toLowerCase()==='cable-crunches'){
        imageSrc = 'static/img/CABLE_CRUNCH.gif';
        document.getElementById('img-11').src = imageSrc;
        document.getElementById('para-11-1').textContent = '1)Exercise Details:Cable crunches are an exercise targeting the abdominal muscles using a cable machine. They involve kneeling and pulling a rope attachment down towards the floor by curling the torso.';
        document.getElementById('para-11-2').textContent = '2)Muscle Activation:Primarily targets the rectus abdominis (80%) and obliques (20%).';
        document.getElementById('para-11-3').textContent = '3)Common Mistakes:Pulling with the arms instead of using the abs.';

      }else if (exercise.toLowerCase()==='seated-crunches'){
        imageSrc = 'static/img/DEC_REV_CRUNCH.gif';
        document.getElementById('img-11').src = imageSrc;
        document.getElementById('para-11-1').textContent = '1)Exercise Details:Seated crunches target the abdominal muscles. They involve sitting on a bench or machine, bringing the upper torso towards the knees in a controlled manner to engage the core.';
        document.getElementById('para-11-2').textContent = '2)Muscle Activation:Primarily targets the rectus abdominis (75%) and obliques (25%).';
        document.getElementById('para-11-3').textContent = '3)Common Mistakes:Using momentum instead of controlled movements.';

      }else if (exercise.toLowerCase()==='leg-raises'){
        imageSrc = 'static/img/LEG_RAISE.gif';
        document.getElementById('img-11').src = imageSrc;
        document.getElementById('para-11-1').textContent = '1)Exercise Details:Leg raises target the lower abdominal muscles. They involve lying on your back and lifting the legs straight up towards the ceiling, then lowering them back down without touching the ground.';
        document.getElementById('para-11-2').textContent = '2)Muscle Activation:Primarily targets the lower rectus abdominis (80%) and hip flexors (20%).';
        document.getElementById('para-11-3').textContent = '3)Common Mistakes:Arching the lower back excessively during the lift.';

      }else if (exercise.toLowerCase()==='box-jumps'){
        imageSrc = 'static/img/BOX_JUMP.gif';
        document.getElementById('img-11').src = imageSrc;
        document.getElementById('para-11-1').textContent = '1)Exercise Details:Box jumps are a plyometric exercise that targets the lower body. They involve jumping onto a sturdy box or platform from a standing position and then stepping back down.';
        document.getElementById('para-11-2').textContent = '2)Muscle Activation:Primarily targets the quadriceps (40%), glutes (30%), and hamstrings (20%), with secondary activation in the calves (10%).';
        document.getElementById('para-11-3').textContent = '3)Common Mistakes:Landing with the knees caving inward.';

      }
    });
  }
//nutritionplan
  const nutritionPlans = {
    underweight: {
      male: [
          `"Rice ${Rice}g,Pasta ${Pasta}g,Mung-beans ${MungBeans}g,Dal 100g,Chicken-breast ${Chickenbreast}g,Tuna ${Tuna}g,Avocado ${Avacado}g "`,
          `"Brown-Rice ${BrownRice}g,Chickpeas ${Chickpea}g,Kidney-beans ${KidneyBeans}g,Dal 100g,Poke ${poke}g,Tuna ${Tuna}g,Avocado ${Avacado}g "`,
          `"Chickpea ${Chickpea}g,Pasta ${Pasta}g,Kidney-beans ${KidneyBeans}g,Dal 100g,Chicken-breast ${Chickenbreast}g,Poke ${poke}g,Avocado ${Avacado}g "`,
      ],
      female: [
        `"Rice ${Rice}g,Pasta ${Pasta}g,Mung-beans ${MungBeans}g,Dal 100g,Chicken-breast ${Chickenbreast}g,Tuna ${Tuna}g,Avocado ${Avacado}g "`,
        `"Brown-Rice ${BrownRice}g,Chickpeas ${Chickpea}g,Kidney-beans ${KidneyBeans}g,Dal 100g,Poke ${poke}g,Tuna ${Tuna}g,Avocado ${Avacado}g "`,
        `"Chickpea ${Chickpea}g,Pasta ${Pasta}g,Kidney-beans ${KidneyBeans}g,Dal 100g,Chicken-breast ${Chickenbreast}g,Poke ${poke}g,Avocado ${Avacado}g "`,
      ]
    },
    healthy: {
      male: [
        `"Rice ${Rice}g,Mung-beans ${MungBeans}g,Oats ${Oats}g,Dal 100g,Chicken-breast ${Chickenbreast}g,Tuna ${Tuna}g,Avocado ${Avacado}g "`,
        `"Brown-Rice ${BrownRice}g,Chickpeas ${Chickpea}g,Kidney-beans ${KidneyBeans}g,Dal 100g,Poke ${poke}g,Tuna ${Tuna}g,Avocado ${Avacado}g "`,
        `"Chickpea ${Chickpea}g,Oats ${Oats}g,Kidney-beans ${KidneyBeans}g,Dal 100g,Chicken-breast ${Chickenbreast}g,Tuna ${Tuna}g,Avocado ${Avacado}g "`,

      ],
      female: [
        `"Rice ${Rice}g,Mung-beans ${MungBeans}g,Oats ${Oats}g,Dal 100g,Chicken-breast ${Chickenbreast}g,Tuna ${Tuna}g,Avocado ${Avacado}g "`,
        `"Brown-Rice ${BrownRice}g,Chickpeas ${Chickpea}g,Kidney-beans ${KidneyBeans}g,Dal 100g,Poke ${poke}g,Tuna ${Tuna}g,Avocado ${Avacado}g "`,
        `"Chickpea ${Chickpea}g,Oats ${Oats}g,Kidney-beans ${KidneyBeans}g,Dal 100g,Chicken-breast ${Chickenbreast}g,Tuna ${Tuna}g,Avocado ${Avacado}g "`,
      ]
    },
    overweight: {
      male: [
        `"Chickpea ${Chickpea}g,Mung-beans ${MungBeans}g,Dal 100g,Rice ${Rice}g,Tuna ${Tuna}g,Chicken-breast ${Chickenbreast}g,Avocado ${Avacado}g "`,
        `"Brown-Rice ${BrownRice}g,Chickpeas ${Chickpea}g,Kidney-beans ${KidneyBeans}g,Dal 100g,Poke ${poke}g,Tuna ${Tuna}g,Dal 100g, Avocado ${Avacado}g "`,
        `"Chickpea ${Chickpea}g,Oats ${Oats}g,Kidney-beans ${KidneyBeans}g,Tuna ${Tuna}g,Chicken-breast ${Chickenbreast},Dal 100g,Avocado ${Avacado}g "`,
],
      female: [
        `"Chickpea ${Chickpea}g,Mung-beans ${MungBeans}g,Dal 100g,Rice ${Rice}g,Tuna ${Tuna}g,Chicken-breast ${Chickenbreast}g,Avocado ${Avacado}g "`,
        `"Brown-Rice ${BrownRice}g,Chickpeas ${Chickpea}g,Kidney-beans ${KidneyBeans}g,Dal 100g,Poke ${poke}g,Tuna ${Tuna}g,Dal 100g, Avocado ${Avacado}g "`,
        `"Chickpea ${Chickpea}g,Oats ${Oats}g,Kidney-beans ${KidneyBeans}g,Tuna ${Tuna}g,Chicken-breast ${Chickenbreast},Dal 100g,Avocado ${Avacado}g "`,
      ]
    },
    obese: {
      male: [
        `"Oats ${Oats}g,Mung-beans ${MungBeans}g,Chickpea ${Chickpea}g,Dal 100g,Tuna ${Tuna}g,Chicken-breast ${Chickenbreast}g,Avocado ${Avacado}g "`,
        `"Brown-Rice ${BrownRice}g,Chickpeas ${Chickpea}g,Kidney-beans ${KidneyBeans}g,Dal 100g,Poke ${poke}g,Tuna ${Tuna},Avocado ${Avacado}g "`,
        `"Chickpea ${Chickpea}g,Oats ${Oats}g,Kidney-beans ${KidneyBeans}g,Dal 100g,Tuna ${Tuna}g,Chicken-breast ${Chickenbreast}g,Avocado ${Avacado}g "`,
      ],
      female: [
        `"Oats ${Oats}g,Mung-beans ${MungBeans}g,Chickpea ${Chickpea}g,Dal 100g,Tuna ${Tuna}g,Chicken-breast ${Chickenbreast}g,Avocado ${Avacado}g "`,
        `"Brown-Rice ${BrownRice}g,Chickpeas ${Chickpea}g,Kidney-beans ${KidneyBeans}g,Dal 100g,Poke ${poke}g,Tuna ${Tuna},Avocado ${Avacado}g "`,
        `"Chickpea ${Chickpea}g,Oats ${Oats}g,Kidney-beans ${KidneyBeans}g,Dal 100g,Tuna ${Tuna}g,Chicken-breast ${Chickenbreast}g,Avocado ${Avacado}g "`,
      ]
    }
  };

  // Select a random nutritionPlan plan
  let nutritionPlan;
  if (bmi < 18.5) {
    nutritionPlan =nutritionPlans.underweight[gender][Math.floor(Math.random() * 3)];
  } else if (bmi >= 18.5 && bmi < 24) {
    nutritionPlan = nutritionPlans.healthy[gender][Math.floor(Math.random() * 3)];
  } else if (bmi >= 24 && bmi < 30) {
    nutritionPlan = nutritionPlans.overweight[gender][Math.floor(Math.random() * 3)];
  } else {
    nutritionPlan = nutritionPlans.obese[gender][Math.floor(Math.random() * 3)];
  }

  // Split the nutritionPlan plan into individual exercises
  const Names = nutritionPlan.split(',');

  // Display nutritionPlan plan in the table
  for (let i = 0; i < Names.length; i++) {
    const [Name,Carbs] = Names[i].trim().split(' ');
    document.getElementById(`Name-${i + 1}`).textContent =Name;
    document.getElementById(`Carbs-${i + 1}`).textContent =Carbs;


  }


  // Set new default font family and font color to mimic Bootstrap's default styling
  Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
  Chart.defaults.global.defaultFontColor = '#858796';

// Pie Chart Example
  var ctx = document.getElementById("myPieChart");
  var myPieChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ["Carbs", "Protein", "Fats"],
      datasets: [{
        data: [carbs,protein,fats],
        backgroundColor: ['#0945d5', 'rgba(220,11,11,0.85)', '#f6b826'],
        hoverBackgroundColor: ['#3261ef', '#f32026', '#dcda37'],
        hoverBorderColor: "rgba(234, 236, 244, 1)",
      }],
    },
    options: {
      maintainAspectRatio: false,
      tooltips: {
        backgroundColor: "rgb(255,255,255)",
        bodyFontColor: "#858796",
        borderColor: '#dddfeb',
        borderWidth: 1,
        xPadding: 15,
        yPadding: 15,
        displayColors: false,
        caretPadding: 10,
      },
      legend: {
        display: false
      },
      cutoutPercentage: 80,
    },
  });

  function resetForm() {
    document.getElementById("myForm").reset();
  }
}
