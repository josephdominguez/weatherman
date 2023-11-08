const UserModel = require('../models/user.model.js');

// Create a new user.
exports.createUser = async (req, res) => {
    try {
        const userData = req.body;
        const user = await UserModel.createUser(userData);
        res.json(user);
    } catch (e) {
        res.status(500).json({
            message: 'Error creating user',
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
            message: 'Error getting user data.',
        });
    }
};

// Update user data.
exports.updateUser = async (req, res) => {
    try {
        const { sub } = req.body;
        const userData = req.body;

        // Check if the user exists by their sub claim
        const existingUser = await UserModel.getUserBySub(sub);

        if (!existingUser) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Update the user's data with the new information
        Object.assign(existingUser, userData);

        // Save and return the updated user data
        const updatedUser = await existingUser.save();
        res.json(updatedUser);
    } catch (error) {
        res.status(500).json({
            message: 'Error updating user data.',
        });
    }
};
