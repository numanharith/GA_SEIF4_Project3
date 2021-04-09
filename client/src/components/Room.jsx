import React from 'react';
import { Link } from 'react-router-dom';

const Room = ({ room, hotel }) => {
  console.log('hotel prop is ' + hotel);
  // const { room } = props;

  return (
    <div className='col-md-4'>
      <h2>{room.name}</h2>
      <div className='card mb-4 shadow-sm'>
        <img
          className='bd-placeholder-img card-img-top'
          src={room.img}
          alt={room.size}
          width='100%'
          height='255'
        />
        <div className='card-body'>
          <h1 className='card-text d-flex justify-content-center'>
            <Link to={{ pathname: `${hotel}/${room._id}/`, state: room }}>
              {room.size}
            </Link>
          </h1>
          <br />
          Price: ${room.price}/night
        </div>
      </div>
    </div>
  );
};

export default Room;