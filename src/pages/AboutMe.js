import React from "react";
import { useNavigate } from "react-router-dom";

export default function AboutMe() {
  const navigate = useNavigate();
  return (
    <div className="main-body aboutme">
      <div className="about-self">
        <p>
          <b>Steve Don.</b>A Student from Kisii University in Kenya pursuing
          Computer Science Degree. Passsionate in tech stuff and their technical
          working I mainly major in software development. Full Stack engineering
          is my path.I came to realize that this is a never ending learning
          process.First I had to learn how to learn so as to enjoy this journey.
          <br />
          <b style={{ margin: "10px", padding: "10px", color: "blueviolet" }}>
            #Team_Jesus_Always
          </b>
        </p>
      </div>
      <div className="soft-skill-container">
        <h2>Soft Skills</h2>
        <div className="skills">
          <h3>Team Leader/Entrepreneurship</h3>
          <p>
            For some time I have been able to showcase my leadership skills
            which has turned out successful. Currently am leading a team of four
            people whereby we Process and Sell Yoghurt in Kisii University. It's
            been a successful and Inspiring project and we love it.We have
            managed this through:
            <br />
            <ul>
              <li>Team motivation</li>
              <li>Team Vision and mission</li>
              <li>Right communication</li>
              <li>Team Collaboration</li>
              <li>Adaptability and persistence</li>
            </ul>
          </p>
        </div>
        <div className="skills">
          <h3>Sales and Marketing</h3>
          <p>Am a selft-taught sales and marketer</p>
          <p>
            Through online platforms like youtube and articles and blogs on the
            internet, i have been able to acquire knowledge on how to develop,
            sell and scale products with the consumer in mind. The consumer is
            always the number one priority in business. I have been able to
            understand the consumer psycology. All I can say is knowledge is
            power.
          </p>
        </div>
        <div className="skills">
          <h3>Problem Solver & Critical Thinker</h3>
          <p>
            Am able to break big problems into smaller chunks. I study and
            analyse the cause and effect in detail and find solution
          </p>
        </div>
      </div>
      <div className="hobbies">
        <h3>Hobbies</h3>
        <ol>
          <li>Learning new things</li>
          <li>Serving people</li>
          <li>Listening to Podcasts</li>
          <li>Volunteering and Helping others</li>
          <li>Travelling and Photography</li>
          <li>Team Sport</li>
        </ol>
      </div>
      <div className="personality">
        <h3>Personality</h3>
        <p>Detail Oriented.</p>
        <p>Strive for creativity in my niche.</p>
        <p>Analytical.</p>
        <p>Secretive.</p>
        <p>Napenda kuimba sana despite sauti mbaya</p>
        <p>Mi ni ule msee hudance pekee yangu kejani</p>
      </div>
      <div className="contact">
        <div
          onClick={() => {
            window.open("https://github.com/stevedon1", "_blank");
          }}
        >
          <i className="fa-brands fa-github"></i>
        </div>
        <div
          onClick={() => {
            window.open("https://www.linkedin.com/in/steve-dongich", "_blank");
          }}
        >
          <i class="fa-brands fa-linkedin-in"></i>
        </div>
        <div
          onClick={() => {
            window.open("https://x.com/SDongich", "_blank");
          }}
        >
          <i class="fa-brands fa-x-twitter"></i>
        </div>
        <div
          onClick={() => {
            window.open("https://www.instagram.com/_dongich/", "_blank");
          }}
        >
          <i class="fa-brands fa-instagram"></i>
        </div>
      </div>
      <div className="back-button-container">
        <button
          onClick={() => {
            navigate("/projects");
          }}
        >
          <i className="fa-solid fa-arrow-left"></i>Projects
        </button>
      </div>
    </div>
  );
}
