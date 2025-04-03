import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link as ScrollLink } from "react-scroll";  // Import react-scroll
import "./Navbar.css";
import ContactMe from "./ContactMe";

const NavBar = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <>
      <Navbar expand="lg" className="navbar-custom" fixed="top">
        <Container>
          <Navbar.Brand href="#home" className="navbar-brand-text">
            My Portfolio
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
            <ScrollLink
                to="home"
                smooth={true}
                duration={500}
                className="nav-link"
              >
                HOME
              </ScrollLink>
              <ScrollLink
                to="about"
                smooth={true}
                duration={500}
                className="nav-link"
              >
                ABOUT ME
              </ScrollLink>

              <ScrollLink
                to="skills"
                smooth={true}
                duration={500}
                className="nav-link"
              >
                SKILLS
              </ScrollLink>

              <ScrollLink
                to="experience"
                smooth={true}
                duration={500}
                className="nav-link"
              >
                EXPERIENCE
              </ScrollLink>

              <ScrollLink
                to="projects"
                smooth={true}
                duration={500}
                className="nav-link"
              >
                PROJECTS
              </ScrollLink>

              {/* Contact Me Modal */}
              <Nav.Link onClick={handleShow} className="nav-link contact-link">
                CONTACT ME
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Modal for ContactMe */}
      <ContactMe show={showModal} handleClose={handleClose} />
    </>
  );
};

export default NavBar;
