import React from 'react'
import { TopNav } from '../components/TopNav'

export const UserProfilePage = () => {

// need to put this in user profile to delete booking
// need to test if this works
// <button onClick={deleteBooking}>
// const deleteBooking = async (hotelid, id) => {
//   try {
//       const response = await axios.delete(`/:${hotelid}/${bookingid}`);
//       //console.log(response);
//   } catch (err) {
//       console.log(err);
//   }
// };

  return (
    <React.Fragment>
      <TopNav />
      <h1>User Profile Page</h1>
    </React.Fragment>
  )
}