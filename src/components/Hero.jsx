import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1>Hi, I'm <span className="highlight">Rajat Salar</span></h1>
        <p>Frontend Developer | React Enthusiast | Web Designer</p>
        <a href="#projects" className="btn btn-primary">View Projects</a>
      </div>
    </div>
  );
};

export default Hero;
