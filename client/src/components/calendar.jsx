import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { enGB } from 'date-fns/locale'
import { DateRangePicker, START_DATE, END_DATE } from 'react-nice-dates'
import 'react-nice-dates/build/style.css'
import '../styles/calendar.css';
import moment from 'moment';
const axios = require('axios').default;

const Calendar = (props) => {

  const [startDate, setStartDate] = useState()
  const [endDate, setEndDate] = useState()
  const {price} = props;
  

  const newStartDate = moment(startDate).format("L");
  const newEndDate = moment(endDate).format("L");
  const newStartDate1 = new Date(moment(startDate).format("L"));
  const newEndDate1 = new Date(moment(endDate).format("L"));
  console.log(price)
  console.log('#################')
  console.log(`Start date is ${newStartDate}`)
  console.log(`End date is ${newEndDate}`)
  

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


  for (let i = 0; i < numOfNight; i++){
    let newDate = newStartDate1.addDays(i);
    console.log(newDate)
  }

  const totalprice = (price*numOfNight);
  console.log(price*numOfNight)
  
  const handleChange= (event) =>{
    
    console.log(event.target.value);
  } 

  // const addBooking = async () => {
  //   try {
  //     const response = await axios.put('/update/:id',
  //   {
  //     checkIn: {newStartDate1},
  //     checkOut: {newEndDate1},
  //     totalPrice: {totalprice},
  //     totalNight: {numOfNight},
  //     // user: {req.session.user}
  //   });
  //     this.props.fetchdata();
  //     console.log(response)
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }

  //   const addBookedDates = async () => {
  //     try {
  //       const response = await axios.put('/update/:id',
  //     {
        
  //     });
  //       this.props.fetchdata();
  //       console.log(response)
  //     } catch (err) {
  //       console.log(err)
  //     }
  //   }`

  return (
    <div>
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

      <br></br>
      <br></br>

    <form>
      <input
      type='text'
      value= {newStartDate}
      id='id'
      placeholder='title'
      readOnly={newStartDate}
      />
      <br></br>
      <br></br>

      <input
      type='text'
      value= {newEndDate}
      id='id'
      placeholder='title'
      readOnly={newEndDate}
      />

      <br></br>
      <br></br>


       <input
      type='text'
      value= {numOfNight}
      id='id'
      placeholder='title'
      readOnly={numOfNight}
      />

      <br></br>
      <br></br>

       <input
      type='text'
      value= {totalprice}
      id='id'
      placeholder='title'
      readOnly= {totalprice}
      />
      <br></br>
      <br></br>

      <input
      type='text'
      value= 'user?'
      id='id'
      placeholder='title'
      readOnly='user'
      />
      <br></br>
      <br></br>

      <button type='submit'>Book Now!</button>
    </form>
    
    </div>
    
  )
};

export default Calendar;