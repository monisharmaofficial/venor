import "../style.css";
import company from "../assets/company.png";
import express from "../assets/express.png";
import voice from "../assets/voice.png";
import chatboy from "../assets/chatboy.png";

const Projects = () => {
  return (
    <div className="projects-container">
      <h1>
        Our <span>Premium</span> Projets
      </h1>

      <div className="Projects-boxes">
        <div className="head-div1">
          <img className="project-box1" src={company} alt="" />
          <h3 className="project-heading">Niva WordPress Theme</h3>
        </div>
        <div className="head-div2">
          <img className="project-box2" src={express} alt="" />{" "}
          <h3 className="project-heading">Niva CMS</h3>
        </div>
        <div className="head-div3">
          <img className="project-box3" src={voice} alt="" />{" "}
          <h3 className="project-heading">Rentzone CMS</h3>
        </div>
        <div className="head-div4">
          <img className="project-box4" src={chatboy} alt="" />{" "}
          <h3 className="project-heading">Venor WordPress Theme</h3>
        </div>
      </div>
    </div>
  );
};

export default Projects;
