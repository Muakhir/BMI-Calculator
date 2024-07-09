function calculateBMI() {
    let weight = document.getElementById('weight').value;
    let height = document.getElementById('height').value;

    if (weight && height) {
        let bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);
        let message = 'Your BMI is: ' + bmi + '. ';
        let scaleSection = null;

        if (bmi < 18.5) {
            message += 'You are underweight. Possible health risks include malnutrition, vitamin deficiencies, and anemia.';
            scaleSection = document.getElementById('underweight');
        } else if (bmi >= 18.5 && bmi < 24.9) {
            message += 'You have a normal weight. Keep maintaining a healthy lifestyle!';
            scaleSection = document.getElementById('normal');
        } else if (bmi >= 25 && bmi < 29.9) {
            message += 'You are overweight. Potential health risks include type 2 diabetes, high blood pressure, and heart disease.';
            scaleSection = document.getElementById('overweight');
        } else if (bmi >= 30) {
            message += 'You are obese. Possible health risks include type 2 diabetes, cardiovascular disease, and certain types of cancer.';
            scaleSection = document.getElementById('obese');
        }

        document.getElementById('result').innerText = message;

        document.querySelectorAll('.scale-section').forEach(section => section.classList.remove('highlight'));

        if (scaleSection) {
            scaleSection.classList.add('highlight');
        }
    } else {
        alert('Please enter both weight and height.');
    }
}

