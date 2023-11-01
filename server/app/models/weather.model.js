const axios = require('axios');
const forecastModel = require('./forecast.model.js');
const { conditionIconsDay, conditionIconsNight } = require('./condition-icons.model.js');

// Sets length of extended forecast. Free Weather API access is limited to 3 days.
const FORECAST_LENGTH = 3;

// Sets endpoints for APIs.
const NWS_API_ENDPOINT = 'https://api.weather.gov'
const WEATHER_API_ENDPOINT = 'https://api.weatherapi.com/v1';
const METAR_API_ENDPOINT = 'https://api.checkwx.com/metar';

class Weather {
    constructor(weatherAPIKey, metarAPIKey) {
        this.weatherAPIKey = weatherAPIKey;
        this.metarAPIKey = metarAPIKey;
    }

    // Retrieves cloud ceiling using METAR data provider.
    async _getCloudCeiling(lat, lon) {
        const url = `${METAR_API_ENDPOINT}/lat/${lat}/lon/${lon}/decoded?x-api-key=${this.metarAPIKey}`;
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

    // Retrieves NWS forecast station given zip code.
    async _getForecastStation(zipCode) {
        const location = await this.getLocation(zipCode);
        const { lat, lon } = location;
        const url = `${NWS_API_ENDPOINT}/points/${lat},${lon}`;
        try {
            const response = await axios.get(url);
            const station = response.data.properties.gridId;
            return station
        } catch(e) { throw e; }
    }

    // Retrieves URL for accessing area forecast discussion for station.
    async _getAreaForecastDiscussionUrl(station) {
        const url = `${NWS_API_ENDPOINT}/products/types/AFD/locations/${station}`;
        try {
            const response = await axios.get(url);
            const areaForecastDiscussionUrl = response.data['@graph'][0]['@id'];
            return areaForecastDiscussionUrl;
        } catch(e) { throw e; }
    }

    // Retrieves location given zip code.
    async getLocation(zipCode) {
        const url = `${WEATHER_API_ENDPOINT}/search.json?key=${this.weatherAPIKey}&q=${zipCode}`;
        try {
            const response = await axios.get(url);
            const location = response.data[0];

            const city = location.name;
            const lat = parseInt(location.lat);
            const lon = parseInt(location.lon);
            
            return {
                city: city,
                zipCode: zipCode,
                lat: lat,
                lon: lon
            }
        } catch(e) { throw e; }
    }

    // Retrieves current weather conditions.
    async getCurrentConditions(zipCode) {
        const url = `${WEATHER_API_ENDPOINT}/forecast.json?key=${this.weatherAPIKey}&q=${zipCode}&days=1&aqi=no&alerts=no`;
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
        const url = `${WEATHER_API_ENDPOINT}/forecast.json?key=${this.weatherAPIKey}&q=${zipCode}&days=${FORECAST_LENGTH}&aqi=no&alerts=no`;
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

    // Retrieves local forecast.
    async getLocalForecast(zipCode) {
        const station = await this._getForecastStation(zipCode);
        const url = await this._getAreaForecastDiscussionUrl(station);
        try {
            const response = await axios.get(url);
            const localForecast = response.data.productText
            
            // Extract forecast discussions from text.
            const synopsis = forecastModel.extractSynopsis(localForecast);
            const shortTerm = forecastModel.extractShortTerm(localForecast);

            return {
                synopsis: synopsis,
                shortTerm: shortTerm,
            }
        } catch(e) { throw e; }
    }
}

module.exports = Weather;
