import React, { Component } from 'react';

export default class BookRoom extends Component {
  constructor(props) {
    super(props);

    this.state = {
      size: '',
      date: '',
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      size: '',
      date: '',
    });
  };

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
            ƒ
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
