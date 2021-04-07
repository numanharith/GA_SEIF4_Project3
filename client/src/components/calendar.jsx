import React, { useState } from 'react'
import { enGB } from 'date-fns/locale'
import { DateRangePicker, START_DATE, END_DATE } from 'react-nice-dates'
import 'react-nice-dates/build/style.css'
import '../styles/calendar.css';
import moment from 'moment';
const axios = require('axios').default;

function Calendar() {
  const [startDate, setStartDate] = useState()
  const [endDate, setEndDate] = useState()

  const newStartDate = moment(startDate).format("L");
  const newEndDate = moment(endDate).format("L");
  const newStartDate1 = new Date(moment(startDate).format("L"));
  const newEndDate1 = new Date(moment(endDate).format("L"));
  console.log(`Start date is ${newStartDate}`)
  console.log(`End date is ${newEndDate}`)
  

  ////formula for num of night
  function getDifferenceInDays(date1, date2) {
  const diffInMs = Math.abs(date2 - date1);
  return diffInMs / (1000 * 60 * 60 * 24);
}

const numOfNight = getDifferenceInDays(newStartDate1, newEndDate1);
console.log(numOfNight);

Date.prototype.addDays = function (days) {
  const date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
};


for (let i = 0; i < numOfNight; i++){
  let newDate = newStartDate1.addDays(i);
  console.log(newDate)
}
// console.log(getDifferenceInDays(date1, date2));

  

  // const newEndDate = ${moment(endDate.format("yyyyMMDD"))}
  // const totalNight = ${moment(startDate.format("yyyyMMDD"))} /// need find out

  // const updateData = async () => {
  //   try {
  //     const response = await axios.put(`/hotels/update/${this.props.hotel._id}`, 
  //     {
  //       checkIn: newStartDate
  //       checkOut: newEndDate,
  //       totalPrice: this.state.title,
  //       totalNight: this.state.title,
  //       user: this.state.title, //// need to check again
  //     });
  //     this.props.fetchdata();
  //     console.log(response);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

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


  // console.log(`Start date is ${moment(startDate).format("yyyyMMDD")}`);
  // console.log(`Start date is ${moment(startDate).toDate("yyyyMMDD")}`);
  
  
  const handleChange= (event) =>{
    
    console.log(event.target.value);
  } 

  return (
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
  )
}

export default Calendar;