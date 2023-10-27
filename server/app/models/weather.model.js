const axios = require('axios');
const { conditionIconsDay, conditionIconsNight } = require('./condition-icons.model.js');

// Sets length of extended forecast. Free Weather API access is limited to 3 days.
const FORECAST_LENGTH = 3;

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

    // Converts date into abbreviated day of week.
    _getDayOfWeekAbbreviation(date) {
        const options = { weekday: 'short' };
        return date.toLocaleDateString('en-US', options)
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
            const conditionIcon = weatherData.current.is_day ? conditionIconsDay[condition] : conditionIconsNight[condition];
            const wind = weatherData.current.wind_mph;
            const city = weatherData.location.name;
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
                city,
                humidity,
                dewpoint,
                visibility,
                pressure,
                heatIndex,
                ceiling,
            }
        } catch(e) { throw e; }
    }

    // Retrieves extended forecast.
    async getExtendedForecast(zipCode) {
        const url = `http://api.weatherapi.com/v1/forecast.json?key=${this.weatherAPIKey}&q=${zipCode}&days=${FORECAST_LENGTH}&aqi=no&alerts=no`;
        try {
            const response = await axios.get(url);
            const weatherData = response.data;

            // Extracts and formats each day's forecast.
            const extendedForecast = [];
            for (let i = 0; i < FORECAST_LENGTH; i++) {
                const forecast = weatherData.forecast.forecastday[i];
                const date = new Date(forecast.date);

                const day = this._getDayOfWeekAbbreviation(date).toUpperCase();
                const condition = forecast.day.condition.text;
                const conditionIcon = conditionIconsDay[condition];
                const minTemp = parseInt(forecast.day.mintemp_f);
                const maxTemp = parseInt(forecast.day.maxtemp_f);

                extendedForecast.push({
                    day,
                    condition,
                    conditionIcon,
                    minTemp,
                    maxTemp,
                });
            }
            // Extract location for page title.
            const city = weatherData.location.name;

            return {
                city: city,
                extendedForecast: extendedForecast
            }
        } catch(e) { throw e; }
    }
}

module.exports = Weather;
