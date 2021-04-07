import React, { useEffect, useState } from 'react';
import TopNav from '../components/TopNav';
import Calendar from '../components/Calendar';

const BookingPage = (props) => {
    const { roomNumber, size, img, price } = props.location.state;
    return (
        <div>
            <TopNav />
            <h1>Book a {size}</h1>
            <img src={img} className='img-fluid' />
            <p>Room {roomNumber}</p>
            <p>Price: ${price}</p>
            <div>
                <Calendar />
            </div>
        </div>
    );
};

export default BookingPage;
