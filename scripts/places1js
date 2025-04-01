// WindChill formula: WindChill = 13.12 + (0.6215 * T) - (11.37 * (V ** 0.16)) + (0.3965 * T * (V ** 0.16))

document.addEventListener("DOMContentLoaded", function () {
    const temperature = 10;
    const windSpeed = 5;
    const windChillElement = document.querySelector(".windchill-value");

    function calculateWindChill(temp, speed) {
        if (temp <= 10 && speed > 4.8) {
            return (13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16)).toFixed(2) + "°C";
        }
        return "N/A";
    }

    windChillElement.textContent = calculateWindChill(temperature, windSpeed);
});
