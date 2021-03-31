import React, { Component } from 'react';
import Hotel from '../components/Hotel';

export default class HotelsPage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			// need to edit
		};
	}
	render() {
		return (
			<div>
				<h1>Main Page: Hotels Page</h1>
				<div className="hotelCards album py-5 bg-light">
					<div className="container">
						<div className="row">
							{this.props.hotels.map((hotel, index) => {
								return <Hotel hotel={hotel} />;
							})}
						</div>
					</div>
				</div>
			</div>
		);
	}
}
