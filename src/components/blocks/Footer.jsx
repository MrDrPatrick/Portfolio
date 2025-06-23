import React from "react";
import "./Footer.css";

function Footer() {
  const theDate = new Date();
  return (
    <footer id="footer">
      <a href="https://www.linkedin.com/in/daniel-hanna-dev" target="_blank" rel="noopener noreferrer">
        <img className="link-icon" src="/images/icons/linkin.svg" alt="Linkedin" />
      </a>
      <p className="bottom-text">© Daniel Hanna {theDate.getFullYear()}</p>
    </footer>
  );
}

export default Footer;
