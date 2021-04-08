const express = require('express');
const router = express.Router();
const Hotels = require('../models/hotels');
const bcrypt = require('bcrypt');
// const { create } = require('../models/users');

// GET HOTEL FROM ID ON URL
router.get('/:id', (req, res) => {
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

// EDIT HOTEL (This will also be hardcoded as an API)
// router.put('/:id', (req, res) => {
//     Hotels.findByIdAndUpdate(
//         req.params.id,
//         req.body,
//         { new: true },
//         (err, updatedHotel) => {
//             res.json(updatedHotel);
//         },
//     );
// });

// DELETE HOTEL (This will also be hardcoded as an API)
// router.delete('/:id', (req, res) => {
//     Hotels.findByIdAndRemove(req.params.id, (err, deletedHotel) => {
//         res.json(deletedHotel);
//     });
// });

///find and update to push
///get request to see if hotel is available. once get bring to front end and compare? how to input dates to compare?
// router.get('/findDate', (req, res) => {
//     Hotels.find({ bookedDates: dates }, (err, dates) => {
//         res.json(dates);
//     });
// });

///Update dates and booking need see code again.account
// router.put('/update/:id', (req, res) => {
//     Hotels.findByIdAndUpdate(
//         req.params.id,
//         req.body,
//         { new: true },
//         (err, updateDates) => {
//             res.json(updateDates);
//         },
//     );
// });

// need to put this in user profile to delete booking
// need to test if this works
// <button onClick={deleteBooking}>
const deleteBooking = async (hotelid, id) => {
    try {
        const response = await axios.delete(`/:${hotelid}/${bookingid}`);
        //console.log(response);
    } catch (err) {
        console.log(err);
    }
};

// DELETE ROOM BOOKING -
router.delete('/:hotelid/:bookingid', (req, res) => {
    Hotels.findByIdAndUpdate(
        req.params.hotelid,
        {
            $pull: {
                'rooms.0.bookings': { _id: req.params.bookingid },
            },
        },
        { new: true },
        function (err, deletedBooking) {
            if (err) {
                return res.json(err);
            } else {
                return res.json(deletedBooking);
            }
        },
    );
});

module.exports = router;
