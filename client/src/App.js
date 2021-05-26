import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./components/Login";
import BookT from "./components/BookT";
import SeatB from "./components/SeatB";
import BusList from "./components/BusList";

import { Provider } from 'react-redux';
import store from './store';
import {Container} from 'reactstrap';
import Signup from "./components/Signup";
import Mybook from "./components/Mybook"

class App extends Component {
  render() {
    return (
      <Provider store = {store}>
        <div className="App">
        <BrowserRouter>
          <NavBar />
          <Container>
          <Route exact path="/login/" component={Login} />
          <Route exact path="/" component={Home} />
          <Route exact path="/book_tickets/:a" component={BookT} />
          <Route exact path="/book_tickets/seats_booking/" component={SeatB} />
          <Route exact path="/book_tickets/bus_list/:username/:source/:destination/:doj" component={BusList} />
          <Route exact path="/signup/" component={Signup} />
          <Route exact path="/book_tickets/mybook/:username" component={Mybook}/>
          </Container>
        </BrowserRouter>
      </div>
      </Provider>

    );
  }
}

export default App;
