document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var name = document.getElementById("name").value;
    var weight = parseFloat(document.getElementById("weight").value);
    var height = parseFloat(document.getElementById("height").value);

    // PANG CALCU SA BMI
    var bmi = weight / ((height/100) * (height/100));

    // NEED NI SIYA PARA PANG REDIRECT SA HOMEPAGE ANA ANG GPT
    window.location.href = "homepage.html?name=" + encodeURIComponent(name) + "&weight=" + encodeURIComponent(weight) + "&height=" + encodeURIComponent(height) + "&bmi=" + encodeURIComponent(bmi.toFixed(2));
});

