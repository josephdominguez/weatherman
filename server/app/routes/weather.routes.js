module.exports = app => {
    const weather = require("../controllers/weather.controller.js");

    // Retrieve temperature
    app.get('/temperature', async (req, res) => {
        try { await weather.getTemperature(req, res); } 
        catch(e) { throw(e); }
    });
}
