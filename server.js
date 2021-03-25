// Dependencies
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const db = mongoose.connection;
require('dotenv').config();

// Enviroment variables
const mongoURI = process.env.MONGODB_URI;
const port = process.env.PORT;

// Controllers 
const hotelsController = require('./controllers/hotels');

// ... other imports
const path = require('path');

// Connect to Mongo
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
	console.log(`MongoDB connection established: ${mongoURI}`);
});

// Error / Disconnection
db.on('error', (err) => console.log(`${err.message} is Mongod not running?`));
db.on('disconnected', () => console.log('mongo disconnected'));

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.use('/hotels', hotelsController);

app.get('/', (req, res) => {
  res.status(404).json('Sorry, page does not exist!');
});

app.listen(port, () => {
  console.log(`App is listening on port ${PORT}`)
})