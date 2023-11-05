const { expect, VALID_LOCATION, INVALID_LOCATION } = require('../config');
const MetarService = require('../../app/services/metar.service');
const metarAPIKey = process.env.CHECKWX_API_KEY;

describe('METARService', function() {
    let metarService;

    before(function() {
        metarService = new MetarService(metarAPIKey);
    });

    describe('getForecastStation', function() {
        describe('for a valid location', function() {
            const lat = VALID_LOCATION.lat;
            const lon = VALID_LOCATION.lon;
            let ceiling;
            
            before(async function() {
                ceiling = await metarService.getCloudCeiling(lat, lon);
                console.log(ceiling);
            });

            it('returns cloud ceiling', async function() {
                expect(ceiling).to.exist;
            });
        });

        describe('for an invalid location', function() {
            const lat = INVALID_LOCATION.lat;
            const lon = INVALID_LOCATION.lon;

            it('throws error', async function() {
                try { await metarService.getCloudCeiling(lat, lon); }
                catch(e) { expect(e).to.be.an.instanceOf(Error); }
            })
        });
    });
});
