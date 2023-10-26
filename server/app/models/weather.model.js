const axios = require('axios');
const conditionIcons = require('./condition-icons.model.js');

class Weather {
    constructor(weatherAPIKey, metarAPIKey) {
        this.weatherAPIKey = weatherAPIKey;
        this.metarAPIKey = metarAPIKey;
    }

    // Retrieves cloud ceiling using METAR data provider.
    async _getCloudCeiling(lat, lon) {
        const url = `https://api.checkwx.com/metar/lat/${lat}/lon/${lon}/decoded?x-api-key=${this.metarAPIKey}`;
        try {
            const response = await axios.get(url);
            const metarData = response.data;
            
            // Extract ceiling height. Sets default value if ceiling data does not exist.
            const ceiling = metarData.data[0].ceiling?.feet ?? 'N/A';
            return ceiling;
        } catch(e) { throw e; }
    }

    // Retrieves current weather conditions.
    async getCurrentConditions(zipCode) {
        const url = `http://api.weatherapi.com/v1/forecast.json?key=${this.weatherAPIKey}&q=${zipCode}&days=1&aqi=no&alerts=no`;
        try {
            const response = await axios.get(url);
            const weatherData = response.data;

            // Extract and format weather details for the response object.
            const temperature = parseInt(weatherData.current.temp_f);
            const condition = weatherData.current.condition.text;
            const conditionIcon = conditionIcons[condition];
            const wind = weatherData.current.wind_mph;
            const location = weatherData.location.name;
            const humidity = weatherData.current.humidity;
            const dewpoint = weatherData.forecast.forecastday[0].hour[0].dewpoint_f;
            const visibility = weatherData.current.vis_miles;
            const pressure = weatherData.current.pressure_mb;
            const heatIndex = weatherData.forecast.forecastday[0].hour[0].heatindex_f;

            // Use METAR API to obtain cloud ceiling.
            const lat = weatherData.location.lat;
            const lon = weatherData.location.lon;
            const ceiling = await this._getCloudCeiling(lat, lon);

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
            }
        } catch(e) { throw e; }
    }
}

module.exports = Weather;
