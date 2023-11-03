const axios = require("axios");

const NWS_API_ENDPOINT = "https://api.weather.gov";

class NWSService {
    /**
     * Retrieves the forecast station identifier for a given latitude and longitude.
     *
     * @param {number} lat - The latitude of the location.
     * @param {number} lon - The longitude of the location.
     * @returns {string} - The forecast station identifier.
     */
    async getForecastStation(lat, lon) {
        const url = `${NWS_API_ENDPOINT}/points/${lat},${lon}`;
        try {
            const response = await axios.get(url);
            const station = response.data.properties.gridId;
            return station;
        } catch (e) { throw e; }
    }

    /**
     * Retrieves the URL for accessing the area forecast discussion for a specific station.
     *
     * @param {string} station - The forecast station identifier.
     * @returns {string} - The URL for the area forecast discussion.
     */
    async getAreaForecastDiscussionUrl(station) {
        const url = `${NWS_API_ENDPOINT}/products/types/AFD/locations/${station}`;
        try {
            const response = await axios.get(url);
            const areaForecastDiscussionUrl = response.data["@graph"][0]["@id"];
            return areaForecastDiscussionUrl;
        } catch (e) { throw e; }
    }
}

module.exports = NWSService;
