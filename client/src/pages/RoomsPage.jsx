import React, { useEffect, useState } from 'react';
import Room from '../components/Room';
import TopNav from '../components/TopNav';

const RoomsPage = ({ match }) => {
  useEffect(() => {
    fetchHotel();
  }, []);

  const [rooms, getRooms] = useState('');

  const fetchHotel = async () => {
    const fetchHotel = await fetch(`/hotels/${match.params.id}`);
    const allRooms = await fetchHotel.json();
    await getRooms(allRooms.rooms);
  };

  if (rooms.length > 0) {
    return (
      <div>
        <TopNav />
        <h1>Rooms Page</h1>
        <div className='hotelCards album py-5 bg-light'>
          <div className='container'>
            <div className='row'>
              {rooms.map((room) => {
                return <Room hotel={match.params.id} room={room} key={room._id} />;
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <>(RoomsPage())</>;
};

export default RoomsPage;
