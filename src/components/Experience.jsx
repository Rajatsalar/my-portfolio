import React, { useState } from "react";
import { Card, Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Experience.css";

const experiences = [
  {
    id: 1,
    company: "Avian WE",
    role: "Frontend Developer",
    duration: "Nov 2024 - March 2025",
    projects: [
      "Developed a dynamic dashboard",
      "Implemented responsive UI with React-Bootstrap",
      "Developed clean and well-structured webpages using HTML5, ensuring accessibility and SEO-friendly markup.",
      "Created visually appealing layouts using CSS3, including Flexbox, Grid, animations, and media queries for responsive design.",
    ],
  },
   {
     id: 2,
     company: "Zoruk EV Pvt Ltd",
     role: "Web Developer",
     duration: "Feb 2023 - Till Date",
     projects: [
       "Developed and maintained the company website (zorukev.com) using HTML, CSS, and JavaScript.",
       "Implemented regular updates and feature enhancements to ensure responsive, optimized user experiences across devices.",
       "Collaborated with cross-functional teams to streamline processes and integrate new functionalities.",
    ],
   },
];

const Experience = () => {
  const [show, setShow] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState(null);

  const handleShow = (experience) => {
    setSelectedExperience(experience);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  return (
    <section id="experience">
    <div className="container">
      <h2 className="text-center mb-4 experience-title">Experience</h2>
      <div className="row">
        {experiences.map((exp) => (
          <div key={exp.id} className="col-md-6 mb-4">
            <Card className="experience-card">
              <Card.Body>
                <Card.Title>{exp.company}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{exp.role}</Card.Subtitle>
                <Card.Text>{exp.duration}</Card.Text>
                <Button className="know-more-btn" onClick={() => handleShow(exp)}>
                  Know More
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>

      {selectedExperience && (
        <Modal show={show} onHide={handleClose} centered className="experience-modal">
          <Modal.Header closeButton>
            <Modal.Title>{selectedExperience.company}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h5>{selectedExperience.role}</h5>
            <p>{selectedExperience.duration}</p>
            <h6>Projects:</h6>
            <ul>
              {selectedExperience.projects.map((project, index) => (
                <li key={index}>{project}</li>
              ))}
            </ul>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
    </section>
  );
};


export default Experience;
