import React, { useState } from 'react'
import { enGB } from 'date-fns/locale'
import { DateRangePicker, START_DATE, END_DATE } from 'react-nice-dates'
import 'react-nice-dates/build/style.css'
import '../styles/calendar.css';

function Calendar() {
  const [startDate, setStartDate] = useState()
  const [endDate, setEndDate] = useState()
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
            placeholder='Check-in Date'
          />
          <span className='date-range_arrow' />
          <input
            className={'input' + (focus === END_DATE ? ' -focused' : '')}
            {...endDateInputProps}
            placeholder='Check-out Date'
          />
        </div>
      )}
    </DateRangePicker>
  )
}

export default Calendar;

// import React, { useState } from 'react';
// import { format } from 'date-fns';
// import { enGB } from 'date-fns/locale';
// import { DateRangePickerCalendar, START_DATE } from 'react-nice-dates';
// import 'react-nice-dates/build/style.css';
// import '../styles/calendar.css';

// const Calendar = () => {
//   const [checkInDate, setCheckInDate] = useState();
//   const [checkOutDate, setCheckOutDate] = useState();
//   const [focus, setFocus] = useState(START_DATE);
//   const handleFocusChange = (newFocus) => {
//     setFocus(newFocus || START_DATE);
//   };
//   return (
//     <div className='calendar'>
//       <p>
//         Check-in Date:{' '}
//         {checkInDate
//           ? format(checkInDate, 'dd MMM yyyy', { locale: enGB })
//           : 'none'}
//         .
//       </p>
//       {/* moment().format('L');  05/04/2021  Need to formate to DD/MM/YYYY for backend */}
//       {/* use switch case to join to DD/MM/YYYY Eg 4 Apr 2021, if Apr = 4. So 12 months have to put as switch case */}
//       <p>
//         Check-out Date:{' '}
//         {checkOutDate ? format(checkOutDate, 'dd MMM yyyy', { locale: enGB }) : 'none'}.
//       </p>
//       <p>Currently selecting: {focus}</p>
//       <DateRangePickerCalendar
//         checkInDate={checkInDate}
//         checkOutDate={checkOutDate}
//         focus={focus}
//         onCheckInDateChange={setCheckInDate}
//         onCheckOutDateChange={setCheckOutDate}
//         onFocusChange={handleFocusChange}
//         locale={enGB}
//       />
//     </div>
//   );
// };

// export default Calendar;