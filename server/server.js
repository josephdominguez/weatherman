const express = require('express');
const expressValidator = require('express-validator');
const cors = require('cors');
const bodyParser = require('body-parser');

// Loads environment variables.
require('dotenv').config();

// Loads MongoDB connection code.
require('./app/models/db.model.js');

// Defines port for Express server.
const PORT = process.env.PORT || 8080;
// Listen on all available network interfaces.
const HOST = '127.0.0.1';

// Configures CORS options, allowing all origins for test purposes.
const corsOptions = {
    origin: '*',
};

// Initializes and configures Express.
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors(corsOptions));

// Loads routes.
require('./app/routes/weather.routes.js')(app);
require('./app/routes/users.routes')(app);

// Creates default route.
app.get('/', (req, res) => {
    res.json({ message: 'Server is running.' });
});

// Starts server.
const server = app.listen(PORT, HOST, () => {
    console.log(`Server is running on port ${HOST}:${PORT}.`);
});

module.exports = server;
