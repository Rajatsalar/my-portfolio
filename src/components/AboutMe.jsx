import React from "react";
import "./AboutMe.css";
import aboutImg from "../assets/about-me.webp";  // Image for the section

const About = () => {
  return (
    <section id="about" className="about-section">
  <div className="container">
    <h2 className="section-title">About Me</h2>
    <div className="about-card">
      <div className="card-content">
        {/* Image Container */}
        <div className="about-image-container">
          <img src={aboutImg} alt="About Me" className="about-image" />
        </div>
        {/* Text & Skills Container */}
        <div className="about-text">
          <h3>I'm Rajat, a Frontend Developer</h3>
          <p>
            With <strong>2 years of hands-on experience at Zoruk EV Pvt. Ltd.</strong>, I have played a key role in maintaining and developing their flagship website, <a href="https://zorukev.com">zorukev.com</a>. My work sharpened my skills in web technologies and front-end development—transforming complex design concepts into user-friendly digital experiences while leveraging <strong>React.js, Bootstrap, and JavaScript</strong>.
          </p>
          <p>
            During my <strong>4-month internship at Avian We</strong>, I further honed my expertise as a front-end developer by working on multiple live projects. I specialized in custom WordPress theme development and enhancing website functionality with innovative design and agile practices, ultimately deepening my understanding of current web trends.
          </p>
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
)};
export default About;
