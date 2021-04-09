import React, { useState } from 'react';
import { DateRangePicker, START_DATE, END_DATE } from 'react-nice-dates';
import 'react-nice-dates/build/style.css';
import '../styles/calendar.css';
import { enGB } from 'date-fns/locale';
import moment from 'moment';
const axios = require('axios');

const Calendar = (props) => {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const { price } = props;
  const newStartDate = moment(startDate).format('L');
  const newEndDate = moment(endDate).format('L');
  const newStartDate1 = new Date(moment(startDate).format('L'));
  const newEndDate1 = new Date(moment(endDate).format('L'));

  ////formula for num of night
  function getDifferenceInDays(date1, date2) {
    const diffInMs = Math.abs(date2 - date1);
    return diffInMs / (1000 * 60 * 60 * 24);
  }

  const numOfNight = getDifferenceInDays(newStartDate1, newEndDate1);
  console.log(numOfNight);

  ///function for adding days
  Date.prototype.addDays = function (days) {
    const date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
  };

  let bookingDates = [];
  for (let i = 0; i < numOfNight; i++) {
    let newDate = newStartDate1.addDays(i);
    bookingDates.push(moment(newDate).format('L'));

    console.log('this is booking dates: ' + bookingDates);
  }

  const totalPrice = price * numOfNight;
  console.log(price * numOfNight);

  const handleChange = (event) => {
    console.log(event.target.value);
  };

  const addBooking = async () => {
    try {
      await axios.put(`/hotels/${props.hotelId}/${props.roomId}`, {
        checkIn: newStartDate,
        checkOut: newEndDate,
        totalPrice: totalPrice,
        totalNight: numOfNight,
        bookedDates: bookingDates,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addBooking();
    alert('Your booking has been confirmed!');
    window.location.reload(true);
  };

  return (
    <div>
      <div className='datePicker'>
        <DateRangePicker
          startDate={startDate}
          endDate={endDate}
          onStartDateChange={setStartDate}
          onEndDateChange={setEndDate}
          minimumDate={new Date()}
          minimumLength={1}
          format='dd MMM yyyy'
          locale={enGB}
        >
          {({ startDateInputProps, endDateInputProps, focus }) => (
            <form className='date-range'>
              <input
                className={'input' + (focus === START_DATE ? ' -focused' : '')}
                {...startDateInputProps}
                placeholder='Start date'
              />

              <span className='date-range_arrow' />
              <input
                className={'input' + (focus === END_DATE ? ' -focused' : '')}
                {...endDateInputProps}
                placeholder='End date'
              />
            </form>
          )}
        </DateRangePicker>
      </div>

      <br></br>
      <br></br>
      <div className='bookingSummary'>
        <h3>Booking Summary</h3>
        <form onSubmit={handleSubmit}>
          <h6>Check In Date:</h6>
          <input
            type='text'
            value={newStartDate}
            id='checkIn'
            placeholder='title'
            readOnly
            onChange={handleChange}
          />

          <br></br>
          <br></br>

          <h6>Check Out Date:</h6>
          <input
            type='text'
            value={newEndDate}
            id='checkOut'
            placeholder='title'
            readOnly
            onChange={handleChange}
          />

          <br></br>
          <br></br>

          <h6>Total Nights:</h6>
          <input
            type='text'
            value={numOfNight}
            id='totalNight'
            placeholder='title'
            readOnly
            onChange={handleChange}
          />

          <br></br>
          <br></br>

          <h6>Total Price (SGD):</h6>
          <input
            type='text'
            value={totalPrice}
            id='totalPrice'
            placeholder='title'
            readOnly
            onChange={handleChange}
          />
          <br></br>
          <br></br>

          <button type='submit'>Book Now!</button>
        </form>
      </div>
    </div>
  );
};

export default Calendar;