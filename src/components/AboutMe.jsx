import React from "react";
import "./AboutMe.css";
import aboutImg from "../assets/about-me.webp";  // Image for the section

const About = () => {
  return (
    <section id="about" className="about-section">
  <div className="container">
    {/* Header Row */}
    <div className="row">
      <div className="col-12 text-center">
        <h3>I'm Rajat, a Frontend Developer</h3>
      </div>
    </div>

    {/* Image Row */}
    <div className="row">
      <div className="col-12 text-center">
        <div className="about-image-container">
          <img src={aboutImg} alt="About Me" className="about-image" />
        </div>
      </div>
    </div>

    {/* Text Content Row */}
    <div className="row">
      <div className="col-12">
        <div className="about-text">
          <p>
            With <strong>2 years of hands-on experience at Zoruk EV Pvt. Ltd.</strong>, I have been instrumental in maintaining and developing their flagship website, <a href="https://zorukev.com">zorukev.com</a>. My role allowed me to perfect responsive layouts, optimize user interfaces, and ensure seamless performance by leveraging <strong>React.js, Bootstrap, and JavaScript</strong>.
          </p>
          <p>
            During my <strong>4-month internship at Avian We</strong>, I honed my skills further by working on several live projects, specializing in custom WordPress theme development and enhancing website functionality. This practical experience enriched my problem-solving skills and deepened my understanding of modern web trends.
          </p>
        </div>
      </div>
    </div>

    {/* Skills & Button Row */}
    <div className="row">
      <div className="col-12 text-center">
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
</section>
)};
export default About;
