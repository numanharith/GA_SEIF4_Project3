import React, { useState, useEffect } from 'react';
import Hotel from '../components/Hotel';
import TopNav from '../components/TopNav';

const HotelsPage = () => {
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

  if (hotels.length > 0) {
    return (
      <div>
        <TopNav />
        <h1>Hotels Page</h1>
        <div className='hotelCards album py-5 bg-light'>
          <div className='container'>
            <div className='row'>
              {hotels.map((hotel) => {
                return <Hotel hotel={hotel} key={hotel._id} />;
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <>(HotelsPage())</>;
};

export default HotelsPage;
