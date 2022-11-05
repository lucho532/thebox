import React from "react";
import "./experience.scss";
import rectangle from "../../assets/img/Rectangle.png";
import projects from "../../assets/img/projects.png";
import awards from "../../assets/img/awards.png";
import yearsbusiness from "../../assets/img/yearsbusinnes.png";
import happy from "../../assets/img/happy.png";
const Experience = () => {
  return (
    <div className="experience">
      <div className="experience-container">
        <div className="history">
          <div className="history-all projects">
            <h1>123</h1>
            <p>
              <img src={rectangle} alt="" className="rectangle" /> Projects
              Completed
            </p>
          </div>
          <div className="history-all happy">
            <h1>84</h1>
            <p>
              <img src={rectangle} alt="" className="rectangle" /> Happy Clients
            </p>
          </div>

          <div className="history-all awards">
            <h1>37</h1>
            <p>
              <img src={rectangle} alt="" className="rectangle" />
              Awards Win
            </p>
          </div>
          <div className="history-all years">
            <h1>30</h1>
            <p>
              <img src={rectangle} alt="" className="rectangle" /> Years in
              Business
            </p>
          </div>
          <h2 className="years-exp">30 Years Experience</h2>
          <p className="parrafo">
            Our company has been the leading provided construction services to
            clients throughout the USA since 1988.
          </p>
          <div className="button">
            <p>Contact Us</p>
          </div>
          <img src={projects} alt="" className="projects-img" />
          <img src={awards} alt="" className="awards-img" />
          <img src={yearsbusiness} alt="" className="years-img" />
          <img src={happy} alt="" className="happy-img" />
        </div>
      </div>
    </div>
  );
};

export default Experience;
