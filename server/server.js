const express = require('express');
const expressValidator = require('express-validator');
const bodyParser = require('body-parser');
const cors = require('cors');

// Defines port for Express server.
const PORT = process.env.PORT || 8080;

// Configures CORS options, allowing all origins for test purposes.
const corsOptions = {
    origin: '*'
};

// Initializes and configures Express.
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors(corsOptions));

// Loads environment variables.
require('dotenv').config();

// Loads routes.
require('./app/routes/weather.routes.js')(app);

// Creates default route.
app.get('/', (req, res) => {
    res.json({message: 'Server is running.'});
});

// Starts server.
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
