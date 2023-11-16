const { request, expect, VALID_ZIP, INVALID_ZIP } = require('../config');

describe('GET /extended-forecast', function() {
    let response;
    let extendedForecast;

    describe('for a valid ZIP code', function() {        
        before(async function() {
            response = await request.get(`/extended-forecast/?zipCode=${VALID_ZIP}`);
            extendedForecast = response.body.extendedForecast;
        });

        it('returns a 200 status code', function() {
            expect(response.status).to.equal(200);
        });

        it('returns city', function() {
            expect(extendedForecast).to.have.property('city');
        })
    
        it('returns forecasts', function() {
            expect(extendedForecast).to.have.property('forecasts');
        });

        describe('each forecast', function() {
            it('has a day property', function() {
                for (const forecast of extendedForecast.forecasts) {
                    expect(forecast).to.have.property('day');
                }
            });
            it('has a condition property', function() {
                for (const forecast of extendedForecast.forecasts) {
                    expect(forecast).to.have.property('condition');
                }
            });
            it('has a conditionIcon property', function() {
                for (const forecast of extendedForecast.forecasts) {
                    expect(forecast).to.have.property('conditionIcon');
                }
            });
            it('has a minTempF property', function() {
                for (const forecast of extendedForecast.forecasts) {
                    expect(forecast).to.have.property('minTempF');
                }
            });
            it('has a minTempC property', function() {
                for (const forecast of extendedForecast.forecasts) {
                    expect(forecast).to.have.property('minTempC');
                }
            });
            it('has a maxTempF property', function() {
                for (const forecast of extendedForecast.forecasts) {
                    expect(forecast).to.have.property('maxTempF');
                }
            });
            it('has a maxTempC property', function() {
                for (const forecast of extendedForecast.forecasts) {
                    expect(forecast).to.have.property('maxTempC');
                }
            });
        });
    });
    
    describe('for an invalid ZIP code', function() {
        before(async function() {
            response = await request.get(`/extended-forecast/?zipCode=${INVALID_ZIP}`);
        })

        it('returns a 404 status code', function() {
            expect(response.status).to.equal(404)
        });
    });
});
