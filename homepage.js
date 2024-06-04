var urlParams = new URLSearchParams(window.location.search);
var name = urlParams.get('name');
var weight = parseFloat(urlParams.get('weight'));
var height = parseFloat(urlParams.get('height'));

var calcBMI = weight / ((height / 100) * (height / 100));
calcBMI = calcBMI.toFixed(2);  

var bmiCategory;
if (calcBMI < 18.5) {
    bmiCategory = "Underweight";
} else if (calcBMI >= 18.5 && calcBMI < 25) {
    bmiCategory = "Normal";
} else if (calcBMI >= 25 && calcBMI < 30) {
    bmiCategory = "Overweight";
} else {
    bmiCategory = "Obese";
}

// Update the HTML elements with the calculated values
document.getElementById("profile-name").innerText = name;
document.getElementById("profile-weight").innerText = weight.toFixed(1);
document.getElementById("profile-height").innerText = height.toFixed(0);
document.getElementById("profile-bmi").innerText = `BMI: ${calcBMI}`;

// text sa bmi
var bmiCategoryElement = document.createElement("div");
bmiCategoryElement.textContent = `Category: ${bmiCategory}`;
bmiCategoryElement.style.fontWeight = "bold"; 
bmiCategoryElement.style.marginTop = "5px";
document.getElementById("bmi-category").appendChild(bmiCategoryElement);

// sa recommended exercise na button ahehe
document.addEventListener('DOMContentLoaded', function () {
    const button = document.querySelector('.btn-primary');

    button.addEventListener('click', function () {
        const weight = parseFloat(document.getElementById('profile-weight').innerText);
        const height = parseFloat(document.getElementById('profile-height').innerText) / 100;

        if (!isNaN(weight) && !isNaN(height) && height > 0) {
            const bmi = (weight / (height * height)).toFixed(2);
            window.location.href = `recommended.html?bmi=${bmi}`;
        } else {
            alert("Please enter valid weight and height.");
        }
    });
});