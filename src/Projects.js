import React, { useState } from "react";
import projects from "./projectData";
import { BsArrowDown } from "react-icons/bs";

function Projects() {
  const [project, setProject] = useState(projects);

  const Handletd = () => {
    console.log("clicked");
  }

  return (
    <section className="portfolio-section" id="project">
      <div className="content-wrapper">
        <div className="project-title-wrap">
          <h2 className="project-heading">My Projects</h2>
          <div className="project-heading-line"></div>

        </div>

        <div className="project-parent">
          {project.map((pro) => {
            const { id, title, img, info, text, technology, lin } = pro;
            return (
              <div className="project-info" key={id} onClick={Handletd}>
                <a
                  className="project-link"
                  href={lin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="show-img-div">
                    <img src={img} alt="image" className="pro-img" />
                  </div>

                  <h3 className="projectinf0-h2">{title}</h3>
                  <p className="projectinf0-h22">{info}</p>
                  <h4 className="projectinf0-h3">
                    {text} <BsArrowDown className="arrow" />
                  </h4>
                  <p className="projectinf0-pp">{technology}</p>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;
