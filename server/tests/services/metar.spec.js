const { expect, VALID_LOCATION, INVALID_LOCATION } = require('../config');
const MetarService = require('../../app/services/metar.service');
const metarAPIKey = process.env.CHECKWX_API_KEY;

describe('METARService', function() {
    let metarService;

    before(function() {
        metarService = new MetarService(metarAPIKey);
    });

    describe('getForecastStation', function() {
        it('returns cloud ceiling for a valid location', async function() {
            const { lat, lon } = VALID_LOCATION;
            const ceiling = await metarService.getCloudCeiling(lat, lon);
            expect(ceiling).to.exist;
        });

        it('throws error for invalid location', async function() {
            const { lat, lon } = INVALID_LOCATION;
            try { await metarService.getCloudCeiling(lat, lon); }
            catch(e) { expect(e).to.be.an.instanceOf(Error); }
        });
    });
});
