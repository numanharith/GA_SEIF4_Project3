import React from 'react';
import TopNav from '../components/TopNav';
import Calendar from '../components/calendar';


const BookingPage = () => {
  return (
    <div>
      <TopNav />
      <h1>Bookings Page</h1>

      <div><Calendar /></div>
    </div>
  );
};

export default BookingPage;