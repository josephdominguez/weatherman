const { expect, VALID_ZIP, INVALID_ZIP } = require('../config');
const Weather = require('../../app/models/weather.model');
const weatherAPIKey = process.env.WEATHERAPI_API_KEY;
const metarAPIKey = process.env.CHECKWX_API_KEY;

describe('Weather Model', function () {
    const weatherModel = new Weather(weatherAPIKey, metarAPIKey);

    function test(modelFunction, object, properties) {
        describe('for valid zip code', function () {
            let data;

            before(async function () {
                data = await weatherModel[modelFunction](VALID_ZIP);
            });

            it(`returns ${object}`, function () {
                expect(data).to.exist;
            });

            for (const property of properties) {
                it(`has a ${property} property`, function () {
                    expect(data).to.have.property(property);
                });
            }
        });

        describe('for invalid zip code', function () {
            it('throws error for invalid zip code', async function () {
                try {
                    await weatherModel[modelFunction](INVALID_ZIP);
                } catch (e) {
                    expect(e).to.be.an.instanceOf(Error);
                }
            });
        });
    }

    describe('getLocation', function () {
        const object = 'location';
        const properties = ['city', 'zipCode', 'lat', 'lon'];
        test('getLocation', object, properties);
    });

    describe('getCurrentConditions', function () {
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
            'visibilityMiles',
            'visiblityKilometers',
            'pressureMB',
            'pressureIN',
            'heatIndex',
            'ceiling',
        ];
        test('getCurrentConditions', object, properties);
    });

    describe('getLocalForecast', function () {
        const object = 'local forecast';
        const properties = ['synopsis', 'shortTerm'];
        test('getLocalForecast', object, properties);
    });

    describe('getTravelForecast', function () {
        const object = 'travel forecast';
        const properties = [
            'city',
            'conditionIcon',
            'minTempF',
            'minTempF',
            'maxTempF',
            'minTempC',
        ];
        test('getTravelForecast', object, properties);
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
