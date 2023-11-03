const server = require('../server');
const supertest = require('supertest');
const request = supertest(server)
const expect = require('chai').expect;

// Defines valid zip code (Sandy, UT), and invalid zip code.
const VALID = '84093';
const INVALID = '00000';

describe('GET /', function() {
    it('returns a 200 status code', async function() {
        const response = await request.get('/');
        expect(response.status).to.equal(200);
    });
});

describe('GET /location', function() {
    it('returns a 200 status code', async function() {
        const response = await request.get(`/location/?zipCode=${VALID}`);
        expect(response.status).to.equal(200);
    });

    it('returns location data for a valid ZIP code', async function() {
        const response = await request.get(`/location/?zipCode=${VALID}`);
        expect(response.status).to.equal(200);
        expect(response.body).to.have.property('location');
        const location = response.body.location;
        expect(location).to.have.property('city').to.equal('Sandy');
        expect(location).to.have.property('zipCode').to.equal(VALID);
        expect(location).to.have.property('lat').to.equal(40);
        expect(location).to.have.property('lon').to.equal(-111);
    });

    it('returns a 404 status code for an invalid ZIP code', async function () {
        const response = await request.get(`/location?zipCode=${INVALID}`);
        expect(response.status).to.equal(404);
        expect(response.body).to.have.property('message').to.equal('Invalid ZIP code.');
    });
});
