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

  // const updateData = async () => {
  //   try {
  //     const response = await axios.put(`/hotels/${this.props.bookmark._id}`, 
  //     {
  //       title: this.state.title,
  //       url: this.state.url,
  //     });
  //     this.props.fetchdata();
  //     console.log(response);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  console.log(`Start date is ${moment(startDate).format("yyyyMMDD")}`);
  // console.log(`Start date is ${moment(startDate).toDate("yyyyMMDD")}`);
  
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
        <div className='date-range'>
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
        </div>
      )}
    </DateRangePicker>
  )
}

export default Calendar;