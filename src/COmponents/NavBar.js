import PropTypes from "prop-types";
import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

export class NavBar extends Component {
  static propTypes = {};

  render() {
    return (
      <div>
        <Navbar bg="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#" className="text-white">NewsMonkey</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <NavLink to="/" className="nav-link text-white">Home</NavLink>
                <NavLink to="business" className="nav-link text-white">Business</NavLink>
                <NavLink to="entertainment" className="nav-link text-white">Entertainment</NavLink>
                <NavLink to="health" className="nav-link text-white">Health</NavLink>
                <NavLink to="travel" className="nav-link text-white">Travel</NavLink>
                <NavLink to="science" className="nav-link text-white">Science</NavLink>
                <NavLink to="sports" className="nav-link text-white">Sports</NavLink>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
