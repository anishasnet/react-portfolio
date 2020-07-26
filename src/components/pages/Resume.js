import React from "react";
const Resume = () => (
  <div>
    <h1 className="resume-list">Resume</h1>

    <div className="resume-link">
    <a href="https://docs.google.com/document/d/1jY2DqsmcsZDrVT3K8D8xEQ9THtNKiTII30Fd-2XDDxA/edit?usp=sharing" target="blank" alt="Resume">Resume for Download</a>
    </div>

    <div className="resume-main">
        <div>
            <h4 className="">Proficiencies</h4>
        </div>
        <div>
            <ul>Java</ul>
            <ul>C</ul>
            <ul>Javascript</ul>
            <ul>MySQL, Sequelize, SQlite</ul>
            <ul>MongoDB</ul>
            <ul>MERN Stack</ul>
            <ul>HTML, CSS, Bootstrap</ul>
            <ul>Handlebars</ul>
            <ul>Local Storage, IndexedDB</ul>
        </div>
    </div>
  </div>
);

export default Resume;