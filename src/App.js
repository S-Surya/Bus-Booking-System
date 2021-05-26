import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "./componenets/NavBar";
import Home from "./componenets/Home";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./componenets/Login";
import BookT from "./componenets/BookT";
import BusList from "./componenets/BusList";
import Forgot from "./componenets/Forgot";
import Signup from "./componenets/Signup";
import Seatmap from "./componenets/Seatmap";
class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <NavBar />
          <Route exact path="/login/" component={Login} />
          <Route exact path="/" component={Home} />
          <Route exact path="/book_tickets/" component={BookT} />
          <Route
            exact
            path="/book_tickets/seats_booking/"
            component={Seatmap}
          />
          <Route exact path="/book_tickets/bus_list/" component={BusList} />
          <Route exact path="/forgot_password/" component={Forgot} />
          <Route exact path="/signup/" component={Signup} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
