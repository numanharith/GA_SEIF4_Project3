import React, { Component } from 'react';
const axios = require('axios');

export default class BookRoom extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // need help!
            size: '',
            date: '',
        };
    }

    handleChange = (event) => {
        this.setState({ [event.target.id]: event.target.value });
    };

    /*-------- need to figure how to push bookings into ROOMS -------*/
    // createNewBooking = async () => {
    //     try {
    //         const response = await axios.post('/hotels', {
    //             // should follow the this.state above
    //             // need help!
    //             name: this.state.hotel.name,
    //             size: this.state.room.size,
    //             date: this.state.room.date,
    //         });
    //         this.props.fetchdata();
    //     } catch (err) {
    //         console.log(err);
    //     }
    // };

    handleSubmit = (event) => {
        event.preventDefault();
        // this.createNewBooking();
        this.setState({
            // follow this.state above but make it empty
            // need help!
            size: '',
            date: '',
        });
    };

    // need to edit
    render() {
        return (
            <div>
                <h1>this is from: BookRoom.jsx</h1>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type='text'
                        value={this.state.size}
                        onChange={this.handleChange}
                        id='size'
                        placeholder='room type'
                    />
                    <br />
                    <br />
                    <input
                        type='date'
                        value={this.state.date}
                        onChange={this.handleChange}
                        id='date'
                        placeholder='date'
                    />
                    <br />
                    <br />
                    <button type='submit'>Add</button>
                </form>
            </div>
        );
    }
}