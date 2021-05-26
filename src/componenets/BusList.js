import React, { Component } from "react";
import { Table, Button, Row, Col, NavLink } from "reactstrap";
class BusList extends Component {
  state = {};
  render() {
    return (
      <div>
        <Row>
          <Col sm={{ size: 8, offset: 2 }}>
            <Table hover dark>
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>
                    <Button color="primary">
                      <NavLink
                        href="/book_tickets/seats_booking/"
                        style={{ color: "white" }}
                      >
                        Select
                      </NavLink>
                    </Button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                  <td>
                    <Button color="primary">
                      <NavLink
                        href="/book_tickets/seats_booking/"
                        style={{ color: "white" }}
                      >
                        Select
                      </NavLink>
                    </Button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                  <td>
                    <Button color="primary">
                      <NavLink
                        href="/book_tickets/seats_booking/"
                        style={{ color: "white" }}
                      >
                        Select
                      </NavLink>
                    </Button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </div>
    );
  }
}

export default BusList;
