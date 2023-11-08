const mongoose = require('mongoose');
require('dotenv').config();

// Define the database URL to connect to.
const mongoURL = process.env.MONGODB_URL;
const username = process.env.MONGODB_USERNAME;
const password = process.env.MONGODB_PASSWORD;
const url = `mongodb+srv://${username}:${password}@${mongoURL}?retryWrites=true&w=majority`;

mongoose.connect(url);
mongoose.set('strictQuery', false);

const mongoDB = mongoose.connection;

mongoDB.on('error', (e) => {
  console.log(e);
});

mongoDB.once('connected', () => {
  console.log('Mongo DB connected');
});

module.exports = mongoDB;
