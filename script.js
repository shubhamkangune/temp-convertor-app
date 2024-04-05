function convertTemperature() {
  var temperatureInput = parseFloat(document.getElementById('temperature').value);
  var unit = document.getElementById('unit').value;
  var resultDisplay = document.getElementById('result');
  var result;

  if (isNaN(temperatureInput)) {
      resultDisplay.innerHTML = 'Please enter a valid number';
      return;
  }

  if (unit === 'celsius') {
      result = (temperatureInput * 9/5) + 32;
      resultDisplay.innerHTML = temperatureInput + ' Celsius = ' + result + ' Fahrenheit';
  } else if (unit === 'fahrenheit') {
      result = (temperatureInput - 32) * 5/9;
      resultDisplay.innerHTML = temperatureInput + ' Fahrenheit = ' + result + ' Celsius';
  } else if (unit === 'kelvin') {
      result = temperatureInput + 273.15;
      resultDisplay.innerHTML = temperatureInput + ' Kelvin = ' + result + ' Celsius';
  }
}
