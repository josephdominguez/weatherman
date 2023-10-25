module.exports = app => {
    const weatherController = require('../controllers/weather.controller.js');

    // Retrieve data for current conditions.
    app.get('/current-conditions', async (req, res) => {
        try{ await weatherController.getCurrentConditions(req, res); }
        catch(e) { throw(e); }
    })
}
