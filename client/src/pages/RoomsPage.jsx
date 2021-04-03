import React, { useEffect, useState } from 'react';
import Room from '../components/Room';

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
        <h1>Rooms Page</h1>
        <div className='hotelCards album py-5 bg-light'>
          <div className='container'>
            <div className='row'>
              {rooms.map((room) => {
                return <Room room={room} key={room._id} />;
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

// export default class RoomsPage extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       hotels: [],
//       rooms: [],
//     };
//   }

//   render() {
//     return (
//       <div>
//         <h1>Rooms Page</h1>
//         <div className='hotelCards album py-5 bg-light'>
//           <div className='container'>
//             <div className='row'>
//               {this.props.hotels.map((hotel, index) => {
//                 return (
//                   <HotelRoomType hotel={hotel} key={this.state.hotels._id} />
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// const HotelsPage = (props) => {
// 	const {hotels} = props;

// 	if (hotels.length > 0) {
// 		return (
// 			<div>
// 				<h1>Hotels Page</h1>
// 				<div className='hotelCards album py-5 bg-light'>
// 					<div className='container'>
// 						<div className='row'>
// 							{hotels.map((hotel) => {
// 								return <Hotel hotel={hotel} />;
// 							})}
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		)
// 	}

// 	return (
// 		<>
// 			(HotelsPage(props))
// 		</>
// 	)
// }

// export default HotelsPage;// export default HotelsPage;
