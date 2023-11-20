const { VALID_ZIP, INVALID_ZIP } = require('../config');
const { testController } = require('../test.utils');
const userController = require('../../app/controllers/user.controller');

describe('User Controller', function () {
    describe('getLocation', function () {
        const controllerFunction = 'getLocation';
        const object = 'location';
        const inputConfig = {
            type: 'ZIP code',
            validInput: VALID_ZIP,
            invalidInput: INVALID_ZIP,
        };
        testController(userController, controllerFunction, object, inputConfig);
    });
});
