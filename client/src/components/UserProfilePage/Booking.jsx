import React from 'react';


export const Booking = ({ booking, deleteBooking }) => {
  const { _id, hotel, checkIn, checkOut, totalPrice, totalNight, roomSize, roomNumber} = booking;

  return (
    <tr>
      <td>{hotel}</td>
      <td>{roomSize}</td>
      <td>{roomNumber}</td>
      <td>$ {totalPrice}</td>
      <td>{totalNight}</td>
      <td>{checkIn}</td>
      <td>{checkOut}</td>
      <td>
        <button 
          onClick={() => deleteBooking(_id)}
          type="button" 
          className="btn btn-danger">
            Delete
        </button>
      </td>
    </tr>
  )
}