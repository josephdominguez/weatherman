const { request, expect, VALID_ZIP, INVALID_ZIP } = require("../config");

describe("GET /location", function () {
    let response;
    let location;

    describe("for a valid ZIP code", function () {
        before(async function () {
            response = await request.get(`/location/?zipCode=${VALID_ZIP}`);
            location = response.body.location;
        });

        it("returns a 200 status code", function () {
            expect(response.status).to.equal(200);
        });

        it("returns location data", function () {
            expect(response.status).to.equal(200);
            expect(response.body).to.have.property("location");
        });

        it("has a city property", function () {
            expect(location).to.have.property("city").to.equal("Sandy");
        });
        it("has a zip code property", function () {
            expect(location).to.have.property("zipCode").to.equal(VALID_ZIP);
        });
        it("has a latitude property", function () {
            expect(location).to.have.property("lat").to.equal(40);
        });
        it("has a longitude property", function () {
            expect(location).to.have.property("lon").to.equal(-111);
        });
    });

    describe("for an invalid ZIP code", function () {
        before(async function () {
            response = await request.get(`/location/?zipCode=${INVALID_ZIP}`);
        });

        it("returns a 404 status code", function () {
            expect(response.status).to.equal(404);
            expect(response.body)
                .to.have.property("message")
                .to.equal("Invalid ZIP code.");
        });
    });
});
