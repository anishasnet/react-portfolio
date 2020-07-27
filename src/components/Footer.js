import React from "react";

const Footer = () => (
    <>
  <div className="footer">
    <a href="https://github.com/anishasnet" target="_blank"rel="noopener noreferrer">
        <img alt="GitHub" className= {["footer-img", "footer-link"]} id="github" src={require("../assets/icons/github.png")} />
    </a> 

    <a href="https://www.linkedin.com/in/anisha-sinha-057170165/" target="_blank" rel="noopener noreferrer">
        <img alt="LinkedIn" className= {["footer-img", "footer-link"]} src={require("../assets/icons/linkedin.png")} />
    </a> 

    <a href="https://stackoverflow.com/users/12996399/anishasnet" target="_blank" rel="noopener noreferrer">
        <img alt="StackOverflow" className= {["footer-img", "footer-link"]} src={require("../assets/icons/stackoverflow.png")} />
    </a> 
  </div>
  </>
);

export default Footer;