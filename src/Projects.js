import React, { useState } from "react";
import projects from "./projectData";
import {BsArrowDown } from "react-icons/bs";

function Projects() {
  const [project, setProject] = useState(projects);
  console.log(project);

  const Handletd=()=>{
    // <a href="https://question-display.netlify.app/">ssss</a>
    console.log("clicked")
  }

  return (
    <section className="portfolio-section" id="project">
           <h2 className="project-h2">My Projects</h2>
           <div className="project-parent">

          
      {project.map((pro) => {
        const { id,title, img, info,text,technology,lin} = pro;
        console.log(title, img,lin); 
        return (<div className="project-info" key={id} onClick={Handletd}>
            <a className="project-link" href={lin} target="_blank" rel="noopener noreferrer">

            {/* {console.log(img, "coming from article.....")} */}
            <div className="show-img-div">
            <img src={img} alt="image" className="pro-img" />

            </div>
           
           
          <h3 className="projectinf0-h2">{title}</h3>
          <p className="projectinf0-h22">{info}</p>
            <h4 className="projectinf0-h3" >{text} <BsArrowDown  className="arrow"/></h4>
            <p className="projectinf0-pp">
            {technology} </p>
            </a>
        </div>
        
        );
      })}
       </div>
   
    </section>
    
  );
}

export default Projects;
