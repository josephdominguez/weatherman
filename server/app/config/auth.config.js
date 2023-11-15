const { auth } = require('express-oauth2-jwt-bearer');
require('dotenv').config();

// Configures Auth0 options.
const checkJwt = auth({
    audience: process.env.AUTH0_AUDIENCE,
    issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL,
});

module.exports = checkJwt;
