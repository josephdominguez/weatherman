const axios = require("axios");

const METAR_API_ENDPOINT = "https://api.checkwx.com/metar";

class MetarService {
    constructor(apiKey) {
        this.apiKey = apiKey;
    }

    /**
     * Retrieves cloud ceiling information for a given latitude and longitude using METAR data.
     *
     * @param {number} lat - The latitude of the location.
     * @param {number} lon - The longitude of the location.
     * @returns {string} - The cloud ceiling height in feet or 'N/A' if not available.
     */
    async getCloudCeiling(lat, lon) {
        const url = `${METAR_API_ENDPOINT}/lat/${lat}/lon/${lon}/decoded?x-api-key=${this.apiKey}`;
        try {
            const response = await axios.get(url);
            const metarData = response.data;

            // Extract ceiling height. Sets default value if ceiling data does not exist.
            const ceiling = metarData.data[0].ceiling?.feet ?? "N/A";
            return ceiling;
        } catch (e) {
            throw e;
        }
    }
}

module.exports = MetarService;
