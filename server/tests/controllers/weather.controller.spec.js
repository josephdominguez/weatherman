const { VALID_ZIP, INVALID_ZIP } = require('../config');
const { testController } = require('../test.utils');
const weatherController = require('../../app/controllers/weather.controller');

describe('Weather Controller', function () {
    describe('getLocation', function () {
        const controllerFunction = 'getLocation';
        const object = 'location';
        const inputType = 'ZIP code';
        testController(weatherController, controllerFunction, object, inputType, VALID_ZIP, INVALID_ZIP);
    });

    describe('getCurrentConditions', function () {
        const controllerFunction = 'getCurrentConditions';
        const object = 'currentConditions';
        const inputType = 'ZIP code';
        testController(weatherController, controllerFunction, object, inputType, VALID_ZIP, INVALID_ZIP);
    });

    describe('getExtendedForecast', function () {
        const controllerFunction = 'getExtendedForecast';
        const object = 'extendedForecast';
        const inputType = 'ZIP code';
        testController(weatherController, controllerFunction, object, inputType, VALID_ZIP, INVALID_ZIP);
    });

    describe('getLocalForecast', function () {
        const controllerFunction = 'getLocalForecast';
        const object = 'localForecast';
        const inputType = 'ZIP code';
        testController(weatherController, controllerFunction, object, inputType, VALID_ZIP, INVALID_ZIP);
    });

    describe('getTravelForecast', function () {
        const controllerFunction = 'getTravelForecast';
        const object = 'travelForecasts';
        const inputType = 'call';
        testController(weatherController, controllerFunction, object, inputType);
    });
});
