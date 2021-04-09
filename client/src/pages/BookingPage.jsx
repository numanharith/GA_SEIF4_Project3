import TopNav from '../components/TopNav';
import Calendar from '../components/Calendar';
import '../styles/nav.css';

const BookingPage = ({ match, location }) => {
  const { roomNumber, size, img, price } = location.state;

  return (
    <div>
      <TopNav />
      <br></br>
      <h1>Book the {size}</h1>
      <br></br>
      <img src={img} className='img-fluid' alt='The room'/>
      <div className='details'>
        <h4>Room {roomNumber}</h4>
        <h4>Price: ${price}</h4>
      </div>
      <div>
        <Calendar
          hotelId={match.params.hotelid}
          roomId={match.params.roomid}
          price={price}
        />
      </div>
    </div>
  );
};

export default BookingPage;
