function calculateBMI() {
let weight= document.getElementById('weight').value;
let height= document.getElementById('height').value;


 if (weight && height) {
     let bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);
     document.getElementById('result').innerText = 'Your BMI is: ' + bmi;

} else {
    alert('Please enter both weight and height.');
    }
}