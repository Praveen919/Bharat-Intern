function convertTemperature() {
    const temperatureInput = document.getElementById("temperature");
    const unitSelect = document.getElementById("unit");
    const resultParagraph = document.getElementById("result");

    const temperature = parseFloat(temperatureInput.value);
    const unit = unitSelect.value;
    let result;

    if (isNaN(temperature)) {
        result = "Please enter a valid temperature.";
    } else {
        switch (unit) {
            case "celsius":
                result = `Result: ${temperature} °C = ${celsiusToFahrenheit(temperature)} °F / ${celsiusToKelvin(temperature)} K`;
                break;
            case "fahrenheit":
                result = `Result: ${temperature} °F = ${fahrenheitToCelsius(temperature)} °C / ${fahrenheitToKelvin(temperature)} K`;
                break;
            case "kelvin":
                result = `Result: ${temperature} K = ${kelvinToCelsius(temperature)} °C / ${kelvinToFahrenheit(temperature)} °F`;
                break;
        }
    }

    resultParagraph.textContent = result;
}

function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function celsiusToKelvin(celsius) {
    return celsius + 273.15;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

function fahrenheitToKelvin(fahrenheit) {
    return (fahrenheit + 459.67) * 5/9;
}

function kelvinToCelsius(kelvin) {
    return kelvin - 273.15;
}

function kelvinToFahrenheit(kelvin) {
    return (kelvin * 9/5) - 459.67;
}

// Initial conversion when the page loads
convertTemperature();
