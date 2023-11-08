const UserModel = require('../models/user.model.js');

// Create a new user.
exports.createUser = async (req, res) => {
    try {
        const userData = req.body;
        const user = await UserModel.createUser(userData);
        res.json(user);
    } catch (e) {
        res.status(500).json({
            error: 'Error creating user',
        });
    }
};

// Retrieve user by sub claim (Auth0 user identifier).
exports.getUser = async (req, res) => {
    try {
        const { sub } = req.body;
        const user = await UserModel.getUserBySub(sub);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json(user);
    } catch (e) {
        res.status(500).json({
            error: 'Error getting user data.',
        });
    }
};

// Update existing user data.
exports.updateUser = async (req, res) => {
    try {
        const { sub } = req.body;
        const userData = req.body;

        const updatedUser = await UserModel.updateUserBySub(sub, userData);
        res.json(updatedUser);
    } catch (e) {
        res.status(500).json({
            error: e.message,
        });
    }
};
