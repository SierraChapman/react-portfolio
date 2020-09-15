import React from 'react';
import { useProjectContext } from "../../utils/GlobalState";
import Project from "../../components/Project";
import "./style.css";

function Projects() {
  const state = useProjectContext()[0];

  return (
    <main id="projects">
      <h2>Featured Projects</h2>
      {state.projects.filter(project => project.rank <= 6).map(project => <Project project={project} key={project.repo}/>)}
    </main>
  );
}

export default Projects;
