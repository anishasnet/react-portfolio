import React from "react";
const Resume = () => (
  // <div>
  //   <h1 className="resume-list">Resume</h1>

  //   <div className="resume-link">
  //   <a href="https://docs.google.com/document/d/1jY2DqsmcsZDrVT3K8D8xEQ9THtNKiTII30Fd-2XDDxA/edit?usp=sharing" target="blank" alt="Resume">Resume for Download</a>
  //   </div>

    <div className="resume-main">
      <div>
        <h1 className="resume-list" id="section-title">Resume</h1>

        <div className="resume-link">
          <a href="https://docs.google.com/document/d/1jY2DqsmcsZDrVT3K8D8xEQ9THtNKiTII30Fd-2XDDxA/edit?usp=sharing" target="blank" alt="Resume">Download Here</a>
        </div>
        <div>
            <h4 className="">Proficiencies</h4>
        </div>
        <div>
          <ul className="proficiency-list">
            <li>Java</li>
            <li>C</li>
            <li>Javascript</li>
            <li>MySQL, Sequelize, SQlite</li>
            <li>MongoDB</li>
            <li>MERN Stack</li>
            <li>HTML, CSS, Bootstrap</li>
            <li>Handlebars</li>
            <li>Local Storage, IndexedDB</li>
          </ul>
        </div>
    </div>
  </div>
);

export default Resume;