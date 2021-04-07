const express = require("express");
const router = express.Router();
const User = require("../models/users");
const bcrypt = require("bcryptjs");
// const { create } = require('../models/users');

// GET ALL HOTELS (WE ONLY NEED TO DISPLAY HOTELS ON THE MAIN WEBPAGE)
//Temporary disable
router.get("/", (req, res) => {
  User.find({}, (err, foundUsers) => {
    res.json(foundUsers);
  });
});

// CREATE NEW USERS (This will be hardcoded settled.)
//Temporary disable
// router.post("/", (req, res) => {
//   req.body.password = bcrypt.hashSync(
//     req.body.password,
//     bcrypt.genSaltSync(10)
//   );
//   User.create(req.body, (err, createdUser) => {
//     res.json(createdUser);
//   });
// });

router.post("/signin", async (req, res) => {
  // console.log(req.body);
  const { username, password } = req.body;
  const user = await User.findUser(username, password);
  if (user) {
    req.session.user = user._id; /// for storing session
    console.log("User ID is: ");
    res.json({
      message: "you are successfully login",
      auth: true,
    });
  } else {
    res.json({
      message: "login unsucessful",
      auth: false,
    });
  }
  // console.log(user);
});
router.post("/signup", (req, res) => {
  const user = new User(req.body);
  req.session.user = user._id; /// for storing session
  user
    .save()
    .then((result) => {
      res.json({
        message: "successfully created user",
        auth: true,
      });
    })
    .catch((err) => {
      res.json({
        message: "unable to create account",
        auth: false,
      });
    });
});

///for checking login in backend
///use postman signin once true go to below url to use get request will see auth: true
router.get("/hassignned", (req, res) => {
  if (req.session.user) {
    return res.json({
      auth: true,
      message: "you are sign in",
    });
  }
  return res.json({
    auth: false,
    message: "you are not login",
  });
});

router.get("/signout", (req, res) => {
  req.session.destroy();
  res.json({
    auth: false,
  });
});

module.exports = router;
