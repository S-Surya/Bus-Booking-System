import React, { Component } from "react";
import {
  Jumbotron,
  Button,
  UncontrolledCollapse,
  Card,
  CardBody
} from "reactstrap";
class Home extends Component {
  state = {
    isOpen: false
  };
  render() {
    return (
      <div className="home-main">
        <div>
          <Jumbotron className="header">
            <h1 className="display-3">EasyGO</h1>
            <p className="lead">Not only a terestrial travel.</p>
            <p>
              Enjoying long road journeys..... but need to est something. Step
              up and book tickets and food through EasyGO.
            </p>
            <p className="lead">Hi how are you.</p>
            <div>
              <Button
                color="primary"
                id="toggler"
                style={{ marginBottom: "1rem" }}
              >
                Learn More
              </Button>
              <UncontrolledCollapse toggler="#toggler">
                <Card>
                  <CardBody className="hf">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nesciunt magni, voluptas debitis similique porro a molestias
                    consequuntur earum odio officiis natus, amet hic, iste sed
                    dignissimos esse fuga! Minus, alias.
                  </CardBody>
                </Card>
              </UncontrolledCollapse>
            </div>
          </Jumbotron>
        </div>
      </div>
    );
  }
}

export default Home;
