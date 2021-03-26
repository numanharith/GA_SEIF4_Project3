const mongoose = require('mongoose');

const roomSchema = mongoose.Schema({
  roomNumber: Number,
  size: String,
  bookedDate: [{
    date: Date,
    booked: Boolean,
    bookedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  }],
  price: Number,
})

const Rooms = mongoose.model('Room', roomSchema)

module.exports = rooms;