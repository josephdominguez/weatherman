const { expect, request, VALID_ZIP, INVALID_ZIP } = require('../config');
const { testRoute } = require('../test.utils');

describe('Weather Routes', function () {
    describe('GET /location', function () {
        const route = '/location/?zipCode=';
        const object = 'location';
        const properties = ['city', 'zipCode', 'lat', 'lon'];
        const inputConfig = {
            type: 'ZIP code',
            validInput: VALID_ZIP,
            invalidInput: INVALID_ZIP,
        };
        testRoute(route, object, properties, inputConfig);
    });

    describe('GET /current-conditions', function () {
        const route = '/current-conditions/?zipCode=';
        const object = 'currentConditions';
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
            type: 'ZIP code',
            validInput: VALID_ZIP,
            invalidInput: INVALID_ZIP,
        };
        testRoute(route, object, properties, inputConfig);
    });

    describe('GET /local-forecast', function () {
        const route = '/local-forecast/?zipCode=';
        const object = 'localForecast';
        const properties = ['synopsis', 'shortTerm'];
        const inputConfig = {
            type: 'ZIP code',
            validInput: VALID_ZIP,
            invalidInput: INVALID_ZIP,
        };
        testRoute(route, object, properties, inputConfig);
    });

    describe('GET /weather-updates', function () {
        const route = '/weather-updates/?zipCode=';
        const object = 'weatherUpdates';
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
            type: 'ZIP code',
            validInput: VALID_ZIP,
            invalidInput: INVALID_ZIP,
        };
        testRoute(route, object, properties, inputConfig);
    });

    describe('GET /extended-forecast', function () {
        let response;
        let extendedForecast;

        describe('for a valid ZIP code', function () {
            before(async function () {
                response = await request.get(
                    `/extended-forecast/?zipCode=${VALID_ZIP}`
                );
                extendedForecast = response.body.extendedForecast;
            });

            it('returns a 200 status code', function () {
                expect(response.status).to.equal(200);
            });

            it('returns city', function () {
                expect(extendedForecast).to.have.property('city');
            });

            it('returns forecasts', function () {
                expect(extendedForecast).to.have.property('forecasts');
            });

            describe('each forecast', function () {
                it('has a day property', function () {
                    for (const forecast of extendedForecast.forecasts) {
                        expect(forecast).to.have.property('day');
                    }
                });
                it('has a condition property', function () {
                    for (const forecast of extendedForecast.forecasts) {
                        expect(forecast).to.have.property('condition');
                    }
                });
                it('has a conditionIcon property', function () {
                    for (const forecast of extendedForecast.forecasts) {
                        expect(forecast).to.have.property('conditionIcon');
                    }
                });
                it('has a minTempF property', function () {
                    for (const forecast of extendedForecast.forecasts) {
                        expect(forecast).to.have.property('minTempF');
                    }
                });
                it('has a minTempC property', function () {
                    for (const forecast of extendedForecast.forecasts) {
                        expect(forecast).to.have.property('minTempC');
                    }
                });
                it('has a maxTempF property', function () {
                    for (const forecast of extendedForecast.forecasts) {
                        expect(forecast).to.have.property('maxTempF');
                    }
                });
                it('has a maxTempC property', function () {
                    for (const forecast of extendedForecast.forecasts) {
                        expect(forecast).to.have.property('maxTempC');
                    }
                });
            });
        });

        describe('for an invalid ZIP code', function () {
            before(async function () {
                response = await request.get(
                    `/extended-forecast/?zipCode=${INVALID_ZIP}`
                );
            });

            it('returns a 404 status code', function () {
                expect(response.status).to.equal(404);
            });
        });
    });

    describe('GET /travel-forecast', function () {
        let response;
        let travelForecasts;

        before(async function () {
            response = await request.get('/travel-forecast');
            travelForecasts = response.body.travelForecasts;
        });

        it('returns a 200 status code', function () {
            expect(response.status).to.equal(200);
        });

        it('returns travel forecast', function () {
            expect(response.status).to.equal(200);
            expect(response.body).to.have.property('travelForecasts');
        });

        describe('each travel forecast', function () {
            it('has a city property', function () {
                for (const travelForecast of travelForecasts) {
                    expect(travelForecast).to.have.property('city');
                }
            });
            it('has a condition property', function () {
                for (const travelForecast of travelForecasts) {
                    expect(travelForecast).to.have.property('condition');
                }
            });
            it('has a conditionIcon property', function () {
                for (const travelForecast of travelForecasts) {
                    expect(travelForecast).to.have.property('conditionIcon');
                }
            });
            it('has a minTempF property', function () {
                for (const travelForecast of travelForecasts) {
                    expect(travelForecast).to.have.property('minTempF');
                }
            });
            it('has a minTempC property', function () {
                for (const travelForecast of travelForecasts) {
                    expect(travelForecast).to.have.property('minTempC');
                }
            });
            it('has a maxTempF property', function () {
                for (const travelForecast of travelForecasts) {
                    expect(travelForecast).to.have.property('maxTempF');
                }
            });
            it('has a maxTempC property', function () {
                for (const travelForecast of travelForecasts) {
                    expect(travelForecast).to.have.property('maxTempC');
                }
            });
        });
    });
});
