const axios = require('axios');

const WEATHER_API_ENDPOINT = 'https://api.weatherapi.com/v1';

class LocationService {
    constructor(apiKey) {
        this.apiKey = apiKey;
    }

    /**
     * Retrieves location information based on a provided ZIP code.
     *
     * @param {string} zipCode - The ZIP code for which to retrieve location information.
     * @returns {object} - An object containing city, ZIP code, latitude, and longitude.
     */
    async getLocation(zipCode) {
        const url = `${WEATHER_API_ENDPOINT}/search.json?key=${this.apiKey}&q=${zipCode}`;
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
            };
        } catch (e) { throw e; }
    }
}

module.exports = LocationService;
