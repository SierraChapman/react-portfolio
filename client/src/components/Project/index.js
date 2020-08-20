import React from 'react';
import "./style.css";

function Project({ project }) {
  return (
    <section>
      <h3>{project.title}</h3>
      <img 
        className="project-image" 
        src={`${process.env.PUBLIC_URL}/assets/img/projects/${project.image}`} 
        alt={project.title}
      />

      <h4>Description</h4>
      <p>{project.description}</p>

      <h4>Links</h4>
      <ul>
        <li><a href={project.url}>Deployed Application</a></li>
        <li><a href={project.repo}>GitHub Repository</a></li>
      </ul>

      <h4>Skills/Technologies Used</h4>
      <ul>
        {project.tags.map(tag => <li key={tag}>{tag}</li>)}
      </ul>

    </section>
  );
}

export default Project;
