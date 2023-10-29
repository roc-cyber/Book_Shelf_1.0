import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
//import About from "./About";

function Header() {
  const style ={
    color : 'purple',
    fontFamily: 'italic'

  }
  return (
    <div className="Header-comp">
      <header>
        <h4 className="Book-header">BookShelf</h4>
      </header>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home" style={style}>BookShelf</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/About">About</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="/Action">Action</NavDropdown.Item>
                
                <NavDropdown.Item href="/contact">
                  Contact Us
                </NavDropdown.Item>
                
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
