const axios = require('axios');

const Weather = function(apiKey) {
    this.apiKey = apiKey;
}

Weather.prototype.getWeatherByZipCode = async function(zipCode) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${zipCode},us&appid=${this.apiKey}&units=imperial`;

    try {
        const response = await axios.get(url);
        const weatherData = response.data;
        return {
            city: weatherData.name,
            temperature: weatherData.main.temp,
            description: weatherData.weather[0].description,
        };
    } catch (e) { throw e; }
}

Weather.prototype.getTemperature = async function(zipCode) {
    const weatherData = await this.getWeatherByZipCode(zipCode);
    return weatherData.temperature;
}

module.exports = Weather;
