console.log('Welcome to 🌡️ Temperature Converter');

const tempLoad = () => {
    let fa = document.getElementById('fa');
    fa.innerHTML = "&#xf2cb";
    fa.style.color = "#ffa41b";

    setTimeout(() => {
        fa.innerHTML = "&#xf2ca;";
        fa.style.color = "#ffa41b";
    }, 1000)

    setTimeout(() => {
        fa.innerHTML = "&#xf2c9;";
    }, 2000)

    setTimeout(() => {
        fa.innerHTML = "&#xf2c8;";
    }, 3000)

    setTimeout(() => {
        fa.innerHTML = "&#xf2c7;";
        fa.style.color = "#ff5151";
    }, 4000)
}

setInterval(() => {
    fa.style.color = "#ffa41b";
    tempLoad();
}, 5000);


tempLoad();

const calculateTemp = () => {
    const numberTemp = document.getElementById('temp').value.trim();
    const resultContainer = document.getElementById('resultContainer');

    // Clear previous result
    resultContainer.innerHTML = "";

    // 1️⃣ Empty input validation
    if (numberTemp === "") {
        resultContainer.innerHTML = "⚠️ Please enter a temperature value.";
        resultContainer.style.color = "red";
        return;
    }

    // 2️⃣ Numeric validation
    if (isNaN(numberTemp)) {
        resultContainer.innerHTML = "⚠️ Invalid input. Please enter a numeric value.";
        resultContainer.style.color = "red";
        return;
    }

    const tempSelected = document.querySelector('#temp_diff');
    const valeTemp = temp_diff.options[tempSelected.selectedIndex].value;

    const temperature = parseFloat(numberTemp);

    // 3️⃣ Absolute zero validation
    if (valeTemp === "cel" && temperature < -273.15) {
        resultContainer.innerHTML = "⚠️ Temperature cannot be below -273.15°C.";
        resultContainer.style.color = "red";
        return;
    }

    if (valeTemp === "fah" && temperature < -459.67) {
        resultContainer.innerHTML = "⚠️ Temperature cannot be below -459.67°F.";
        resultContainer.style.color = "red";
        return;
    }

    // Conversion functions
    const celTOfah = (cel) => (cel * (9 / 5) + 32).toFixed(2);
    const fahTOcel = (fehr) => ((fehr - 32) * 5 / 9).toFixed(2);

    let result;

    if (valeTemp === "cel") {
        result = celTOfah(temperature);
        resultContainer.innerHTML = `= ${result} °Fahrenheit`;
    } else {
        result = fahTOcel(temperature);
        resultContainer.innerHTML = `= ${result} °Celsius`;
    }

    resultContainer.style.color = "#00b894";
};


