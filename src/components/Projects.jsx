import React from 'react';
import './Projects.css';
import weatherImg from "../assets/weather-app.jpg";
import taskManagerImg from "../assets/task-manager.jpg";
import ecommerceSiteImg from "../assets/ecommerce-site.jpg"


const Projects = () => {
  const projectData = [
    {
      id: 1,
      title: "Weather App",
      description: "A React app fetching live weather data from an API with dynamic UI.",
      image: weatherImg,
      link: "#"
    },
    {
      id: 2,
      title: "Task Manager",
      description: "An interactive task management app with CRUD operations.",
      image: taskManagerImg,
      link: "#"
    },
    {
      id: 3,
      title: "E-commerce Site",
      description: "A fully responsive e-commerce website using React and Bootstrap.",
      image: ecommerceSiteImg,
      link: "#"
    }

  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2>MY PROJECTS</h2>
        <div className="projects-grid">
          {projectData.map((project) => (
            <div key={project.id} className="project-card">
              <img src={project.image} alt={project.title} />
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
