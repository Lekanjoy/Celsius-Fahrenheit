let celsiusBox = document.getElementById("celsius");
let fahrenheitBox = document.getElementById("fahrenheit");
//let unitCelsius = document.getElementById("unitCelsius");

let unitCelsius = " °C";
let unitFahrenheit = " °F";

celsiusBox.style.fontSize = "18px";
celsiusBox.style.fontWeight = "bolder";
celsiusBox.style.color = " rgb(255, 166, 2)";

fahrenheitBox.style.fontSize = "18px";
fahrenheitBox.style.color = "green";
fahrenheitBox.style.fontWeight = "bold"



function celsius() {
  if (isNaN(celsiusBox.value) == false) {
    
    let outcome = parseFloat(celsiusBox.value) * 1.8 + 32;
    fahrenheitBox.value = parseFloat(outcome.toFixed(2)) + unitFahrenheit;
  } else {
    fahrenheitBox.value = "Not a Number!!";
  }
}

function fahrenheit() {
  if (isNaN(fahrenheitBox.value) == false) {
    let outcome = (parseFloat(fahrenheitBox.value) - 32) * 0.5556;
    celsiusBox.value = parseFloat(outcome.toFixed(2)) + unitCelsius;
  } else {
    celsiusBox.value = "Not a Number!!";
  }
}
