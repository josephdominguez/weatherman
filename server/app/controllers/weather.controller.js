const Weather = require('../models/weather.model.js');
const weatherAPIKey = process.env.WEATHERAPI_API_KEY;
const metarAPIKey = process.env.CHECKWX_API_KEY;

const weatherModel = new Weather(weatherAPIKey, metarAPIKey);

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

exports.getTravelForecast = async (req, res) => {
    /* Code for getTravelForecast function here
    */
}