import React, { Component } from 'react';
const axios = require('axios');

export class BookRoom extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            // need to edit 
    };
}

    handleChange = (event) => {
        this.setState({ [event.target.id]: event.target.value })
    };

    createNewBooking = async () => {
        try {
            const response = await axios.post('/hotels', {
                // should follow the this.state above
            });
            this.props.fetchdata()
        } catch (err) {
            console.log(err)
        }
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.createNewBooking();
        this.setState({
            // follow this.state above but make it empty
        });
    };

    // need to edit
    render () {
        return (
            <div>
                <h1>this is from: BookRoom.jsx</h1>
                <form onSubmit={this.handleSubmit}>
                    <input></input>
                </form>
            </div>

        )
    }

}

export default BookRoom;