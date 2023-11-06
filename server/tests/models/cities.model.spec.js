const { expect } = require('../config');
const cities = require('../../app/models/cities.model');
const Weather = require('../../app/models/weather.model');
const weatherAPIKey = process.env.WEATHERAPI_API_KEY;
const metarAPIKey = process.env.CHECKWX_API_KEY;

describe('Cities Model', function () {
    describe('getRandomCities(n)', function() {
        it('returns a list of n random cities', function() {
            const n = 5;
            const randomCities = cities.getRandomCities(n);
            expect(randomCities).to.exist;
            expect(randomCities.length).to.equal(n);
        })

        it('returns error if n is greater than length of topCities', function() {
            const n = Number.MAX_SAFE_INTEGER;
            try { cities.getRandomCities(n); }
            catch(e) { expect(e).to.be.instanceOf(Error); }
        })
    })

    // Slooooow tests to check validity of top cities array. 
    // It's okay to leave these commented out generally.
    /*
    describe('Each city in topCities', function() {
        let weatherModel;

        before(async function() {
            weatherModel = new Weather(weatherAPIKey, metarAPIKey);
        });

        it('can be used to retrieve travel forecast', async function() {
            for (const city of cities.topCities) {
                try { 
                    const travelForecast = await weatherModel.getTravelForecast(city.zipCode);
                    expect(travelForecast).to.exist;
                } catch(e) { expect.fail(`${city.city} threw error`) };
            }
        });

        it('has correct zip code for city', async function() {
            for (const city of cities.topCities) {
                try { 
                    const travelForecast = await weatherModel.getTravelForecast(city.zipCode);

                    const cityName = city.city.split(',')[0].trim();
                    const forecastCityName = travelForecast.city;
                    expect(cityName).to.equal(forecastCityName);
                } catch(e) { 
                    console.error(`Error for ${city.city}: ${e}`);
                    expect.fail(`${city.city} threw error`) 
                };
            }
        });
    });
    */
});
