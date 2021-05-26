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

export default class Forgot extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: "1"
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
      <div className="Login">
        <div className="LoginBox">
          <Row>
            <Col sm={{ size: 7, offset: 3 }}>
              <br />
              <br />
            </Col>
          </Row>
          <Row className="forgot-row">
            <Col sm={{ size: 6, offset: 3 }}>
              <form>
                <div class="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                  />
                  <small id="emailHelp" class="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small>
                </div>
                <br />
                <Button className="btn-sub" color="primary" size="sm">
                  <NavLink href="/signup_or_login/" style={{ color: "white" }}>
                    Submit
                  </NavLink>
                </Button>
              </form>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
