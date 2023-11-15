const { VALID_ZIP, INVALID_ZIP } = require('../config');
const { testRoute } = require('../test.utils');

describe('GET /local-forecast', function () {
    const route = '/local-forecast/?zipCode=';
    const object = 'localForecast';
    const properties = [
        'synopsis',
        'shortTerm',
    ];
    const validQuery = VALID_ZIP;
    const invalidQuery = INVALID_ZIP;
    testRoute(route, object, properties, validQuery, invalidQuery);
});
