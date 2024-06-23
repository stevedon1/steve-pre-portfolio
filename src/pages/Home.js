/* eslint-disable react/style-prop-object */
import React from "react";
import profileImg from "../assets/dongich.jpg";

export default function Home() {
  return (
    <div className="main-body">
      <div className="upper-part">
        <div className="profile-img">
          <img src={profileImg} alt="profile " />
        </div>
        <div className="description">
          <h2 className="steve-name">
            Am <span>Steve Don.</span>
          </h2>
          <p className="s-developer">A passionate Full-Stack Engineer.</p>
          <p>
            I'm proficient in building user interfaces with clean and
            maintainable code, and I'm especially excited about the power of
            React to create dynamic and scalable web applications. I'm
            constantly seeking opportunities to learn and grow as a developer,
            and I'm eager to contribute my skills to challenging projects.
          </p>
        </div>
      </div>
      <div className="lower-part">
        <div className="dev-icon">
          <i className="fa-solid fa-laptop icon"></i>
          <h2>A Web Developer</h2>
          <p>For fully fledged & responsive websites</p>
        </div>
        <div className="skill-set">
          <h2>Skill Set</h2>
          <div className="skill-icon-container">
            <div className="skill-icons">
              <i
                className="fa-brands fa-html5"
                style={{ color: "#df5920" }}
              ></i>
              <p>HTML 5</p>
            </div>
            <div className="skill-icons">
              <i className="fa-brands fa-css3" style={{ color: "#74C0FC" }}></i>
              <p>css 3</p>
            </div>
            <div className="skill-icons">
              <i className="fa-brands fa-js" style={{ color: "#FFD43B" }}></i>
              <p>JAVASCRIPT</p>
            </div>
            <div className="skill-icons">
              <i
                className="fa-brands fa-react"
                style={{ color: "#74C0FC" }}
              ></i>
              <p>REACT</p>
            </div>
            <div className="skill-icons">
              <i
                className="fa-brands fa-node-js"
                style={{ color: "#237114" }}
              ></i>
              <p>NODE JS</p>
            </div>
            <div className="skill-icons">
              <i className="fa-brands fa-npm" style={{ color: "#9a380e" }}></i>
              <p>EXPRESS JS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
