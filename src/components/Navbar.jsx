import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Navbar.css"; 

const NavigationBar = () => {
  return (
    <Navbar expand="lg" className="navbar-custom" fixed="top">
      <Container>
        <Navbar.Brand href="#home" className="brand">
          Rajat's Portfolio
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className="nav-link-white">HOME</Nav.Link>
            <Nav.Link href="#about" className="nav-link-white">ABOUT ME</Nav.Link>
            <Nav.Link href="#skills" className="nav-link-white">Skills</Nav.Link>
            <Nav.Link href="#projects" className="nav-link-white">PROJECTS</Nav.Link>
            <Nav.Link href="#contact" className="nav-link-white">CONTACT ME</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
