import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Booking } from '../components/UserProfilePage/Booking';
import TopNav from '../components/TopNav';
import axios from 'axios';
import '../styles/UserProfilePage.css';

export const UserProfilePage = ({ match }) => {
  useEffect(() => {
    fetchUserData();
  });

  const [bookings, getBookings] = useState([]);
  const [name, getName] = useState('');
  const history = useHistory();
  const fetchUserData = async () => {
    const response = await fetch(`/users/profile/${match.params.userid}`);
    const jsonedResponse = await response.json();
    getBookings(jsonedResponse.bookings);
    getName(jsonedResponse.username);
  };

  const deleteBooking = async (bookingId) => {
    try {
      await axios.delete(`/users/profile/${match.params.userid}/${bookingId}`);
      history.go(0);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <React.Fragment>
      <TopNav />
      <br></br>
      <h1>Welcome, {name}!</h1>
      <br></br>
      <table class='table'>
        <thead>
          <tr>
            <th scope='col'>Hotel</th>
            <th scope='col'>Room Type</th>
            <th scope='col'>Room Number</th>
            <th scope='col'>Price</th>
            <th scope='col'>Night(s)</th>
            <th scope='col'>Check-in Date</th>
            <th scope='col'>Check-out Date</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => {
            return <Booking booking={booking} deleteBooking={deleteBooking} />;
          })}
        </tbody>
      </table>
    </React.Fragment>
  );
};
