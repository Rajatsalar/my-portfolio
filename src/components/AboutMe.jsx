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
                With <strong>2 years of hands-on experience at Zoruk EV Pvt. Ltd.</strong>, I have played a key role in maintaining and developing their flagship website, <a href="zorukev.com">zorukev.com</a>. My work there sharpened my skills in web technologies and front-end development, where I transformed complex design concepts into user-friendly digital experiences. This role also allowed me to perfect my abilities in creating responsive layouts, optimizing user interfaces, and ensuring seamless performance across various devices, leveraging technologies such as <strong>React.js, Bootstrap, and JavaScript</strong>.
              </p>
              <p>
               During my <strong>4-month internship at Avian We</strong>, I further expanded my expertise as a front-end developer by working on a range of live projects. I specialized in building custom WordPress themes and enhancing website functionality through innovative design and agile development practices. This experience enriched my problem-solving skills and deepened my understanding of current web trends, empowering me to deliver modern, high-performance websites tailored to client needs.
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
