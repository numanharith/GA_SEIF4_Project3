const express = require('express');
const router = express.Router();
const Hotels = require('../models/hotels');
const Users = require('../models/users');
const bcrypt = require('bcrypt');



// GET ALL HOTELS (WE ONLY NEED TO DISPLAY HOTELS ON THE MAIN WEBPAGE)
router.get('/', (req, res) => {
  Hotels.find({}, (err, foundHotels) => {
    res.json(foundHotels);
  });
});

// CREATE NEW HOTEL (This will be hardcoded)
router.post('/', (req, res) => {
  Hotels.create(req.body, (err, createdHotel) => {
    res.json(createdHotel);
  });
});

// GET HOTEL FROM ID ON URL
router.get('/:id', (req, res) => {
  Hotels.findById(req.params.id, (err, foundHotel) => {
    res.json(foundHotel);
  });
});

// EDIT HOTEL (This will also be hardcoded as an API)
router.put('/:id', (req, res) => {
  Hotels.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedHotel) => {
      res.json(updatedHotel);
    }
  );
});

// DELETE HOTEL (This will also be hardcoded as an API)
router.delete('/:id', (req, res) => {
  Hotels.findByIdAndRemove(req.params.id, (err, deletedHotel) => {
    res.json(deletedHotel);
  });
});

///get request to see if hotel is available. once get bring to front end and compare? how to input dates to compare?
router.get('/findDate', (req, res) => {
  Hotels.find({ bookedDates: dates }, (err, dates) => {
    res.json(dates);
  });
});

// Middleware to ensure that session contains a logged in user
const requireAuth = (req, res, next) => {
  const { user } = req.session;
  if (!user) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  next();
};

// Update booking - actually this can be same as our create booking above right? -cyn
router.put('/:hotelid/:roomid/', requireAuth, async (req, res) => {
  try {
    let { user } = req.session;
    let bookedHotelName;
    let bookedRoomSize;
    let bookedRoomNumber;
    await Hotels.findById(req.params.hotelid, (err, foundHotel) => {
      bookedHotelName = foundHotel.name;
      let bookedRoom = foundHotel.rooms.find(
        (room) => room.id === req.params.roomid
      );
      bookedRoomSize = bookedRoom.size;
      bookedRoomNumber = parseInt(bookedRoom.roomNumber);
    });
    await Hotels.findOneAndUpdate(
      { 'rooms._id': req.params.roomid },
      {
        $push: {
          'rooms.$.bookings': Object.assign(req.body, { user: user._id }),
          'rooms.$.bookedDates': { $each: req.body.bookedDates },
        },
      }
    );
    await Users.findByIdAndUpdate(user._id, {
      $push: {
        bookings: Object.assign(req.body, {
          hotel: bookedHotelName,
          roomSize: bookedRoomSize,
          roomNumber: bookedRoomNumber,
        }),
      },
    });
    res.status(200).json(req.body);
  } catch (e) {}
});

module.exports = router;