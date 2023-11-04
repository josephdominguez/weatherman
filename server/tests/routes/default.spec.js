const { request, expect } = require('../config');

describe('GET / (default route)', function() {
    it('returns a 200 status code', async function() {
        const response = await request.get('/');
        expect(response.status).to.equal(200);
    });
});
