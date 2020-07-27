import React, { useState} from "react";
//import all projects
import projects from '../project-list.json';
//create cards for each project
function ProjectCard(props) {
  return (
    <div className="card-container">
      
        <div className="card">
        <h2 className="project-name">{props.proj_name}</h2>
          <div className="card-img-container">
            <img alt={props.proj_name} src={props.image} className="card-img" />
          
            <div className="overlay">
                <h3>{props.name}</h3>
                <a href={props.deployed_app} target="_blank" rel="noopener noreferrer">Deployed Application</a>  <br/><br/>
                <a href={props.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
      </div>  
    </div>
  );
}

function Wrapper(props) {
  return <div className="">{props.children}</div>;
}
//render each project as a card
function Projects() {
    const [projectsList] = useState(projects);
    const renderProject = (project) => {
        return (
            <ProjectCard 
            proj_name={project.proj_name} 
            image={project.image} 
            id={project.id} 
            deployed_app={project.deployed_app}
            github={project.github} 
            key={project.id}
            />
        )
    }
  return (
    <Wrapper>
      <div className = "project-main">
        <h1 className="project-list" id="section-title">Project List</h1>
          {projectsList.map((project) => (
            renderProject(project)
          ))}      
      </div>
    </Wrapper>
  );
}

export default Projects;