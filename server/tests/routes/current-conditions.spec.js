const { VALID_ZIP, INVALID_ZIP } = require('../config');
const { testRoute } = require('../test.utils');

describe('GET /current-conditions', function () {
    const route = '/current-conditions/?zipCode=';
    const object = 'currentConditions';
    const properties = [
        'temperature',
        'condition',
        'conditionIcon',
        'wind',
        'city',
        'humidity',
        'dewpoint',
        'visibility',
        'pressure',
        'heatIndex',
        'ceiling',
    ];
    const validQuery = VALID_ZIP;
    const invalidQuery = INVALID_ZIP;
    testRoute(route, object, properties, validQuery, invalidQuery);
});