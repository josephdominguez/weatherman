const { expect, request } = require('../config');

describe('GET /travel-forecast', function() {
    let response;
    let travelForecasts;

    before(async function() {
        response = await request.get('/travel-forecast');
        travelForecasts = response.body.travelForecasts;
    });
    
    it('returns a 200 status code', function() {
        expect(response.status).to.equal(200);
    });

    it('returns travel forecast', function() {
        expect(response.status).to.equal(200);
        expect(response.body).to.have.property('travelForecasts');
    });

    describe('each travel forecast', function() {
        it('has a city property', function() {
            for (const travelForecast of travelForecasts) {
                expect(travelForecast).to.have.property('city');
            }
        });
        it('has a condition property', function() {
            for (const travelForecast of travelForecasts) {
                expect(travelForecast).to.have.property('condition');
            }
        });
        it('has a conditionIcon property', function() {
            for (const travelForecast of travelForecasts) {
                expect(travelForecast).to.have.property('conditionIcon');
            }
        });
        it('has a minTemp property', function() {
            for (const travelForecast of travelForecasts) {
                expect(travelForecast).to.have.property('minTemp');
            }
        });
        it('has a maxTemp property', function() {
            for (const travelForecast of travelForecasts) {
                expect(travelForecast).to.have.property('maxTemp');
            }
        });
    });
});