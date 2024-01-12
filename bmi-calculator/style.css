function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const weightUnit = document.getElementById('weightUnit').value;
    const heightUnit = document.getElementById('heightUnit').value;

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        document.getElementById('result').innerText = 'Please enter valid weight and height.';
        return;
    }

    const weightInKg = convertToKg(weight, weightUnit);
    const heightInM = convertToMeters(height, heightUnit);

    const bmi = weightInKg / (heightInM * heightInM);
    const bmiCategory = getBMICategory(bmi);

    document.getElementById('result').innerText = `Your BMI: ${bmi.toFixed(2)} (${bmiCategory})`;
}

function convertToKg(weight, unit) {
    if (unit === 'lbs') {
        return weight / 2.20462; // 1 lb = 0.453592 kg
    }
    return weight;
}

function convertToMeters(height, unit) {
    if (unit === 'cm') {
        return height / 100; // Convert cm to meters
    } else if (unit === 'in') {
        return height * 0.0254; // Convert inches to meters
    }
    return height;
}

function getBMICategory(bmi) {
    if (bmi < 18.5) {
        return 'Underweight';
    } else if (bmi >= 18.5 && bmi < 25) {
        return 'Normal Weight';
    } else if (bmi >= 25 && bmi < 30) {
        return 'Overweight';
    } else {
        return 'Obese';
    }
}
