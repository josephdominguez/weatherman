const mongoose = require('mongoose');

// Define the user schema
const userSchema = new mongoose.Schema({
    sub: { type: String, unique: true }, // Auth0 user identifier (sub claim in JWT)
    email: { type: String, unique: true }, // Email address
    savedLocations: [{ type: String }], // List of saved zip codes
    unitPreference: { type: String, enum: ['imperial', 'metric'] }, // Measurement unit preference
});

// Create a Mongoose model based on the schema
const User = mongoose.model('User', userSchema);

/**
 * @Class representing the User Model.
 */
class UserModel {
    /**
     * Validate user data against the user schema.
     * @param {Object} userData - The user data to validate.
     * @returns {string|null} An error message if validation fails, or null if validation passes.
     */
    validateUserData(userData) {
        const userValidation = new User(userData);
        const validationError = userValidation.validateSync();
        if (validationError) {
            return validationError.message;
        }
        return null; // Validation passed
    }

    /**
     * Create a new user.
     * @param {Object} userData - The user data to create a new user.
     * @returns {Promise} A Promise that resolves to the created user document.
     */
    async createUser(userData) {
        try {
            await this.validateUserData(userData);
            const newUser = new User(userData);
            return newUser.save();
        } catch (e) {
            throw new Error(`Error creating user: ${e.message}`);
        }
    }

    /**
     * Get user by Auth0 sub claim (user identifier).
     * @param {string} sub - The Auth0 user identifier.
     * @returns {Promise} A Promise that resolves to the user document.
     */
    async getUserBySub(sub) {
        return User.findOne({ sub }).exec();
    }

    /**
     * Update user data by sub claim (user identifier).
     * @param {string} sub - The Auth0 user identifier.
     * @param {Object} updatedData - The updated user data.
     * @returns {Promise} A Promise that resolves to the updated user document.
     */
    async updateUserBySub(sub, updatedData) {
        try {
            const existingUser = await this.getUserBySub(sub);
            if (!existingUser) {
                throw new Error('User not found');
            }

            // Update the user's data with the new information
            Object.assign(existingUser, updatedData);

            // Save and return the updated user data
            const updatedUser = await existingUser.save();
            return updatedUser;
        } catch (e) {
            throw new Error(`${e.message}`);
        }
    }

    /**
     * Delete a user by their sub.
     * @param {string} sub - The Auth0 user identifier.
     * @returns {Promise} A Promise that resolves to the deleted user document.
     */
    async deleteUserBySub(sub) {
        try {
            const deletedUser = await User.findOneAndDelete({sub}).exec();
            if (!deletedUser) {
                throw new Error('User not found');
            }
            return deletedUser;
        } catch (e) {
            throw new Error(`${e.message}`);
        }
    }

    /**
     * Insert sample users into the database.
     */
    static async insertSampleUsers() {
        const sampleUsers = [
            {
                sub: 'sample-sub-1',
                email: 'sample1@example.com',
                savedLocations: ['12345', '67890'],
                unitPreference: 'imperial',
            },
            {
                sub: 'sample-sub-2',
                email: 'sample2@example.com',
                savedLocations: ['54321'],
                unitPreference: 'metric',
            },
        ];

        try {
            // Loop through the sampleUsers array and create user documents
            for (const userData of sampleUsers) {
                const user = new User(userData);
                await user.save();
                console.log(`User inserted: ${user}`);
            }
        } catch (e) {
            console.error('Error inserting sample users:', e);
        }
    }
}

module.exports = UserModel;
