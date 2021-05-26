import React from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Button,
  Row,
  Col
} from "reactstrap";
import { Form, FormGroup, Label, Input } from "reactstrap";
import classnames from "classnames";
import { connect } from 'react-redux';
import { addUser,findUser } from '../actions/userActions';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: "1"
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
        console.log('hi');
        console.log(this.state);
        this.props.history.push(`/book_tickets/${this.state.username}`);
    } 

    if (nextProps.errors) {
        console.log('hello');
        console.log(nextProps.errors);
        this.setState({ errors: nextProps.errors });
    }
}

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  state = {
    username : '',
    password : '',
    errors : {}
  };

onChange = (e) => {
    this.setState({ [e.target.name] : e.target.value });
};

onSubmit = (e) => {
    e.preventDefault();


    const fuser = {
        username : this.state.username,
        password : this.state.password
    }

        console.log('inside component');
        console.log(fuser);
      this.props.findUser(this.state.username,this.state.password,fuser);
    }

    

  render() {

   
    return (
      <div className="Login">
        <div className="LoginBox">
          <Nav tabs>
            <NavItem>
              <NavLink href="/login/"
                className={classnames({ active: this.state.activeTab === "1" })}
                onClick={() => {
                  this.toggle("1");
                }}
              >
                Login
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/signup/"
                className={classnames({ active: this.state.activeTab === "2" })}
                onClick={() => {
                  this.toggle("2");
                }}
              >
                SignUP
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="1">
              <Row>
                <Col sm={{ size: 6, offset: 3 }}>
                  <Form onSubmit = {this.onSubmit}>
                    <FormGroup>
                      <Label for="exampleName">Username</Label>
                      <Input
                        type="text"
                        name = "username"
                        id="exampleName"
                        placeholder="Username"
                        onChange = {this.onChange}
                        value = {this.state.username}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="examplePassword">Password</Label>
                      <Input
                        type="password"
                        name="password"
                        id="examplePassword"
                        placeholder="password"
                        onChange = {this.onChange}
                        value = {this.state.password}
                      />
                    </FormGroup>
                    <Button color="success" >
                        Submit
                    </Button>
                  </Form>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="2">
              <Row>
                <Col sm={{ size: 6, offset: 3 }}>
                  <Form onSubmit = {this.onSubmit}>
                    <FormGroup>
                      <Label for="exampleEmail">Email</Label>
                      <Input
                        type="email"
                        name="email"
                        id="exampleEmail"
                        placeholder="Email"
                        onChange = {this.onChange}
                        value = {this.state.email}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="exampleName">Username</Label>
                      <Input
                        type="text"
                        name="name"
                        id="exampleName"
                        placeholder="username"
                        onChange = {this.onChange}
                        value = {this.state.name}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="examplePassword">Password</Label>
                      <Input
                        type="password"
                        name="password"
                        id="examplePassword"
                        placeholder="password"
                        onChange = {this.onChange}
                        value = {this.state.password}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="exampleDOB">D.O.B</Label>
                      <Input
                        type="date"
                        name="dob"
                        id="exampleDOB"
                        placeholder="Date of birth"
                        onChange = {this.onChange}
                        value = {this.state.dob}
                      />
                    </FormGroup>
                    <Button color="success">Submit</Button>
                  </Form>
                </Col>
              </Row>
            </TabPane>
          </TabContent>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
      user : state.user,
      auth: state.auth,
      errors: state.errors
});


export default connect(mapStateToProps, {addUser,findUser})(Login);
