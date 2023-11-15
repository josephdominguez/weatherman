const { VALID_ZIP, INVALID_ZIP } = require('../config');
const { testRoute } = require('../test.utils');

describe('GET /location', function () {
    const route = '/location/?zipCode=';
    const object = 'location';
    const properties = ['city', 'zipCode', 'lat', 'lon'];
    const validQuery = VALID_ZIP;
    const invalidQuery = INVALID_ZIP;
    testRoute(route, object, properties, validQuery, invalidQuery);
});
