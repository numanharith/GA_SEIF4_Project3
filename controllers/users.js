const express = require("express");
const router = express.Router();
const User = require("../models/users");
// const { create } = require('../models/users');

// GET ALL HOTELS (WE ONLY NEED TO DISPLAY HOTELS ON THE MAIN WEBPAGE)
router.get("/", (req, res) => {
  Hotels.find({}, (err, foundHotels) => {
    res.json(foundHotels);
  });
});

// CREATE NEW USERS (This will be hardcoded settled.)
router.post("/", (req, res) => {
  User.create(req.body, (err, createdUser) => {
    res.json(createdUser);
  });
});

module.exports = user;
