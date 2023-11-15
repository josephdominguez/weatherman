const userController = require('../controllers/user.controller.js');
const checkJwt = require('../config/auth.config.js');

module.exports = app => {
    // Create a new user.
    app.post('/users', checkJwt, async (req, res) => {
        try { await userController.createUser(req, res); }
        catch(e) { throw e; }
    });

    // Retrieve user data.
    app.get('/users', checkJwt, async (req, res) => {
        try { await userController.getUser(req, res); }
        catch(e) { throw e; }
    });

    // Update existing user.
    app.put('/users', checkJwt, async (req, res) => {
        try { await userController.updateUser(req, res); }
        catch(e) { throw e; }
    })
}
