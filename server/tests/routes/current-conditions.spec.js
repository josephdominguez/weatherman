const { VALID_ZIP, INVALID_ZIP } = require('../config');
const { testRoute } = require('../test.utils');

describe('GET /current-conditions', function () {
    const route = '/current-conditions/?zipCode=';
    const object = 'currentConditions';
    const properties = [
        'temperatureF',
        'temperatureC',
        'condition',
        'conditionIcon',
        'windMPH',
        'windKPH',
        'city',
        'humidity',
        'dewpointF',
        'dewpointC',
        'visibilityM',
        'visiblityKM',
        'pressureIN',
        'pressureMB',
        'heatIndex',
        'ceiling',        
    ];
    const validQuery = VALID_ZIP;
    const invalidQuery = INVALID_ZIP;
    testRoute(route, object, properties, validQuery, invalidQuery);
});
