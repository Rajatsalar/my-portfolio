import React from "react";
import "./AboutMe.css";
import aboutImg from "../assets/about-me.webp";  // Image for the section

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-card">
          <div className="about-content">
            
            {/* Image Container */}
            <div className="about-image-container">
              <img src={aboutImg} alt="About Me" className="about-image" />
            </div>

            {/* Text Container */}
            <div className="about-text">
              <h3>I'm Rajat, a Frontend Developer</h3>
              <p>
                Passionate frontend developer with experience in building
                responsive and interactive web applications. I specialize in
                <strong> React.js, Bootstrap, and JavaScript</strong>,
                creating visually appealing and user-friendly interfaces.
              </p>
              <p>
                During my <strong>6-month internship</strong>, I worked on various
                projects, optimizing website performance and enhancing UI/UX design. 
                I am committed to continuous learning and enjoy experimenting with 
                new technologies.
              </p>

              {/* Skills Section */}
              <div className="about-skills">
                <h4>Skills & Expertise</h4>
                <div className="skills-container">
                  <span className="skill">HTML5</span>
                  <span className="skill">CSS3</span>
                  <span className="skill">JavaScript</span>
                  <span className="skill">React.js</span>
                  <span className="skill">Bootstrap</span>
                  <span className="skill">Responsive Design</span>
                </div>
              </div>

              <a href="#projects" className="btn about-me-btn">View My Projects</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
