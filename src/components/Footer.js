import React from "react";

const Footer = () => (
    <>
  <div className="footer">
    <a href="https://github.com/anishasnet" target="_blank" rel="noopener noreferrer">
        <img alt="GitHub" className="footer-img" src={require("../assets/icons/github.png")} />
    </a> 

    <a href="https://www.linkedin.com/in/izabela-petrovicova-320b1620/" target="_blank" rel="noopener noreferrer">
        <img alt="LinkedIn" className="footer-img" src={require("../assets/icons/linkedin.png")} />
    </a> 
  </div>
  </>
);

export default Footer;