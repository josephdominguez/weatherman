const { expect, sinon, VALID_ZIP, INVALID_ZIP } = require('../config');
const weatherController = require('../../app/controllers/weather.controller');

describe('Weather Controller', function () {
    let req, res, json, sandbox;

    before(function () {
        sandbox = sinon.createSandbox();
        res = { 
            json: (data) => { json = data; },
            status: sandbox.stub().returnsThis(),
        };
    });

    afterEach(function () {
        sandbox.restore();
    });

    function test(controllerFunction, property) {
        it(`returns ${property} for valid zip code`, async function () {
            req = { query: { zipCode: VALID_ZIP } };
            await weatherController[controllerFunction](req, res);
            expect(json).to.have.property(property);
        });

        it('throws error for invalid zip code', async function () {
            req = { query: { zipCode: INVALID_ZIP } };
            try {
                await weatherController[controllerFunction](req, res);
            } catch (e) {
                expect(e).to.be.an.instanceOf(Error);
                expect(e.message).to.equal('Invalid ZIP code.');
            }
        });
    }

    describe('getLocation', function () {
        test('getLocation', 'location');
    });

    describe('getCurrentConditions', function () {
        test('getCurrentConditions', 'currentConditions');
    });

    describe('getExtendedForecast', function () {
        test('getExtendedForecast', 'extendedForecast');
    });

    describe('getLocalForecast', function () {
        test('getLocalForecast', 'localForecast');
    });

    describe('getTravelForecast', function () {
        test('getTravelForecast', 'travelForecasts');
    });
});
