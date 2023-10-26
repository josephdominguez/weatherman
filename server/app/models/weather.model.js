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
            lat: parseInt(geocodeData.lat),
            lon: parseInt(geocodeData.lon),
            location: geocodeData.name
        };
    } catch(e) { throw e; }
}

Weather.prototype.getURLsByLatAndLon = async function(lat, lon) {
    const url = ` https://api.weather.gov/points/${lat},${lon}`;
    console.log(url);
    try {
        const response = await axios.get(url);
        const forecastData = response.data;
        return {
            forecastURL: forecastData.properties.forecast,
            forecastGridDataURL: forecastData.properties.forecastGridData,
        }
    } catch(e) { throw e; }
}

Weather.prototype.getCurrentConditions = async function(zipCode) {
    const { lat, lon, location } = await this.getGeocodeByZipCode(zipCode);
    const { forecastURL, forecastGridDataURL } = await this.getURLsByLatAndLon(lat, lon);

    try {
        const forecastHourlyResponse = await axios.get(forecastURL);
        const forecastGridDataResponse = await axios.get(forecastGridDataURL);
        const weatherData = { ...forecastHourlyResponse.data.properties, 
             ...forecastGridDataResponse.data.properties };

        // Sets properties to be returned 
        const temperature =  parseInt(weatherData.periods[0]?.temperature) ?? 'N/A';
        const condition = weatherData.periods[0]?.shortForecast ?? 'N/A';
        const conditionIcon = conditionIcons[condition] ?? 'N/A';
        const wind =  weatherData.periods[0]?.windSpeed ??  'N/A';
        const humidity = weatherData.periods[0]?.relativeHumidity?.value ?? 'N/A';
        const dewpoint = parseInt(weatherData.periods[0]?.dewpoint?.value) ?? 'N/A';
        const ceiling = weatherData.ceilingHeight?.values[0]?.value ?? "N/A";
        const visibility = weatherData.visibility?.values[0] ?? 'N/A';
        const pressure = weatherData.pressure?.values[0]?.value ?? 'N/A';
        const heatIndex = parseInt(weatherData.heatIndex?.values[0]?.value ?? 'N/A');

        return {
            temperature,
            condition,
            conditionIcon,
            wind,
            location,
            humidity,
            dewpoint,
            ceiling,
            visibility,
            pressure,
            heatIndex,
        };
    } catch(e) { throw e; }
}

module.exports = Weather;
