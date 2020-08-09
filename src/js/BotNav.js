import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "../css/BotNav.css";

function BotNav() {
  return (
    <Navbar fixed="bottom" bg="dark" expand="md">
      <Navbar.Brand href="#home">Brand</Navbar.Brand>
      <Navbar fixed="bottom" className="justify-content-end">
        <Nav.Link href="#About" className="btlink">
          About
        </Nav.Link>
        <Nav.Link href="#Privacy policy" className="btlink">
          Privacy policy
        </Nav.Link>
      </Navbar>
    </Navbar>
  );
}

export default BotNav;
