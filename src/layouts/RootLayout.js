import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <div className="main-header">
        <div className="logo">
          <h1>
            <NavLink to="/">stivPORTFOLIO</NavLink>
          </h1>
        </div>
        <div className="nav-bar">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="projects">Projects</NavLink>
            </li>
            <li>
              <NavLink to="about">About Me</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
    </>
  );
}
