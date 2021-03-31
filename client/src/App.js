import './App.css';
import React, { Component } from 'react';
import Hotel from './components/Hotel';
import BookRoom from './components/BookRoom';
import HotelRoomType from './components/HotelRoomType';
import Nav from './components/Nav';
const axios = require('axios');

export class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hotels: [],
        };
    }

    fetchdata = async () => {
        try {
            const response = await axios.get('/hotels');
            //console.log(response.data);
            this.setState({
                hotels: response.data,
            });
        } catch (err) {
            console.log(err);
        }
    };

    componentDidMount = () => {
        this.fetchdata();
    };

    render() {
        return (
            <React.Fragment>
                <Nav />
                <div className='hotelCards album py-5 bg-light'>
                    <div className='container'>
                        <div className='row'>
                            {this.state.hotels.map((hotel, index) => {
                                return (
                                    <Hotel
                                        hotel={hotel}
                                        key={hotel._id}
                                        fetchdata={this.fetchdata}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </div>
                <BookRoom />
                <div className='roomCards album py-5 bg-light'>
                    <div className='container'>
                        <div className='row'>
                            {this.state.hotels.map((hotel, index) => {
                                return (
                                    <HotelRoomType
                                        hotel={hotel}
                                        key={hotel._id}
                                        fetchdata={this.fetchdata}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default App;
