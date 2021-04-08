const express = require("express");
const router = express.Router();
const Hotels = require("../models/hotels");
const bcrypt = require("bcrypt");
// const { create } = require('../models/users');

// GET HOTEL FROM ID ON URL
router.get("/:id", (req, res) => {
  Hotels.findById(req.params.id, (err, foundHotel) => {
    res.json(foundHotel);
  });
});

// GET ROOM FROM ID ON URL
// router.get('/:hotelid/:roomid', (req, res) => {
// 	Hotels.findById(req.params.hotelid, (err, foundHotel) => {
// 		foundHotel.find({}, (err, foundRoom) => {
// 			res.json(foundRoom);
// 		});
// 	});
// });

// GET ALL HOTELS (WE ONLY NEED TO DISPLAY HOTELS ON THE MAIN WEBPAGE)
router.get("/", (req, res) => {
  Hotels.find({}, (err, foundHotels) => {
    res.json(foundHotels);
  });
});

// CREATE NEW HOTEL (This will be hardcoded)
router.post("/", (req, res) => {
  Hotels.create(req.body, (err, createdHotel) => {
    res.json(createdHotel);
  });
});

// CREATE BOOKING - create new booking by updating current hotel data
router.put("/:id", (req, res) => {
  // Hotels.findOneAndUpdate(
  //   { _id: req.params.id },
  //   {
  //     $push: {
  //       "rooms.0.bookings": {
  //         checkIn: "hello",
  //       },
  //     },
  //   },
  //   (err, newBooking) => res.json(newBooking)
  // );

  Hotels.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updated) => {
      res.json(updated);
    }
  );
});

///find and update to push

///get request to see if hotel is available. once get bring to front end and compare? how to input dates to compare?
router.get("/findDate", (req, res) => {
  Hotels.find({ bookedDates: dates }, (err, dates) => {
    res.json(dates);
  });
});

///Update booking - actually this can be same as our create booking above right? -cyn
router.put("/:hotelid/:bookingid/", (req, res) => {
  Hotels.findByIdAndUpdate(
    req.params.hotelid,
    req.body,
    { new: true },
    (err, updateDates) => {
      res.json(updateDates);
    }
  );
});

// Hotels.findById(id, (err, hotel) => {
//   let room = hotel.rooms.find(
//     (room) => room._id.toString() == req.params.roomId
//   );
//   room.bookings.push(object_to_be_push);
//   room.bookedDates.push(object_to_be_push);
//   room.save();
// });

router.delete("/:hotelid/:bookingid", (req, res) => {
  Hotels.findByIdAndUpdate(
    req.params.hotelid,
    {
      $pull: {
        "rooms.0.bookings": { _id: req.params.bookingid },
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

// PUSH BOOKINGS AND BOOKEDDATES
Hotels.findById(id, (err, hotel) => {
  let room = hotel.rooms.find(
    (room) => room._id.toString() == req.params.roomId
  );
  room.bookings.push(object_to_be_push);
  room.bookedDates.push(object_to_be_push);
  room.save();
});

///////Update bookingdates
// router.put("/update/:id", (req, res) => {
// Hotels.findByIdAndUpdate(
// 	req.params.hotelid,
// 	{
// 		$push: {
// 			bookedDates:
// 		}
// 	}
//   req.params.id,
//     req.body,
//     { new: true },
//     (err, updateDates) => {
//       res.json(updateDates);
//     };
// });

// EDIT HOTEL (This will also be hardcoded as an API)
// router.put('/:id', (req, res) => {
// 	Hotels.findByIdAndUpdate(
// 		req.params.id,
// 		req.body,
// 		{ new: true },
// 		(err, updatedHotel) => {
// 			res.json(updatedHotel);
// 		}
// 	);
// });

// DELETE HOTEL (This will also be hardcoded as an API)
// router.delete('/:id', (req, res) => {
// 	Hotels.findByIdAndRemove(req.params.id, (err, deletedHotel) => {
// 		res.json(deletedHotel);
// 	});
// });

module.exports = router;

// router.delete("/:hotelid/:bookingid", (req, res) => {
//   Hotels.findByIdAndUpdate(
//     req.params.hotelid,
//     {
//       $pull: {
//         "rooms.0.bookings": { _id: req.params.bookingid },
//       },
//     },
//     { new: true },
//     function (err, deletedBooking) {
//       if (err) {
//         return res.json(err);
//       } else {
//         return res.json(deletedBooking);
//       }
//     }
//   );
// });

// need to put this in user profile to delete booking
// need to test if this works
// <button onClick={deleteBooking}>
// const deleteBooking = async (hotelid, id) => {
//   try {
//     const response = await axios.delete(`/:${hotelid}/${bookingid}`);
//     //console.log(response);
//   } catch (err) {
//     console.log(err);
//   }
// };
