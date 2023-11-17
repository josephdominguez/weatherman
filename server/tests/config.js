const server = require('../server');
const supertest = require('supertest');

// Defines needed modules.
const request = supertest(server);
const expect = require('chai').expect;
const sinon = require('sinon');

// Defines valid zip code (Sandy, UT) and invalid zip code.
const VALID_ZIP = '84093';
const INVALID_ZIP = '00000';

// Defines valid and invalid location objects.
const VALID_LOCATION = {
    city: 'Sandy',
    zipCode: '84093',
    station: 'SLC',
    lat: 40,
    lon: -111,
};
const INVALID_LOCATION = {
    city: '',
    zipCode: '00000',
    station: 'XXX',
    lat: 999,
    lon: 999,
};

// Defines valid and invalid user subs.
const VALID_SUB = 'auth0|6556bdec7a26fffbd5e8d13d';
const INVALID_SUB = '';

// Defines valid and invalid users.
const VALID_USER = {
    _id: '6556bdfb94fc12b9627e575c',
    sub: 'auth0|6556bdec7a26fffbd5e8d13d',
    email: 'theweathermantest@mail.com',
    savedLocations: ['47579'],
    unitPreference: 'imperial',
    __v: 1,
};

const INVALID_USER = {
    _id: '6556bdfb94fc12b9627e575c',
    sub: '', // Missing sub
    email: 'theweathermantestmail.com', // Invalid email
    savedLocations: ['XXXXX'], // Invalid ZIP code
    unitPreference: 'kelvin', // Invalid unit preference
    __v: 1,
};

module.exports = {
    request,
    expect,
    sinon,
    VALID_ZIP,
    INVALID_ZIP,
    VALID_LOCATION,
    INVALID_LOCATION,
    VALID_SUB,
    INVALID_SUB,
    VALID_USER,
    INVALID_USER,
};
