const { request, expect, VALID_ZIP, INVALID_ZIP } = require('../config');

describe('GET /local-forecast', function() {
    let response;
    let localForecast;

    describe('for a valid ZIP code', function() {        
        before(async function() {
            response = await request.get(`/local-forecast/?zipCode=${VALID_ZIP}`);
            localForecast = response.body.localForecast;
        });

        it('returns a 200 status code', function() {
            expect(response.status).to.equal(200);
        });
    
        it('returns local forecast', function() {
            expect(response.status).to.equal(200);
            expect(response.body).to.have.property('localForecast');
        });
    
        it('has a synopsis property', function() {
            expect(localForecast).to.have.property('synopsis');
        });
        it('has a short term property', function() {
            expect(localForecast).to.have.property('shortTerm');
        });
    });

    describe('for an invalid ZIP code', function() {
        before(async function() {
            response = await request.get(`/local-forecast/?zipCode=${INVALID_ZIP}`);
        })

        it('returns a 404 status code', function() {
            expect(response.status).to.equal(404)
        });
    })
});
