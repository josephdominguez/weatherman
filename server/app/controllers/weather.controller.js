const Weather = require('../models/weather.model.js');
const weatherAPIKey = process.env.WEATHERAPI_API_KEY;
const metarAPIKey = process.env.CHECKWX_API_KEY;
const weatherModel = new Weather(weatherAPIKey, metarAPIKey);
const { getRandomCities } = require('../models/cities.model.js');

const TRAVEL_FORECAST_LENGTH = 4;
const LATEST_OBSERVATIONS_LENGTH = 7;

// Retrieve location.
exports.getLocation = async (req, res) => {
    const { zipCode } = req.query;
    try {
        const location = await weatherModel.getLocation(zipCode);
        res.json( {location} );
    } catch(e) {
        res.status(404).json({
            message: 'Invalid ZIP code.'
        });``
    }
}

// Retrieve current conditions.
exports.getCurrentConditions = async (req, res) => {
    const { zipCode } = req.query;
    try {
        const currentConditions = await weatherModel.getCurrentConditions(zipCode);
        res.json( {currentConditions} );
    } catch (e) {
        res.status(404).json({
            message: 'Invalid ZIP code.'
        });
    }
}

// Retrieve extended forecast.
exports.getExtendedForecast = async (req, res) => {
    const { zipCode } = req.query;
    try {
        const extendedForecast = await weatherModel.getExtendedForecast(zipCode);
        res.json( {extendedForecast} );
    } catch (e) {
        res.status(404).json({
            message: 'Invalid ZIP code.'
        });
    }
}

// Retrieve local forecast.
exports.getLocalForecast = async (req, res) => {
    const { zipCode } = req.query;
    try {
        const localForecast = await weatherModel.getLocalForecast(zipCode);
        res.json( {localForecast} );
    } catch (e) {
        res.status(404).json({
            message: 'Invalid ZIP code.'
        });
    }
}

// Retrieves travel forecast for random cities. 
exports.getTravelForecast = async (req, res) => {
    const travelForecasts = [];
    try {
        const randomCities = getRandomCities(TRAVEL_FORECAST_LENGTH);
        for (const city of randomCities) {
            const travelForecast = await weatherModel.getTravelForecast(city.zipCode);
            travelForecasts.push(travelForecast);
        }
        res.json( {travelForecasts} );
    } catch (e) {
        res.status(404).json({
            message: 'Invalid ZIP code.'
        });
    }
}

// Retrieves travel forecast for random cities. 
exports.getLatestObservations = async (req, res) => {
    const latestObservations = [];
    try {
        const randomCities = getRandomCities(LATEST_OBSERVATIONS_LENGTH);
        for (const city of randomCities) {
            const latestObservation = await weatherModel.getLatestObservations(city.zipCode);
            latestObservations.push(latestObservation);
        }
        res.json( {latestObservations} );
    } catch (e) {
        res.status(404).json({
            message: 'Invalid ZIP code.'
        });
    }
}
