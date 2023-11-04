const { request, expect, VALID_ZIP, INVALID_ZIP } = require('../config');

describe('GET /current-conditions', function() {
    let response;
    let currentConditions;

    describe('for a valid ZIP code', function() {        
        before(async function() {
            response = await request.get(`/current-conditions/?zipCode=${VALID_ZIP}`);
            currentConditions = response.body.currentConditions;
        });

        it('returns a 200 status code', function() {
            expect(response.status).to.equal(200);
        });
    
        it('returns current conditions', function() {
            expect(response.status).to.equal(200);
            expect(response.body).to.have.property('currentConditions');
        });
    
        it('has a temperature property', function() {
            expect(currentConditions).to.have.property('temperature');
        });
        it('has a condition property', function() {
            expect(currentConditions).to.have.property('condition');
        });
        it('has a conditionIcon property', function() {
            expect(currentConditions).to.have.property('conditionIcon');
        });
        it('has a wind property', function() {
            expect(currentConditions).to.have.property('wind');
        });
        it('has a city property', function() {
            expect(currentConditions).to.have.property('city');
        });
        it('has a humidity property', function() {
            expect(currentConditions).to.have.property('humidity');
        });
        it('has a dewpoint property', function() {
            expect(currentConditions).to.have.property('dewpoint');
        });
        it('has a visibility property', function() {
            expect(currentConditions).to.have.property('visibility');
        });
        it('has a pressure property', function() {
            expect(currentConditions).to.have.property('pressure');
        });
        it('has a heatIndex property', function() {
            expect(currentConditions).to.have.property('heatIndex');
        });
        it('has a ceiling property', function() {
            expect(currentConditions).to.have.property('ceiling');
        });
    });

    describe('for an invalid ZIP code', function() {
        before(async function() {
            response = await request.get(`/current-conditions/?zipCode=${INVALID_ZIP}`);
        })

        it('returns a 404 status code', function() {
            expect(response.status).to.equal(404)
        });
    })
});
