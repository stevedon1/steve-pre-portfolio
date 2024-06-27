import React from "react";
import ProjectItem from "./ProjectItem";
import { ProjectList } from "./ProjectList";
import { useNavigate } from "react-router-dom";

export default function Projects() {
  const navigate = useNavigate();
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
      <div className="bottom-projects-nav">
        <div className="back-button-container">
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            <i className="fa-solid fa-arrow-left"></i>Home
          </button>
        </div>
        <div className="back-button-container">
          <button
            onClick={() => {
              navigate("/about");
            }}
          >
            About<i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
