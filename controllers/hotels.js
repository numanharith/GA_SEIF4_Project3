const express = require('express');
const router = express.Router();
const Hotels = require('../models/hotels');
const bcrypt = require("bcrypt");
// const { create } = require('../models/users');

// GET ALL HOTELS (WE ONLY NEED TO DISPLAY HOTELS ON THE MAIN WEBPAGE)
// GET HOTEL FROM ID ON URL
router.get('/:id', (req, res) => {
	Hotels.findById(req.params.id, (err, foundHotels) => {
		res.json(foundHotels);
	});
});

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