const userController = require('../controllers/user.controller.js');

module.exports = app => {
    // Create a new user.
    app.post('/users', async (req, res) => {
        try { await userController.createUser(req, res); }
        catch(e) { throw e; }
    });

    // Retrieve user data.
    app.get('/users', async (req, res) => {
        try { await userController.getUser(req, res); }
        catch(e) { throw e; }
    });

    // Update existing user.
    app.put('/users', async (req, res) => {
        try { await userController.updateUser(req, res); }
        catch(e) { throw e; }
    })
}
