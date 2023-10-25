const axios = require('axios');
const conditionIcons = require('./condition-icons.model.js');

const Weather = function(apiKey) {
    this.apiKey = apiKey;
}

Weather.prototype.getGeocodeByZipCode = async function(zipCode) {
    const url = `http://api.openweathermap.org/geo/1.0/zip?zip=${zipCode},us&appid=${this.apiKey}`
    try {
        const response = await axios.get(url);
        const geocodeData = response.data;
        return {
            lat: geocodeData.lat,
            lon: geocodeData.lon,
            location: geocodeData.name
        };
    } catch(e) { throw e; }
}

Weather.prototype.getCurrentConditions = async function(zipCode) {
    const { lat, lon, location } = await this.getGeocodeByZipCode(zipCode);
    const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=minutely,hourly,daily,alerts&appid=${this.apiKey}`;

    try {
        const response = await axios.get(url);
        const weatherData = response.data;
        
        const condition = weatherData.current.weather[0].main;
        const conditionIcon = conditionIcons[condition];
        return {
            temperature: parseInt(weatherData.current.temp),
            condition: condition,
            conditionIcon: conditionIcon,
            wind: weatherData.current.wind_speed, 
            location: location,
            humidity: weatherData.current.humidity,
            dewpoint: parseInt(weatherData.current.dew_point),
            ceiling: 10000, // Need to find API that includes cloud ceiling
            visibility: weatherData.current.visibility,
            pressure: weatherData.current.pressure,
            heatIndex: weatherData.current.uvi // Not actually heat index, OpenWeatherAPI does not provide
        };
    } catch(e) { throw e; }
}

module.exports = Weather;
