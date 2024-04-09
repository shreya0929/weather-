function getWeather() {
    const apiKey = 'd88ce420d9e5e3bcfca2465c05538ab5';
    const locationInput = document.getElementById('locationInput').value;
    const weatherInfoDiv = document.getElementById('weatherInfo');

    if (locationInput === '') {
        alert('Please enter a location.');
        return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${locationInput}&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const temperature = (data.main.temp - 273.15).toFixed(2);
            const weatherDescription = data.weather[0].description;
            const cityName = data.name;

            const weatherInfoHTML = `
                <h2>${cityName}</h2>
                <p>Temperature: ${temperature} &#8451;</p>
                <p>Weather: ${weatherDescription}</p>
            `;

            weatherInfoDiv.innerHTML = weatherInfoHTML;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            weatherInfoDiv.innerHTML = '<p>Failed to fetch weather data.</p>';
        });
}