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

export default class Signup extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: "2"
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <div className="Login1">
        <div className="LoginBox1">
          <Nav tabs>
            <NavItem>
              <NavLink
                href="/login/"
                className={classnames({ active: this.state.activeTab === "1" })}
                onClick={() => {
                  this.toggle("1");
                }}
              >
                Login
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="/signup/"
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
            <TabPane tabId="2" href="/lol">
              <Row>
                <Col sm={{ size: 6, offset: 3 }}>
                  <Form>
                    <FormGroup>
                      <Label for="exampleEmail">Email</Label>
                      <Input
                        type="email"
                        name="email"
                        id="exampleEmail"
                        placeholder="with a placeholder"
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="exampleEmail">Username</Label>
                      <Input
                        type="email"
                        name="email"
                        id="exampleEmail"
                        placeholder="something@123"
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="examplePassword">Password</Label>
                      <Input
                        type="password"
                        name="password"
                        id="examplePassword"
                        placeholder="xxxxxxxxx"
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="exampleDOB">D.O.B</Label>
                      <Input
                        type="date"
                        name="dob"
                        id="exampleDOB"
                        placeholder="DOB placeholder"
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="exampleSelect">Select</Label>
                      <Input type="select" name="select" id="exampleSelect">
                        <option>Male</option>
                        <option>Female</option>
                        <option>Gay</option>
                        <option>Lesbian</option>
                        <option>Queer</option>
                      </Input>
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
