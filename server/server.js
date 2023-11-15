const express = require('express');
const session = require('express-session');
const expressValidator = require('express-validator');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');

// Loads environment variables.
require('dotenv').config();

// Loads MongoDB connection code.
require('./app/models/db.model.js');

// Loads Passport/Auth0 configuration.
require('./app/config/passport.config.js');

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
app.use(
    session({
        secret: 'some-secret',
        resave: true,
        saveUninitialized: true,
    })
);
app.use(passport.initialize());

// Loads routes.
require('./app/routes/weather.routes.js')(app);
require('./app/routes/users.routes')(app);

// Creates default route.
app.get('/', (req, res) => {
    res.json({ message: 'Server is running.' });
});

// Starts server.
const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

module.exports = server;
