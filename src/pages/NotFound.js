import React from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="main-body not-found">
      <h2>Page Not Found</h2>
      <div className="back-button-container">
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          Back Home
        </button>
      </div>
    </div>
  );
}
