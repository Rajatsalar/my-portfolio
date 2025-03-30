import React from "react";
import "./Skills.css";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaGitAlt, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiJquery, SiMysql, SiFigma } from "react-icons/si";

const Skills = () => {
  const skillsData = [
    {
      category: "Frontend Development",
      skills: [
        { name: "HTML5", icon: <FaHtml5 />, description: "Semantic structure, SEO-friendly, and accessibility." },
        { name: "CSS3", icon: <FaCss3Alt />, description: "Styling, animations, and responsive design." },
        { name: "JavaScript", icon: <FaJs />, description: "ES6+, DOM manipulation, and async programming." },
        { name: "React.js", icon: <FaReact />, description: "Component-based architecture and state management." },
        { name: "Bootstrap", icon: <FaBootstrap />, description: "Pre-built components and responsive grid system." },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, description: "Utility-first styling and custom themes." }
      ]
    },
    {
      category: "Backend & Database",
      skills: [
        { name: "Node.js", icon: <FaNodeJs />, description: "RESTful APIs, server-side JavaScript." },
        { name: "MySQL", icon: <SiMysql />, description: "Relational database management and querying." },
        { name: "Git", icon: <FaGitAlt />, description: "Version control and collaborative development." }
      ]
    },
    {
      category: "Design & Tools",
      skills: [
        { name: "Figma", icon: <SiFigma />, description: "UI/UX design and prototyping." },
        { name: "jQuery", icon: <SiJquery />, description: "Simplified DOM manipulation and animations." }
      ]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">My Skills</h2>

        {skillsData.map((group, index) => (
          <div key={index} className="skills-category">
            <h3>{group.category}</h3>
            <div className="skills-grid">
              {group.skills.map((skill, idx) => (
                <div key={idx} className="skill-card">
                  <div className="icon">{skill.icon}</div>
                  <h4>{skill.name}</h4>
                  <p>{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
