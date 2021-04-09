import React, { useEffect, useState } from 'react';
import TopNav from '../components/TopNav';
import Calendar from '../components/Calendar';
import '../styles/nav.css'; 

const BookingPage = ( { match, location } ) => {
  const { roomNumber, size, img, price } = location.state;
  useEffect(() => {
    fetchHotels();
  }, []);

  const [hotels, getHotels] = useState('');

  const fetchHotels = async () => {
    // await console.log('call');
    const fetchHotels = await fetch(`/hotels`);
    const allHotels = await fetchHotels.json();
    await getHotels(allHotels);
    // await console.log('test');
  };

  return (
    <div>
      <TopNav />
      <br></br>
      <h1>Book the {size}</h1>
      <br></br>
      <img src={img} className='img-fluid' />
      <p>Room {roomNumber}</p>
      <p>Price: ${price}</p>
      <div>
        <Calendar hotelId={match.params.hotelid} roomId={match.params.roomid} price={price} />
      </div>
    </div>
  );
  return <>(BookingPage())</>;
};

export default BookingPage;
