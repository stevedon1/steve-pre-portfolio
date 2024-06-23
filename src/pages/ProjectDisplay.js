import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "./ProjectList";

export default function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="main-body single-project-page">
      <div className="project-container">
        <div className="project-title">
          <h2>{project.title}</h2>
        </div>

        <div className="single-img-container">
          <img src={project.image} alt="project" />
        </div>
        <p>
          <b>Skills Used </b>: {project.technology.join()}
        </p>
      </div>
      <div className="back-button-container">
        <button>
          <i className="fa-solid fa-arrow-left"></i>Back
        </button>
      </div>
      <div className="to-github-container">
        <p>Check Out the source code on my GitHub</p>
        <i className="fa-brands fa-github"></i>
      </div>
    </div>
  );
}
