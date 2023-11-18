const { expect, VALID_ZIP, INVALID_ZIP } = require('../config');
const { testModel } = require('../test.utils');
const Weather = require('../../app/models/weather.model');
const weatherAPIKey = process.env.WEATHERAPI_API_KEY;
const metarAPIKey = process.env.CHECKWX_API_KEY;

describe('Weather Model', function () {
    const weatherModel = new Weather(weatherAPIKey, metarAPIKey);

    describe('getLocation', function () {
        const modelFunction = 'getLocation';
        const object = 'location';
        const properties = ['city', 'zipCode', 'lat', 'lon'];
        const inputConfig = {
            inputType: 'ZIP code',
            validInput: VALID_ZIP,
            invalidInput: INVALID_ZIP,
        };
        testModel(weatherModel, modelFunction, object, properties, inputConfig);
    });

    describe('getCurrentConditions', function () {
        const modelFunction = 'getCurrentConditions';
        const object = 'current conditions';
        const properties = [
            'temperatureF',
            'temperatureC',
            'condition',
            'conditionIcon',
            'windMPH',
            'windKPH',
            'city',
            'humidity',
            'dewpointF',
            'dewpointC',
            'visibilityM',
            'visibilityKM',
            'pressureIN',
            'pressureMB',
            'heatIndex',
            'ceiling',
        ];
        const inputConfig = {
            inputType: 'ZIP code',
            validInput: VALID_ZIP,
            invalidInput: INVALID_ZIP,
        };
        testModel(weatherModel, modelFunction, object, properties, inputConfig);
    });

    describe('getLocalForecast', function () {
        const modelFunction = 'getLocalForecast';
        const object = 'local forecast';
        const properties = ['synopsis', 'shortTerm'];
        const inputConfig = {
            inputType: 'ZIP code',
            validInput: VALID_ZIP,
            invalidInput: INVALID_ZIP,
        };
        testModel(weatherModel, modelFunction, object, properties, inputConfig);
    });

    describe('getTravelForecast', function () {
        const modelFunction = 'getTravelForecast';
        const object = 'travel forecast';
        const properties = [
            'city',
            'conditionIcon',
            'minTempF',
            'minTempF',
            'maxTempF',
            'minTempC',
        ];
        const inputConfig = {
            inputType: 'ZIP code',
            validInput: VALID_ZIP,
            invalidInput: INVALID_ZIP,
        };
        testModel(weatherModel, modelFunction, object, properties, inputConfig);
    });

    describe('getWeatherUpdates', function () {
        const modelFunction = 'getWeatherUpdates';
        const object = 'weather updates';
        const properties = [
            'temperatureF',
            'temperatureC',
            'condition',
            'windDirection',
            'windSpeedMPH',
            'windSpeedKPH',
            'windChillF',
            'windChillC',
            'city',
            'humidity',
            'dewpointF',
            'dewpointC',
            'visibilityM',
            'visibilityKM',
            'pressureIN',
            'pressureMB',
            'ceiling',
            'alert',
        ];
        const inputConfig = {
            inputType: 'ZIP code',
            validInput: VALID_ZIP,
            invalidInput: INVALID_ZIP,
        };
        testModel(weatherModel, modelFunction, object, properties, inputConfig);
    });

    describe('getExtendedForecast', function () {
        const properties = [
            'day',
            'condition',
            'conditionIcon',
            'minTempF',
            'minTempC',
            'maxTempF',
            'maxTempC',
        ];
        describe('for valid zip code', function () {
            let data;

            before(async function () {
                data = await weatherModel.getExtendedForecast(VALID_ZIP);
            });

            it(`returns city`, function () {
                expect(data).to.have.property('city');
            });

            it(`returns forecasts`, function () {
                expect(data).to.have.property('forecasts');
                expect(data.forecasts).to.be.an('array');
            });

            describe('each forecast', function () {
                for (const property of properties) {
                    it(`has a ${property} property`, function () {
                        for (const forecast of data.forecasts) {
                            expect(forecast).to.have.property(property);
                        }
                    });
                }
            });
        });

        describe('for invalid zip code', function () {
            it('throws error for invalid zip code', async function () {
                try {
                    await weatherModel.getExtendedForecast(VALID_ZIP);
                } catch (e) {
                    expect(e).to.be.an.instanceOf(Error);
                }
            });
        });
    });

    describe('(Private functions)', function () {
        describe('_getDayOfWeekAbbreviation', function () {
            it('returns abbreviated day of week given date object', function () {
                const knownDate = new Date('2012-12-21');
                const abbreviatedDay =
                    weatherModel._getDayOfWeekAbbreviation(knownDate);
                expect(abbreviatedDay).to.equal('Thu');
            });
        });
    });
});
