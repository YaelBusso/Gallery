import React from "react";
import {Navbar, Container, Nav, NavDropdown, } from "react-bootstrap";
import Icon from './Icon'

const Header = () => {
  return (
    <header>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">MyGallery:)</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
        
            </Nav>
            <Nav>
            <Nav.Link href="#deets"><Icon name="lightbox"/></Nav.Link>
              <Nav.Link href="#deets"><Icon name="row"/></Nav.Link>
              <Nav.Link href="#deets"><Icon name="col"/></Nav.Link>
              <Nav.Link href="#deets"><Icon name="eye"/></Nav.Link>
              <Nav.Link eventKey={2} href="https://github.com/YaelShrem/Gallery">
                <Icon name="githubLogo" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
