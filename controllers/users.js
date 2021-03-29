const express = require("express");
const router = express.Router();
const User = require("../models/users");
const bcrypt = require("bcrypt");
// const { create } = require('../models/users');

// GET ALL HOTELS (WE ONLY NEED TO DISPLAY HOTELS ON THE MAIN WEBPAGE)
router.get("/", (req, res) => {
  User.find({}, (err, foundUsers) => {
    res.json(foundUsers);
  });
});

// CREATE NEW USERS (This will be hardcoded settled.)
router.post("/", (req, res) => {
  req.body.password = bcrypt.hashSync(
    req.body.password,
    bcrypt.genSaltSync(10)
  );
  User.create(req.body, (err, createdUser) => {
    res.json(createdUser);
  });
});

module.exports = router;
