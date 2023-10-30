module.exports = app => {
    const weatherController = require('../controllers/weather.controller.js');

    // Retrieve location given a zip code.
    app.get('/location', async (req, res) => {
        try{ await weatherController.getLocation(req, res); }
        catch(e) { throw e; }
    })
    
    // Retrieve data for current conditions.
    app.get('/current-conditions', async (req, res) => {
        try{ await weatherController.getCurrentConditions(req, res); }
        catch(e) { throw e; }
    })

    // Retrieve data for extended forecast.
    app.get('/extended-forecast', async (req, res) => {
        try{ await weatherController.getExtendedForecast(req, res); }
        catch(e) { throw e; }
    })

    // Retrieve data for travel forecast
    app.get('/travel-forecast', async (req, res) => {
        try{ await weatherController.getTravelForecast(req, res); }
        catch(e) { throw e; }
    })

}
