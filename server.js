// Dependencies
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const db = mongoose.connection;
const session = require("express-session");
require("dotenv").config();

// Enviroment variables
const mongoURI = process.env.MONGODB_URI;
const port = process.env.PORT;
const secret = process.env.SECRET;

// Controllers
const hotelsController = require("./controllers/hotels");
const usersController = require("./controllers/users");

// ... other imports
const path = require("path");

// Connect to Mongo
mongoose.connect(
  mongoURI,
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }, // prevent warning from console
  () => {
    console.log(`MongoDB connection established.`);
  }
);

// Error / Disconnection
db.on("error", (err) => console.log(`${err.message} is Mongod not running?`));
db.on("disconnected", () => console.log("mongo disconnected"));

// Middleware
app.use(express.static(path.join(__dirname, "client", "build")));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

/// to create session
app.use(
  session({
    secret: "SECRET",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

// Routes
app.use("/users", usersController);
app.use("/hotels", hotelsController);

// app.get('/', (req, res) => {
//     res.status(404).json('Sorry, page does not exist!');
// });

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}.`);
});
