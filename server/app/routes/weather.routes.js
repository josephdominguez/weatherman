module.exports = app => {
    const weatherController = require('../controllers/weather.controller.js');

    // Retrieve data for current conditions.
    app.get('/current-conditions', async (req, res) => {
        try{ await weatherController.getCurrentConditions(req, res); }
        catch(e) { throw(e); }
    })

    // Retrieve data for extended forecast.
    app.get('/extended-forecast', async (req, res) => {
        try{ await weatherController.getExtendedForecast(req, res); }
        catch(e) { throw(e); }
    })
}
