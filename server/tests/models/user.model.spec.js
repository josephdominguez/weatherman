const { VALID_SUB, INVALID_SUB, VALID_USER, INVALID_USER } = require('../config');
const { testModel } = require('../test.utils');
const UserModel = require('../../app/models/user.model');

describe('User Model', function () {
    const userModel = new UserModel();
    const userSchema = ['sub', 'email', 'savedLocations', 'unitPreference'];

    describe('createUser', function () {
        const modelFunction = 'createUser';
        const object = 'user';
        const properties = userSchema;
        const inputConfig = {
            inputType: 'user',
            validInput: VALID_USER,
            invalidInput: INVALID_USER,
        };
        testModel(userModel, modelFunction, object, properties, inputConfig);
    });

    describe('getUserBySub', function () {
        const modelFunction = 'getUserBySub';
        const object = 'user';
        const properties = userSchema;
        const inputConfig = {
            inputType: 'sub',
            validInput: VALID_SUB,
            invalidInput: INVALID_SUB,
        };
        testModel(userModel, modelFunction, object, properties, inputConfig);
    });

    describe('updateUserBySub()', function () {
        const modelFunction = 'updateUserBySub';
        const object = 'updatedUser';
        const properties = userSchema;
        const inputConfig = {
            inputType: 'user',
            validInput: [VALID_SUB, VALID_USER],
            invalidInput: [INVALID_SUB, VALID_USER],
        };
        testModel(userModel, modelFunction, object, properties, inputConfig);
    });

    describe('deleteUserBySub', function () {
        const modelFunction = 'deleteUserBySub';
        const object = 'deletedUser';
        const properties = userSchema;
        const inputConfig = {
            inputType: 'sub',
            validInput: VALID_SUB,
            invalidInput: INVALID_SUB,
        };
        testModel(userModel, modelFunction, object, properties, inputConfig);
    });
});
