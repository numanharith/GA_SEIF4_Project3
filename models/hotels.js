const mongoose = require('mongoose');
const hotelSchema = new mongoose.Schema({
  name: String,
  location: String,
  vacancies: Boolean,
  rooms: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Room'
  }]
});
                                  
const Hotels = mongoose.model('Hotel', hotelSchema)

module.exports = Hotels;