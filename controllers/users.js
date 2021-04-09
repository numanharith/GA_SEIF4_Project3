const express = require('express');
const router = express.Router();
const User = require('../models/users');
const bcrypt = require('bcryptjs');

// GET ALL HOTELS (WE ONLY NEED TO DISPLAY HOTELS ON THE MAIN WEBPAGE)
//Temporary disable
router.get('/', (req, res) => {
  User.find({}, (err, foundUsers) => {
    res.json(foundUsers);
  });
});

router.delete('/profile/:userid/:bookingId', (req, res) => {
  User.findByIdAndUpdate(
    req.params.userid,
    {
      $pull: {
        'bookings': { _id: req.params.bookingId },
      },
    },
    { new: true },
    function (err, deletedBooking) {
      if (err) {
        return res.json(err);
      } else {
        return res.json(deletedBooking);
      }
    }
  );
});


// Retreive user's session data
router.get('/profile', async (req, res) => {
  let userid = req.session.user._id;
  res.json(userid);
});

// Get user details for the User's profile page
router.get('/profile/:userid', (req, res) => {
  User.findById(req.params.userid, (err, foundUser) => {
    res.json(foundUser);
  });
});

router.post('/signin', async (req, res) => {
  // console.log(req.body);
  const { username, password } = req.body;
  const user = await User.findUser(username, password);
  if (user) {
    req.session.user = user; // for storing session
    res.json({
      message: 'you are successfully login',
      auth: true,
      user,
    });
  } else {
    res.json({
      message: 'login unsucessful',
      auth: false,
    });
  }
});

router.post('/signup', (req, res) => {
  const user = new User(req.body);
  req.session.user = user; /// for storing session
  user
    .save()
    .then((result) => {
      res.json({
        message: 'successfully created user',
        auth: true,
      });
    })
    .catch((err) => {
      res.json({
        message: 'unable to create account',
        auth: false,
      });
    });
});

///for checking login in backend
///use postman signin once true go to below url to use get request will see auth: true
router.get('/hassignned', (req, res) => {
  if (req.session.user) {
    return res.json({
      auth: true,
      message: 'you are sign in',
    });
  }
  return res.json({
    auth: false,
    message: 'you are not login',
  });
});

router.get('/signout', (req, res) => {
  req.session.destroy();
  res.json({
    auth: false,
  });
});




// CREATE NEW USERS 
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

module.exports = router;
