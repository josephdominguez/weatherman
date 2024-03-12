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

app.use((req, res, next) => {
    try {
      const token = req.headers.authorization.split(' ')[1];

      // Decode the token to inspect its claims, including 'aud'
      const decodedToken = jwt.verify(token, 'your-secret-key');
      
      // Log the 'aud' claim
      console.log('Token Audience (aud):', decodedToken.aud);
  
      // Continue with the request handling
      next();
    } catch (error) {
      // Handle token verification errors
      console.error('Token Verification Error:', error.message);
      res.status(401).json({ error: 'Unauthorized' });
    }
});

// Creates default route.
app.get('/', (req, res) => {
    res.json({ message: 'Server is running.' });
});

// Starts server.
const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

module.exports = server;
