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
      img: String,
      bookedDates: [],
      bookings: [
        {
          checkIn: Date,
          checkOut: Date,
          totalPrice: Number,
          totalNight: Number,
          user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
          } 
        }
      ]
    }
  ]
});
                                  
const Hotels = mongoose.model('Hotel', hotelSchema)

module.exports = Hotels;


////Get start and end date Eg April 1 to April 4

////Using code to get how many nights from April 1 to April 4 . Ans: 3 nights put in front end?
///Code below from https://www.codegrepper.com/code-examples/javascript/how+to+get+difference+between+two+dates+in+react+js
// const date1 = new Date('7/13/2010');
// const date2 = new Date('12/15/2010');
// console.log(getDifferenceInDays(date1, date2));
// console.log(getDifferenceInHours(date1, date2));
// console.log(getDifferenceInMinutes(date1, date2));
// console.log(getDifferenceInSeconds(date1, date2));

// function getDifferenceInDays(date1, date2) {
//   const diffInMs = Math.abs(date2 - date1);
//   return diffInMs / (1000 * 60 * 60 * 24);
// }

////Update our back end starting from April 1 instead and end in April 3 as April 4 is not considered a night. 
// ^ findandupdate to push date range into bookedDates[] using hotel controller to update

////Loop? 3 night - 1 night because April 1 is already accounted. so April 1 + 1 day till it match 2 nights 

///once booked 1 ,2 ,3 Other users that want to book 2, 3 ,4 not able to do so. we can use find method to find 2,3,4 any match if match means the rooms is not availble.
///using hotel controller get request if the rooms is available

///Total Price
