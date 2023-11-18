const { expect, request, sinon } = require('./config');

/**
 * Test a specific route for valid and invalid inputs.
 *
 * @param {string} route - The route to test.
 * @param {string} object - The expected object in the response.
 * @param {string[]} properties - An array of properties to check within the object.
 * @param {Object} [inputConfig={}] - The input configuration object.
 * @param {string} [inputConfig.inputType=''] - The type of input being tested (e.g., 'ZIP code').
 * @param {string} [inputConfig.validInput=''] - The valid input to use in the request (can be an empty string for no query).
 * @param {string} [inputConfig.invalidInput=''] - The invalid input to use in the request (can be an empty string for no query).
 * @param {Function[]} [additionalTests=[]] - Additional tests to run.
 */
function testRoute(route, object, properties, inputConfig = {}, additionalTests = []) {
    const { inputType = '', validInput = '', invalidInput = '' } = inputConfig;

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
            let response;

            before(async function () {
                const url = route + invalidInput;
                response = await request.get(url);
            });

            it('returns a 404 status code', function () {
                expect(response.status).to.equal(404);
            });
        });
    }

    runAdditionalTests(additionalTests);
}

/**
 * Test a controller function with valid and invalid inputs.
 *
 * @param {Object} controller - The controller object to be tested.
 * @param {string} controllerFunction - The name of the controller function to be tested.
 * @param {string} object - The expected object in the response.
 * @param {Object} [inputConfig={}] - The input configuration object.
 * @param {string} [inputConfig.inputType=''] - The type of input being tested (e.g., 'zip code', 'parameter', etc.).
 * @param {string} [inputConfig.validInput=''] - The valid input to be used in the controller function.
 * @param {string} [inputConfig.invalidInput=''] - The invalid input to be used in the controller function.
 * @param {Function[]} [additionalTests=[]] - Additional tests to run.
 */
function testController(controller, controllerFunction, object, inputConfig = {}, additionalTests = []) {
    const { inputType = '', validInput = '', invalidInput = '' } = inputConfig;

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

    runAdditionalTests(additionalTests);

    afterEach(function () {
        sandbox.restore();
    });
}

/**
 * Test a model function with valid and invalid inputs.
 *
 * @param {Object} model - The model object to be tested.
 * @param {string} modelFunction - The name of the model function to be tested.
 * @param {string} object - The expected object in the response.
 * @param {string[]} properties - An array of properties to check within the object.
 * @param {Object} [inputConfig={}] - The input configuration object.
 * @param {string} inputConfig.inputType - The type of input being tested (e.g., 'zip code', 'parameter', etc.).
 * @param {string} inputConfig.validInput - The valid input to be used in the model function.
 * @param {string} inputConfig.invalidInput - The invalid input to be used in the model function.
 * @param {Function[]} [additionalTests=[]] - Additional tests to run.
 */
function testModel(model, modelFunction, object, properties, inputConfig = {}, additionalTests = []) {
    const { inputType = '', validInput = '', invalidInput = '' } = inputConfig;

    describe(`for valid ${inputType}`, function () {
        let data;

        before(async function () {
            data = await model[modelFunction](validInput);
        });

        it(`returns ${object}`, function () {
            expect(data).to.exist;
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
            it(`throws error for ${inputType}`, async function () {
                try {
                    await model[modelFunction](invalidInput);
                } catch (e) {
                    expect(e).to.be.an.instanceOf(Error);
                }
            });
        });
    }

    runAdditionalTests(additionalTests);
}

/**
 * Run additional tests provided in the input.
 *
 * @param {Function[]} additionalTests - Additional tests to run.
 */
function runAdditionalTests(additionalTests) {
    additionalTests.forEach((testFunction, index) => {
        describe(`Additional Test ${index + 1}`, testFunction);
    });
}

module.exports = { testRoute, testController, testModel };
