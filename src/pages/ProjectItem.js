import React from "react";
import { useNavigate } from "react-router-dom";

export default function ProjectItem({ image, title, id }) {
  const navigate = useNavigate();
  return (
    <div
      key={id}
      className="project-item"
      onClick={() => {
        navigate("/project/" + id);
      }}
    >
      <div className="img-Container">
        <img src={image} alt="project profile" />
      </div>
      <h3>{title}</h3>
    </div>
  );
}
