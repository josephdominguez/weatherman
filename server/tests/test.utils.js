const { expect, request, sinon } = require('./config');

/**
 * Test a specific route for valid and invalid inputs.
 *
 * @param {string} route - The route to test.
 * @param {string} object - The expected object in the response.
 * @param {string[]} properties - An array of properties to check within the object.
 * @param {string} [inputType=''] - The type of input being tested (e.g., 'ZIP code').
 * @param {string} [validInput=''] - The valid input to use in the request (can be empty string for no query).
 * @param {string} [invalidInput=''] - The invalid input to use in the request (can be empty string for no query).
 */
function testRoute(route, object, properties, inputType='', validInput='', invalidInput='') {
    describe(`for valid ${inputType}`, function () {
        let response;
        let data;

        before(async function () {
            const url = validInput ? route + validInput : route;
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

    if (invalidInput) {
        describe(`for invalid ${inputType}`, function () {
            before(async function () {
                const url = route + invalidInput;
                response = await request.get(url);
            });

            it('returns a 404 status code', function () {
                expect(response.status).to.equal(404);
            });
        });
    }
}

/**
 * Test a controller function with valid and invalid inputs.
 *
 * @param {Object} controller - The controller object to be tested.
 * @param {string} controllerFunction - The name of the controller function to be tested.
 * @param {string} object - The expected object type in the response.
 * @param {string[]} properties - An array of properties to check within the object.
 * @param {string} [inputType=''] - The type of input being tested (e.g., 'zip code', 'parameter', etc.).
 * @param {string} [validInput=''] - The valid input to be used in the controller function.
 * @param {string} [invalidInput=''] - The invalid input to be used in the controller function.
 */
function testController(controller, controllerFunction, object, inputType='', validInput='', invalidInput='') {
    let req, res, json, sandbox;
    sandbox = sinon.createSandbox();
    res = {
        json: (data) => {
            json = data;
        },
        status: sandbox.stub().returnsThis(),
    };

    describe(`for valid ${inputType}`, function () {
        before(async function () {
            req = { query: { zipCode: validInput } };
            await controller[controllerFunction](req, res);
        });

        it(`returns ${object}`, function () {
            expect(json).to.have.property(object);
        });
    });

    if (invalidInput) {
        describe(`for invalid ${inputType}`, function () {
            before(async function () {
                req = { query: { zipCode: invalidInput } };
                try {
                    await controller[controllerFunction](req, res);
                } catch (e) {
                    expect(e).to.be.an.instanceOf(Error);
                }
            });

            it('throws error', function () {
                expect(res.status.calledWith(404)).to.be.true;
                expect(json).to.have.property('message');
            });
        });
    }

    afterEach(function () {
        sandbox.restore();
    });
}

/**
 * Test a model function with valid and invalid inputs.
 *
 * @param {Object} model - The model object to be tested.
 * @param {string} modelFunction - The name of the model function to be tested.
 * @param {string} object - The expected object type in the response.
 * @param {string[]} properties - An array of properties to check within the object.
 * @param {string} validInput - The valid input to be used in the model function.
 * @param {string} invalidInput - The invalid input to be used in the model function.
 */
function testModel(model, modelFunction, object, properties, inputType='', validInput='', invalidInput='') {
    describe(`for valid ${inputType}`, function () {
        let data;

        before(async function () {
            data = await model[modelFunction](validInput);
        });

        it(`returns ${object}`, function () {
            expect(data).to.exist;
        });

        for (const prop of properties) {
            it(`has a ${prop} property`, function () {
                expect(data).to.have.property(prop);
            });
        }
    });

    if (invalidInput) {
        describe(`for invalid ${inputType}`, function () {
            it(`throws error for ${inputType}`, async function () {
                try {
                    await model[modelFunction](invalidInput);
                } catch (e) {
                    expect(e).to.be.an.instanceOf(Error);
                }
            });
        });
    }
}

module.exports = { testRoute, testController, testModel };
