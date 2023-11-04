const server = require("../server");
const supertest = require("supertest");

// Defines needed modules.
const request = supertest(server);
const expect = require("chai").expect;

// Defines valid zip code (Sandy, UT) and invalid zip code.
const VALID_ZIP = "84093";
const INVALID_ZIP = "00000";

module.exports = {
    request,
    expect,
    VALID_ZIP,
    INVALID_ZIP,
};
