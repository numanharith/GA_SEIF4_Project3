import React from 'react';
import { Link } from 'react-router-dom';

const Hotel = (props) => {
  const { hotel } = props;

  return (
    <div className='col-md-4'>
      <div className='card mb-4 shadow-sm'>
        <Link to={`/hotels/${hotel._id}`}>
          <img
            className='bd-placeholder-img card-img-top'
            src={hotel.img}
            alt={hotel.name}
            width='100%'
            height='255'
          />
        </Link>
        <div className='card-body'>
          <h1 className='card-text d-flex justify-content-center'>
            <Link to={`/hotels/${hotel._id}`}>{hotel.name}</Link>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hotel;