const Weather = require('../models/weather.model.js');

const apiKey = process.env.OPENWEATHER_API_KEY;
const weatherModel = new Weather(apiKey);

// Retrieve temperature.
exports.getTemperature = async (req, res) => {
    const { zipCode } = req.query;

    try {
        const temperature = await weatherModel.getTemperature(zipCode);
        res.json( {temperature} );
    } catch (e) {
        res.status(404).json({
            message: 'Invalid ZIP code.'
        });
    }
}
