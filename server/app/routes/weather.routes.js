const weatherController = require('../controllers/weather.controller.js');
const { validateZipCode } = require('../validators/validators.js');

module.exports = app => {
    // Retrieve location given a zip code.
    app.get('/location', validateZipCode, async (req, res) => {
        try{ await weatherController.getLocation(req, res); }
        catch(e) { throw e; }
    });
    
    // Retrieve data for current conditions.
    app.get('/current-conditions', validateZipCode, async (req, res) => {
        try{ await weatherController.getCurrentConditions(req, res); }
        catch(e) { throw e; }
    });

    // Retrieve data for extended forecast.
    app.get('/extended-forecast', validateZipCode, async (req, res) => {
        try{ await weatherController.getExtendedForecast(req, res); }
        catch(e) { throw e; }
    });

    // Retrieve data for local forecast.
    app.get('/local-forecast', validateZipCode, async (req, res) => {
        try { await weatherController.getLocalForecast(req, res); }
        catch(e) { throw e; }
    });

    // Retrieve data for travel forecast.
    app.get('/travel-forecast', async (req, res) => {
        try{ await weatherController.getTravelForecast(req, res); }
        catch(e) { throw e; }
    });

    // Retrieve data for latest observations.
    app.get('/latest-observations', async (req, res) => {
        try{ await weatherController.getLatestObservations(req, res); }
        catch(e) { throw e; }
    });

    // Retrieve data for weather updates (used in app footer).
    app.get('/weather-updates', validateZipCode, async (req, res) => {
        try{ await weatherController.getWeatherUpdates(req, res); }
        catch(e) { throw e; }
    });
}
