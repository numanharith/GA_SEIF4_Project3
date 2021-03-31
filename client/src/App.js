import './App.css';
import React, { Component } from 'react';
import HomePage from './pages/HomePage';
import HotelsPage from './pages/HotelsPage'
import RoomTypesPage from './pages/RoomTypesPage'
import RoomsPage from './pages/RoomsPage'
import TopNav from './pages/TopNav'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
const axios = require('axios');

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hotels: [],
            users: [],
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

    fetchusers = async () => {
        try {
            const response = await axios.get('/users');
            //console.log(response.data);
            this.setState({
                users: response.data,
            });
        } catch (err) {
            console.log(err);
        }
    };

    componentDidMount = () => {
        this.fetchdata();
        this.fetchusers();
    };

    render() {
        return (
            <Router>
                <React.Fragment>
                    <TopNav />
                    <Switch>
                        <Route exact path='/' exact component={HomePage} />
                        <Route 
                            exact path='/hotels' 
                            render={() => <HotelsPage hotels={this.state.hotels} />} 
                        />
                        <Route exact path='/roomtypes' component={RoomTypesPage}/>
                        <Route exact path='/rooms' component={RoomsPage} />
                    </Switch>
                </React.Fragment>
            </Router>
            // <React.Fragment>
            //     {this.state.users.map((user, index) => {
            //         return (
            //             <Nav
            //                 user={user}
            //                 key={user._id}
            //                 fetchusers={this.fetchusers}
            //             />
            //         );
            //     })}

            //     <h1>SG HOTELS</h1>
            //     <div className='hotelCards album py-5 bg-light'>
            //         <div className='container'>
            //             <div className='row'>
            //                 {this.state.hotels.map((hotel, index) => {
            //                     return (
            //                         <Hotel
            //                             hotel={hotel}
            //                             key={hotel._id}
            //                             fetchdata={this.fetchdata}
            //                         />
            //                     );
            //                 })}
            //             </div>
            //         </div>
            //     </div>
            //     <div className='roomCards album py-5 bg-light'>
            //         <div className='container'>
            //             <div className='row'>
            //                 {this.state.hotels.map((hotel, index) => {
            //                     return (
            //                         <HotelRoomType
            //                             hotel={hotel}
            //                             key={hotel._id}
            //                             fetchdata={this.fetchdata}
            //                         />
            //                     );
            //                 })}
            //             </div>
            //         </div>
            //     </div>
            //     <div className='roomCards album py-5 bg-light'>
            //         <div className='container'>
            //             <div className='row'>
            //                 <BookRoom />
            //             </div>
            //         </div>
            //     </div>
            // </React.Fragment>
        );
    }
}
