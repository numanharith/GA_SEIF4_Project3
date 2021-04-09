import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router'
import TopNav from '../components/TopNav';
import { Booking } from '../components/UserProfilePage/Booking';
import '../styles/UserProfilePage.css';
import axios from 'axios';

export const UserProfilePage = ({ match }) => {
  useEffect(() => {
    fetchUserData();
  }, []);

  const [bookings, getBookings] = useState([]);
  const [name, getName] = useState('');
  const history = useHistory();
  const fetchUserData = async () => {
    const response = await fetch(`/users/profile/${match.params.userid}`);
    const jsonedResponse = await response.json();
    await getBookings(jsonedResponse.bookings);
    await getName(jsonedResponse.username);
  };

  const deleteBooking = async (bookingId) => {
    try {
      await axios.delete(`/users/profile/${match.params.userid}/${bookingId}`);
      history.go(1);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <React.Fragment>
      <TopNav />
      <h1>Welcome, {name}!</h1>
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
