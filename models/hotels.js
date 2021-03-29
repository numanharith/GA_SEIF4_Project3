const mongoose = require('mongoose');
const hotelSchema = new mongoose.Schema({
  name: String,
  location: String,
  img: String,
  rooms: [
    {
      size: String,
      price: Number,
      roomNumber: Number,
      dates: [ 
        {
          date: Date,
          slot: {
            booked: Boolean,
            user: {
              type: mongoose.Schema.Types.ObjectId,
              ref: 'User'
            }
          }
        }
      ]
    }
  ]
});
                                  
const Hotels = mongoose.model('Hotel', hotelSchema)

module.exports = Hotels;