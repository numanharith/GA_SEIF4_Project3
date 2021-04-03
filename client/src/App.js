// import "./App.css";
// import React, { Component } from "react";
// import Hotel from "./components/Hotel";
// import BookRoom from "./components/BookRoom";
// import HotelRoomType from "./components/HotelRoomType";
// import Nav from "./components/Nav";
// const axios = require("axios");

// export class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       hotels: [],
//     };
//   }

//   fetchdata = async () => {
//     try {
//       const response = await axios.get("/hotels");
//       console.log(response.data);
//       this.setState({
//         hotels: response.data,
//       });
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   componentDidMount = () => {
//     this.fetchdata();
//   };

//   render() {
//     return (
//       <React.Fragment>
//         <Nav />
//         <div className="hotelCards album py-5 bg-light">
//           <div className="container">
//             <div className="row">
//               {this.state.hotels.map((hotel, index) => {
//                 return <Hotel hotel={hotel} />;
//               })}
//             </div>
//           </div>
//         </div>
//         <BookRoom />
//         <div className="roomCards album py-5 bg-light">
//           <div className="container">
//             <div className="row">
//               {this.state.hotels.map((hotel, index) => {
//                 return <HotelRoomType hotel={hotel} />;
//               })}
//             </div>
//           </div>
//         </div>
//       </React.Fragment>
//     );
//   }
// }

// export default App;

import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes/Routes";
import AuthApi from "./utils/AuthAPI";
import { hasSignned } from "./components/auth-api";

function App() {
  const [auth, setAuth] = useState(false);

  const readSession = async () => {
    const res = await hasSignned();
    // console.log(res);
    if (res.data.auth) {
      setAuth(true);
    }
  };
  /// use to run after
  useEffect(() => {
    readSession();
  }, []);
  return (
    <div className="App">
      <AuthApi.Provider value={{ auth, setAuth }}>
        <Router>
          <Routes />
        </Router>
      </AuthApi.Provider>
    </div>
  );
}

export default App;
