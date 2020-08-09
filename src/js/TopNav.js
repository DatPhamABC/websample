import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "../css/TopNav.css";
import { Link } from "react-router-dom";

function TopNav() {
  var log = false;
  if (log == false) {
    return (
      <Navbar collapseOnSelect expand="md" variant="dark" className="color-nav">
        <Navbar.Brand href="#home" id="brand">
          Job Finder
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav.Link as={Link} to="/login" id="login">
            Login
          </Nav.Link>
          <Nav.Link as={Link}>Sign up</Nav.Link>
        </Navbar.Collapse>
      </Navbar>
    );
  } else {
    return (
      <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
        <Navbar.Brand href="#home" id="brand">
          Job Finder
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      </Navbar>
    );
  }
}
export default TopNav;
