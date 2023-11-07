const express = require('express');
const expressValidator = require('express-validator');
const bodyParser = require('body-parser');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');
const cors = require('cors');

// Loads environment variables.
require('dotenv').config();

// Defines port for Express server.
const PORT = process.env.PORT || 8080;

// Configures CORS options, allowing all origins for test purposes.
const corsOptions = {
    origin: '*',
};

// Initializes and configures Express.
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors(corsOptions));

// Passport/Auth0 configuration.
const strategy = new Auth0Strategy(
    {
        domain: process.env.AUTH0_DOMAIN,
        clientID: process.env.AUTH0_CLIENT_ID,
        clientSecret: process.env.AUTH0_CLIENT_SECRET,
        callbackURL: process.env.AUTH0_CALLBACK_URL,
    },
    function (accessToken, refreshToken, extraParams, profile, done) {
        /**
         * Access tokens are used to authorize users to an API
         * (resource server)
         * accessToken is the token to call the Auth0 API
         * or a secured third-party API
         * extraParams.id_token has the JSON Web Token
         * profile has all the information from the user
         */
        return done(null, profile);
    }
);
passport.use(strategy);
app.use(passport.initialize());

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});

// Loads routes.
require('./app/routes/weather.routes.js')(app);

// Creates default route.
app.get('/', (req, res) => {
    res.json({ message: 'Server is running.' });
});

// Starts server.
const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

module.exports = server;
