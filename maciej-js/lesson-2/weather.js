const unit = prompt("'F' for Celsius to Fahrenheita or 'C' for Fahrenheita to Celsius");
const temperature = parseFloat(prompt("Please implement temperature"));

if (unit === "F") {
    const a = convertFahrtenheitToCelsius(temperature);
    console.log(`The value of the temperature in Celsius is ${a}`);
} else {
    console.log(`The value of the temperature in Fahrenheit is ${convertCelsiusToFahrenheit(temperature)}`);
}

function convertFahrtenheitToCelsius(temperatureInFahrenheit) {
    return (temperature - 32) * 5 / 9;
}

function convertCelsiusToFahrenheit(temperatureInCelsius) {
    return (temperature * 9 / 5) + 32;
}
