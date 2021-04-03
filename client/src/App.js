import './App.css';
import React, { useState, useEffect } from 'react';
import HomePage from './pages/HomePage';
import HotelsPage from './pages/HotelsPage';
import RoomsPage from './pages/RoomsPage';
import TopNav from './components/TopNav';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import axios from 'axios';

const App = () => {
  const [hotels, getHotels] = useState('');

  useEffect(() => {
    getAllHotels();
  }, []);

  const getAllHotels = () => {
    axios
      .get('/hotels')
      .then((response) => {
        const allHotels = response.data;
        getHotels(allHotels);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

  return (
    <Router>
      <React.Fragment>
        <TopNav />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route
            exact
            path='/hotels'
            render={() => <HotelsPage hotels={hotels} key={hotels._id} />}
          />
          {/* <Route
            exact
            path='/hotels/:id'
            render={(props) => (
              <RoomsPage
                hotels={hotels}
                key={hotels._id}
                {...props}
              />
            )}
          /> */}
          <Route exact path='/hotels/:id' component={RoomsPage} />
        </Switch>
      </React.Fragment>
    </Router>
  );
};

export default App;
// export default class App extends Component {
// 	constructor(props) {
// 		super(props);

// 		this.state = {
// 			hotels: [],
// 			users: [],
// 		};
// 	}

// 	fetchdata = async () => {
// 		try {
// 			const response = await axios.get('/hotels');
// 			this.setState({
// 				hotels: response.data,
// 			});
// 		} catch (err) {
// 			console.log(err);
// 		}
// 	};

// 	fetchusers = async () => {
// 		try {
// 			const response = await axios.get('/users');
// 			//console.log(response.data);
// 			this.setState({
// 				users: response.data,
// 			});
// 		} catch (err) {
// 			console.log(err);
// 		}
// 	};

// 	componentDidMount = () => {
// 		this.fetchdata();
// 		this.fetchusers();
// 	};

// 	render() {
// 		return (
// 			<Router>
// 				<React.Fragment>
// 					<TopNav />
// 					<Switch>
// 						<Route exact path='/' component={HomePage} />
// 						<Route
// 							exact
// 							path='/hotels'
// 							render={() => (
// 								<HotelsPage
// 									hotels={this.state.hotels}
// 									key={this.state.hotels._id}
// 								/>
// 							)}
// 						/>
// 						<Route
// 							exact
// 							path='/hotels/:id'
// 							render={(props) => (
// 								<RoomsPage
// 									hotels={this.state.hotels}
// 									key={this.state.hotels._id}
// 									{...props}
// 								/>
// 							)}
// 						/>
// 						<Route exact path='/rooms' component={RoomsPage} />
// 					</Switch>
// 				</React.Fragment>
// 			</Router>
// 		);
// 	}
// }
