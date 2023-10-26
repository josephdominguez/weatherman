const Weather = require('../models/weather.model.js');
const weatherAPIKey = process.env.WEATHERAPI_API_KEY;
const metarAPIKey = process.env.CHECKWX_API_KEY;

const weatherModel = new Weather(weatherAPIKey, metarAPIKey);

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
