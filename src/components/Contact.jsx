import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "./Contact.css";

const ContactMe = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Contact Me</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formName">
            <Form.Label>Your Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" />
          </Form.Group>

          <Form.Group controlId="formEmail" className="mt-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" />
          </Form.Group>

          <Form.Group controlId="formMessage" className="mt-3">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={4} placeholder="Your message..." />
          </Form.Group>

          <Button variant="primary" className="mt-4 w-100" type="submit">
            Send Message
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ContactMe;
