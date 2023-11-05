const axios = require('axios');
const LocationService = require('../services/location.service.js');
const MetarService = require('../services/metar.service.js');
const NWSService = require('../services/nws.service.js');
const forecastModel = require('./forecast.model.js');
const { conditionIconsDay, conditionIconsNight } = require('./condition-icons.model.js');

// Sets endpoints for APIs.
const WEATHER_API_ENDPOINT = 'https://api.weatherapi.com/v1';
// Sets length of extended forecast. Free Weather API access is limited to 3 days.
const FORECAST_LENGTH = 3;

class Weather {
    constructor(weatherAPIKey, metarAPIKey) {
        this.weatherAPIKey = weatherAPIKey;
        this.metarAPIKey = metarAPIKey;
        this.locationService = new LocationService(this.weatherAPIKey);
        this.metarService = new MetarService(this.metarAPIKey);
        this.nwsService = new NWSService();
    }

    /**
     * Converts a date into an abbreviated day of the week.
     * @param {Date} date - The date to convert.
     * @returns {string} An abbreviated day of the week.
     */
    _getDayOfWeekAbbreviation(date) {
        const options = { weekday: 'short' };
        return date.toLocaleDateString('en-US', options);
    }

    /**
     * Retrieves location information for a given zip code.
     * @param {string} zipCode - The zip code to fetch location information for.
     * @returns {object} An object containing location details.
     */
    async getLocation(zipCode) {
        return await this.locationService.getLocation(zipCode);
    }
    
    /**
     * Retrieves current weather conditions for a given zip code.
     * @param {string} zipCode - The zip code to fetch weather data for.
     * @returns {object} An object containing current weather conditions.
     */
    async getCurrentConditions(zipCode) {
        const url = `${WEATHER_API_ENDPOINT}/forecast.json?key=${this.weatherAPIKey}&q=${zipCode}&days=1&aqi=no&alerts=no`;
        try {
            const response = await axios.get(url);
            const weatherData = response.data;

            // Extract and format current weather conditions.
            const temperature = parseInt(weatherData.current.temp_f);
            const condition = weatherData.current.condition.text;
            const conditionIcon = weatherData.current.is_day
                ? conditionIconsDay[condition]
                : conditionIconsNight[condition];
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
            const ceiling = await this.metarService.getCloudCeiling(lat, lon);

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
            };
        } catch (e) { throw e; }
    }

    /**
     * Retrieves an extended weather forecast for a given zip code.
     * @param {string} zipCode - The zip code to fetch the extended forecast for.
     * @returns {object} An object containing the extended weather forecast.
     */
    async getExtendedForecast(zipCode) {
        const url = `${WEATHER_API_ENDPOINT}/forecast.json?key=${this.weatherAPIKey}&q=${zipCode}&days=${FORECAST_LENGTH}&aqi=no&alerts=no`;
        try {
            const response = await axios.get(url);
            const weatherData = response.data;

            // Extracts and formats each day's forecast.
            const forecasts = [];
            for (let i = 0; i < FORECAST_LENGTH; i++) {
                const forecast = weatherData.forecast.forecastday[i];
                const date = new Date(forecast.date);

                const day = this._getDayOfWeekAbbreviation(date).toUpperCase();
                const condition = forecast.day.condition.text;
                const conditionIcon = conditionIconsDay[condition];
                const minTemp = parseInt(forecast.day.mintemp_f);
                const maxTemp = parseInt(forecast.day.maxtemp_f);

                forecasts.push({
                    day,
                    condition,
                    conditionIcon,
                    minTemp,
                    maxTemp,
                });
            }
            // Extract location for page title.
            const location = await this.locationService.getLocation(zipCode);
            const city = location.city;

            return {
                city: city,
                forecasts: forecasts,
            };
        } catch (e) { throw e; }
    }

    /**
     * Retrieves a local weather forecast for a given zip code.
     * @param {string} zipCode - The zip code to fetch the local forecast for.
     * @returns {object} An object containing the local weather forecast.
     */
    async getLocalForecast(zipCode) {
        const { lat, lon } = await this.getLocation(zipCode);
        const station = await this.nwsService.getForecastStation(lat, lon);
        const url = await this.nwsService.getAreaForecastDiscussionUrl(station);
        try {
            const response = await axios.get(url);
            const localForecast = response.data.productText;

            // Extract forecast discussions from text.
            const synopsis = forecastModel.extractSynopsis(localForecast);
            const shortTerm = forecastModel.extractShortTerm(localForecast);

            return {
                synopsis: synopsis,
                shortTerm: shortTerm,
            };
        } catch (e) { throw e; }
    }

    /**
     * Retrieves a travel forecast for a given zip codes.
     * @param {string} zipCode - The zip code to fetch the travel forecast for.
     * @returns {object} An object containing the travel forecast.
     */
    async getTravelForecast(zipCode) {
        const url = `${WEATHER_API_ENDPOINT}/forecast.json?key=${this.weatherAPIKey}&q=${zipCode}&days=1&aqi=no&alerts=no`;
        try {
            const response = await axios.get(url);
            const weatherData = response.data;
            
            // Extract travel forecast check from data :)
            const city = weatherData.location.name;
            const condition = weatherData.current.condition.text;
            const conditionIcon = weatherData.current.is_day
                ? conditionIconsDay[condition]
                : conditionIconsNight[condition];
            const minTemp = parseInt(weatherData.forecast.forecastday[0].day.mintemp_f);
            const maxTemp = parseInt(weatherData.forecast.forecastday[0].day.maxtemp_f);
            
            return {
                city,
                conditionIcon,
                minTemp,
                maxTemp,
            };
        } catch (e) { throw e; }
    }
}

module.exports = Weather;
