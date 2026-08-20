/**
 * Temperature Converter
 *
 * Converts values between:
 * Celsius
 * Fahrenheit
 * Kelvin
 */

"use strict";


// ================================
// DOM Elements
// ================================

const temperatureInput =
    document.querySelector("#temperature");

const unitSelect =
    document.querySelector("#unit");

const inputSymbol =
    document.querySelector("#input-symbol");

const errorMessage =
    document.querySelector("#error-message");

const resetButton =
    document.querySelector("#reset-button");


const resultElements = {

    celsius:
        document.querySelector("#celsius-result"),

    fahrenheit:
        document.querySelector("#fahrenheit-result"),

    kelvin:
        document.querySelector("#kelvin-result")

};


// ================================
// Constants
// ================================

const unitSymbols = {

    celsius: "°C",

    fahrenheit: "°F",

    kelvin: "K"

};


const ABSOLUTE_ZERO_CELSIUS = -273.15;

const ABSOLUTE_ZERO_FAHRENHEIT = -459.67;


// ================================
// Conversion Functions
// ================================


/**
 * Celsius → Fahrenheit
 */
function celsiusToFahrenheit(celsius) {

    return (celsius * 9) / 5 + 32;

}


/**
 * Celsius → Kelvin
 */
function celsiusToKelvin(celsius) {

    return celsius + 273.15;

}


/**
 * Fahrenheit → Celsius
 */
function fahrenheitToCelsius(fahrenheit) {

    return ((fahrenheit - 32) * 5) / 9;

}


/**
 * Kelvin → Celsius
 */
function kelvinToCelsius(kelvin) {

    return kelvin - 273.15;

}


// ================================
// Main Conversion Function
// ================================

function convertTemperature(value, unit) {

    let celsius;


    switch (unit) {

        case "fahrenheit":

            celsius =
                fahrenheitToCelsius(value);

            break;


        case "kelvin":

            celsius =
                kelvinToCelsius(value);

            break;


        case "celsius":

        default:

            celsius = value;

    }


    return {

        celsius: celsius,

        fahrenheit:
            celsiusToFahrenheit(celsius),

        kelvin:
            celsiusToKelvin(celsius)

    };

}


// ================================
// Validation
// ================================

function validateTemperature(value, unit) {

    if (!Number.isFinite(value)) {

        return "Please enter a temperature.";

    }


    if (
        unit === "kelvin" &&
        value < 0
    ) {

        return "Kelvin cannot be below 0 K.";

    }


    if (
        unit === "celsius" &&
        value < ABSOLUTE_ZERO_CELSIUS
    ) {

        return "Celsius cannot be below −273.15 °C.";

    }


    if (
        unit === "fahrenheit" &&
        value < ABSOLUTE_ZERO_FAHRENHEIT
    ) {

        return "Fahrenheit cannot be below −459.67 °F.";

    }


    return "";

}


// ================================
// Format Result
// ================================

function formatTemperature(value) {

    if (Number.isInteger(value)) {

        return String(value);

    }


    return value
        .toFixed(2)
        .replace(/\.00$/, "");

}


// ================================
// Clear Results
// ================================

function clearResults() {

    Object
        .values(resultElements)
        .forEach((element) => {

            element.textContent = "—";

        });

}


// ================================
// Update Converter
// ================================

function updateConverter() {

    const rawValue =
        temperatureInput.value.trim();

    const unit =
        unitSelect.value;


    // Update input unit symbol

    inputSymbol.textContent =
        unitSymbols[unit];


    // Empty input

    if (rawValue === "") {

        errorMessage.textContent = "";

        clearResults();

        return;

    }


    const value =
        Number(rawValue);


    // Validate input

    const validationError =
        validateTemperature(value, unit);


    if (validationError) {

        errorMessage.textContent =
            validationError;

        clearResults();

        return;

    }


    errorMessage.textContent = "";


    // Perform conversion

    const converted =
        convertTemperature(value, unit);


    // Display results

    Object
        .entries(converted)
        .forEach(([key, result]) => {

            resultElements[key].textContent =
                formatTemperature(result);

        });

}


// ================================
// Reset Converter
// ================================

function resetConverter() {

    temperatureInput.value = "";

    unitSelect.value = "celsius";

    inputSymbol.textContent = "°C";

    errorMessage.textContent = "";

    clearResults();

    temperatureInput.focus();

}


// ================================
// Event Listeners
// ================================


// Live conversion

temperatureInput.addEventListener(
    "input",
    updateConverter
);


// Unit change

unitSelect.addEventListener(
    "change",
    updateConverter
);


// Reset

resetButton.addEventListener(
    "click",
    resetConverter
);


// Escape key → reset

temperatureInput.addEventListener(
    "keydown",
    (event) => {

        if (event.key === "Escape") {

            resetConverter();

        }

    }
);