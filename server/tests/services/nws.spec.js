const { expect, VALID_LOCATION, INVALID_LOCATION } = require('../config');
const NWSService = require('../../app/services/nws.service');

describe('NWSService', function() {
    let nwsService;

    before(function() {
        nwsService = new NWSService();
    });

    describe('getForecastStation', function() {
        it('returns the forecast station identifier for a valid location', async function() {
            const {lat, lon } = VALID_LOCATION;
            const station = await nwsService.getForecastStation(lat, lon);
            expect(station).to.equal('SLC');
        });

        it('throws error for invalid location', async function() {
            const {lat, lon } = INVALID_LOCATION;
            try { await nwsService.getForecastStation(lat, lon); }
            catch (e) { expect(e.response.status).to.equal(400); }
        });
    });

    describe('getAreaForecastDiscussionUrl', function() {
        it('returns the url for accessing area forecast discussion for a valid station', async function() {
            const station = VALID_LOCATION.station;
            const url = await nwsService.getAreaForecastDiscussionUrl(station);
            expect(url).to.exist;
        });

        it('throws error for invalid station', async function() {
            const station = INVALID_LOCATION.station;
            try { await nwsService.getAreaForecastDiscussionUrl(station); }
            catch(e) { expect(e).to.be.an.instanceOf(Error); }
        });
    })
});
