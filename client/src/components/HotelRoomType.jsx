import React, { Component } from 'react';

export default class HotelRoomType extends Component {
	render() {
		return (
			<div className="col-md-4">
				<div className="card mb-4 shadow-sm">
					<img className="bd-placeholder-img card-img-top" src={this.props.hotel.rooms[0].img} width='100%' height='255'/>
					<div className='card-body'>
						<h1 className='card-text d-flex justify-content-center'>{this.props.hotel.rooms[0].size}</h1>
						<br />
						Price: ${this.props.hotel.rooms[0].price}/night
					</div>
				</div> 
			</div>
		)
	}
}