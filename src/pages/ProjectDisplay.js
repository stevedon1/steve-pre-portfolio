import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ProjectList } from "./ProjectList";

export default function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  const navigate = useNavigate();
  const handleGithubButton = () => {
    const githubUrl = "https://github.com/stevedon1";
    window.open(githubUrl, "_blank");
  };
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

      <div className="to-github-container" onClick={handleGithubButton}>
        <p>Check Out the whole source code on my GitHub page</p>
        <i className="fa-brands fa-github"></i>
      </div>
      <div className="back-button-container">
        <button
          onClick={() => {
            navigate("/projects");
          }}
        >
          <i className="fa-solid fa-arrow-left"></i>Back
        </button>
      </div>
    </div>
  );
}
