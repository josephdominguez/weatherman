const { VALID_ZIP, INVALID_ZIP } = require('../config');
const { testController } = require('../test.utils');
const weatherController = require('../../app/controllers/weather.controller');

describe('Weather Controller', function () {
    describe('getLocation', function () {
        const controllerFunction = 'getLocation';
        const object = 'location';
        const inputConfig = {
            type: 'ZIP code',
            validInput: VALID_ZIP,
            invalidInput: INVALID_ZIP,
        }
        testController(weatherController, controllerFunction, object, inputConfig);
    });

    describe('getCurrentConditions', function () {
        const controllerFunction = 'getCurrentConditions';
        const object = 'currentConditions';
        const inputConfig = {
            type: 'ZIP code',
            validInput: VALID_ZIP,
            invalidInput: INVALID_ZIP,
        }
        testController(weatherController, controllerFunction, object, inputConfig);
    });

    describe('getExtendedForecast', function () {
        const controllerFunction = 'getExtendedForecast';
        const object = 'extendedForecast';
        const inputConfig = {
            type: 'ZIP code',
            validInput: VALID_ZIP,
            invalidInput: INVALID_ZIP,
        }
        testController(weatherController, controllerFunction, object, inputConfig);
    });

    describe('getLocalForecast', function () {
        const controllerFunction = 'getLocalForecast';
        const object = 'localForecast';
        const inputConfig = {
            type: 'ZIP code',
            validInput: VALID_ZIP,
            invalidInput: INVALID_ZIP,
        }
        testController(weatherController, controllerFunction, object, inputConfig);
    });

    describe('getTravelForecast', function () {
        const controllerFunction = 'getTravelForecast';
        const object = 'travelForecasts';
        const inputConfig = {
            type: 'call',
        }
        testController(weatherController, controllerFunction, object, inputConfig);
    });

    describe('getWeatherUpdates', function () {
        const controllerFunction = 'getWeatherUpdates';
        const object = 'weatherUpdates';
        const inputConfig = {
            type: 'ZIP code',
            validInput: VALID_ZIP,
            invalidInput: INVALID_ZIP,
        }
        testController(weatherController, controllerFunction, object, inputConfig);
    });
});
