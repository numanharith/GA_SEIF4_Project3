import React from 'react';
import { Link } from 'react-router-dom';

const Room = (props) => {
  const { room } = props;

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
            <Link to={{pathname:`rooms/${room._id}/`, state: room }}>{room.size}</Link>
          </h1>
          <br />
          Price: ${room.price}/night
        </div>
      </div>
    </div>
  );
};

export default Room;
// export default class roomRoomType extends Component {
//     constructor(props) {
//             ;      };
//     }
//     render() {
//         return (;
//             <div className='col-md-4'>
//                 <h2>{room.name}</h2>
//                 <div className='card mb-4 shadow-sm'>
//                     <img
//                         className='bd-placeholder-img card-img-top'
//                         src={room.rooms[0].img}
//                         alt={room.rooms[0].size}
//                         width='100%'
//                         height='255'
//                     />
//                     <div className='card-body'>
//                         <h1 className='card-text d-flex justify-content-center'>
//                             {room.rooms[0].size}
//                         </h1>
//                         <br />
//                         Price: ${room.rooms[0].price}/night
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }
