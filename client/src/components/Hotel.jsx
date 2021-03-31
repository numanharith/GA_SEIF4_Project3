import React, { Component } from 'react';

export default class Hotels extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // need to edit
        };
    }

    render() {
        return (
            <div className='col-md-4'>
                <div className='card mb-4 shadow-sm'>
                    <img
                        className='bd-placeholder-img card-img-top'
                        src={this.props.hotel.img}
                        width='100%'
                        height='255'
                    />
                    <div className='card-body'>
                        <h1 className='card-text d-flex justify-content-center'>
                            {this.props.hotel.name}
                        </h1>
                    </div>
                </div>
            </div>
        );
    }
}
