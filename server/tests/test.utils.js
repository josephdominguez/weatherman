const { expect, request } = require('./config');

/**
 * Test a specific route for valid and invalid zip codes.
 *
 * @param {string} route - The route to test.
 * @param {string} object - The expected object in the response.
 * @param {string[]} properties - An array of properties to check within the object.
 * @param {string} validQuery - The valid zip code to use in the request (can be empty string for no query).
 * @param {string} invalidQuery - The invalid zip code to use in the request (can be empty string for no query).
 */
function testRoute(route, object, properties, validQuery='', invalidQuery='') {
    describe(`for a valid zip code`, function () {
        let data;

        before(async function () {
            const url = validQuery ? route + validQuery : route;
            response = await request.get(url);
            data = response.body[object];
        });

        it('returns a 200 status code', function () {
            expect(response.status).to.equal(200);
        });

        it(`returns ${object} object`, async function () {
            expect(response.body).to.have.property(object);
        });

        describe(`each ${object} object`, function () {
            for (const property of properties) {
                it(`has a ${property} property`, function () {
                    expect(data).to.have.property(property);
                });
            }
        });
    });

    if (invalidQuery) {
        describe('for an invalid ZIP code', function () {
            before(async function () {
                const url = route + invalidQuery;
                response = await request.get(url);
            });

            it('returns a 404 status code', function () {
                expect(response.status).to.equal(404);
            });
        });
    }
}

module.exports = { testRoute };
