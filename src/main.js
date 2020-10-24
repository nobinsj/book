import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { CardDeck, Card, Navbar, Nav } from "react-bootstrap";
import { CardHeader } from "reactstrap";
import Book from "./book";
// import View from "./viewBook";
import "./App.css";
import "./index.css";
import UserLogin from "./signin";
import Register from "./signup";
import Signout from "./signout";

function Main() {
  return (
    <Router>
      <Navbar bg="dark" variant="dark" fixed="top">
        <Nav className="mr-auto">
          <div>
            <UserLogin />
          </div>
          <div>
            <Register />
          </div>
        </Nav>
        <Nav className="ml-auto">
          <Signout />
        </Nav>
      </Navbar>
      <div className="container">
        <div className="row-content">
          <CardDeck>
            <Card className="bg-dark text-white">
              <Card.Body>
                <Book />
              </Card.Body>
            </Card>
          </CardDeck>
          <Card className="bg-dark text-white">
            <CardHeader className="bg-dark">
              <h4 className="text-center">YOUR BOOKS</h4>{" "}
            </CardHeader>
            <Card.Body>
              {/* <View /> */}
            </Card.Body>
          </Card>
        </div>
      </div>
    </Router>
  );
}

export default Main;
