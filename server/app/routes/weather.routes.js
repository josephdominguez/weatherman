module.exports = app => {
    const weather = require('../controllers/weather.controller.js');

    // Retrieve temperature
    app.get('/temperature', async (req, res) => {
        try { await weather.getTemperature(req, res); } 
        catch(e) { throw(e); }
    });

    // Retrieve weather data.
    app.get('/weather', async (req, res) => {
        try { await weather.getWeather(req, res); }
        catch(e) { throw(e); }
    });
}

