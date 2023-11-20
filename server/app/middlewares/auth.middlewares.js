const { auth } = require('express-oauth2-jwt-bearer');
require('dotenv').config();

// Configures Auth0 options.
const checkJwt = auth({
    audience: process.env.AUTH0_AUDIENCE,
    issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL,
});

const verifySub = (subFromRequest, subFromToken, res, next) => {
    if (subFromRequest !== subFromToken) {
        return res.status(403).json({ message: 'Unauthorized' });
    }
    next();
};

const verifySubInQuery = (req, res, next) => {
    const subFromQuery = req.query.sub;
    const subFromToken = req.auth.payload.sub;
    verifySub(subFromQuery, subFromToken, res, next);
};

const verifySubInBody = (req, res, next) => {
    const subFromBody = req.body.sub;
    const subFromToken = req.auth.payload.sub
    verifySub(subFromBody, subFromToken, res, next);
};

module.exports = { checkJwt, verifySubInQuery, verifySubInBody };
