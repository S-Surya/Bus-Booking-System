import React, { Component } from "react";
import { Table, Button, Row, Col, NavLink } from "reactstrap";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getBookings } from '../actions/userActions';
import Booktick from './BookT';
import {
  Collapse,
  Container,
  Navbar,
  Form,
  FormGroup,
  Input,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  ListGroup,
  ListGroupItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import {CSSTransition,TransitionGroup} from 'react-transition-group';

class Mybook extends Component {
  state = {};

  componentDidMount(){
    console.log('printing');
    console.log(this.props.tkt);
  }

  render() {
    const {bookings} = this.props.tkt;
    return (
        
        <Container>
        <ListGroup>
            <TransitionGroup className = "Mybook">
                {bookings.map( ({ _id, bus_id , doj , nos , cost}) => (
                    <CSSTransition key={_id} timeout={500} classNames="fade">
                        <ListGroupItem>
                        {bus_id} {doj} {nos} {cost}
                        </ListGroupItem>
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </ListGroup>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
    tkt : state.tkt
});
  
export default connect(mapStateToProps, {getBookings})(Mybook);
