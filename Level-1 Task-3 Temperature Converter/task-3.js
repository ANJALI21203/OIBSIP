document.addEventListener("DOMContentLoaded", function() {
    const fahrenheitInput = document.getElementById("fahrenheit-input");
    const unitSelect = document.getElementById("unitSelect");
    const convertButton = document.getElementById("convertButton");
    const result = document.getElementById("result");
    convertButton.addEventListener("click", function() {
       
        const temperature = parseFloat(fahrenheitInput.value);
        const unit = unitSelect.value;

        
        if (isNaN(temperature)) {
            displayError("Please Enter A Valid Temperature(in digits).");
            return;
        }

        let convertedTemperature;
        let unitName;

        if (unit === "celsius") {
            convertedTemperature = (temperature - 32) * 5/9;
            unitName = "CELCIUS(°C)";
        } else if (unit === "kelvin") {
            convertedTemperature = (temperature - 32) * 5/9 + 273.15;
            unitName = "KELVIN(°K)";
        } else {
            displayError("Invalid unit selection.");
            return;
        }
         displayResult(`Converted temperature: ${convertedTemperature.toFixed(2)} ${unitName}`);
    });

    
    function displayError(message) {
        result.textContent = message;
    }

    function displayResult(message) {
        result.textContent = message;
    }
});