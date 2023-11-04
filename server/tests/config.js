const server = require("../server");
const supertest = require("supertest");

// Defines needed modules.
const request = supertest(server);
const expect = require('chai').expect;

// Defines valid zip code (Sandy, UT) and invalid zip code.
const VALID_ZIP = '84093';
const INVALID_ZIP = '00000';

// Defines valid and invalid location objects.
const VALID_LOCATION = {
    'city': 'Sandy',
    'zipCode': '84093',
    'station': 'SLC',
    'lat': 40,
    'lon': -111,
}
const INVALID_LOCATION = {
    'city': '',
    'zipCode': '00000',
    'station': 'XXX',
    'lat': 999,
    'lon': 999,
}

module.exports = {
    request,
    expect,
    VALID_ZIP,
    INVALID_ZIP,
    VALID_LOCATION,
    INVALID_LOCATION,
};
