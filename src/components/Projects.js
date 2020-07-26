import React, { useState} from "react";
import projects from '../project-list.json';

function ProjectCard(props) {
  return (
    <div className="card-container col-12">
        <div className="card">
          <img alt={props.proj_name} src={props.image} className="card-img" />
          <h3>{props.name}</h3>
          <div>
              <a href={props.deployed_app} target="_blank" rel="noopener noreferrer">Deployed Application</a>  
          </div>
          <a href={props.github} target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>  
    </div>
  );
}

function Wrapper(props) {
  return <div className="">{props.children}</div>;
}

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
      <h1 className="project-list">Project List</h1>

        {projectsList.map((project) => (
        renderProject(project)
      ))}      
    </Wrapper>
  );
}

export default Projects;