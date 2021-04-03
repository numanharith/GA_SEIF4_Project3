import React from 'react';
import Hotel from '../components/Hotel';

const HotelsPage = (props) => {
  const { hotels } = props;

  if (hotels.length > 0) {
    return (
      <div>
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

  return <>(HotelsPage(props))</>;
};

export default HotelsPage;

// export default class HotelsPage extends Component {
// 	constructor(props) {
// 		super(props);

// 		this.state = {
// 			// need to edit
// 		};
// 	}
// 	render() {
// 		return (
// 			<div>
// 				<h1>Hotels Page</h1>
// 				<div className='hotelCards album py-5 bg-light'>
// 					<div className='container'>
// 						<div className='row'>
// 							{this.props.hotels.map((hotel) => {
// 								return <Hotel hotel={hotel} />;
// 							})}
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		);
// 	}
// }
