const { expect, VALID_ZIP, INVALID_ZIP } = require('../config');
const LocationService = require('../../app/services/location.service');
const weatherAPIKey = process.env.WEATHERAPI_API_KEY;

describe('LocationService', function() {
    let locationService;

    before(function() {
        locationService = new LocationService(weatherAPIKey);
    });

    describe('getLocation', function() {
        describe('for a valid ZIP code', function() {
            before(async function() {
                location = await locationService.getLocation(VALID_ZIP);
            })

            it('returns location information for valid zip code', async function() {
                expect(location).to.exist;
            });

            it('has a city property', function() {
                expect(location).to.have.property('city');
            });
            it('has a zip code property', function() {
                expect(location).to.have.property('zipCode');
            });
            it('has a latitude property', function() {
                expect(location).to.have.property('lat');
            });
            it('has a longitude property', function() {
                expect(location).to.have.property('lon');
            });
        });
    });
});
