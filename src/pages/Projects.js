import React from "react";
import ProjectItem from "./ProjectItem";
import { ProjectList } from "./ProjectList";

export default function Projects() {
  return (
    <div className="main-body">
      <div className="project-title">
        <h1>My Personal Projects</h1>
      </div>
      <div className="projectList">
        {ProjectList.map((project, index) => {
          return (
            <ProjectItem
              key={project.id}
              image={project.image}
              title={project.title}
              id={index}
            />
          );
        })}
      </div>
    </div>
  );
}
