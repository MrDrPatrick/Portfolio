import React from "react";
import "./Footer.css";

function Footer() {
  const theDate = new Date();
  return (
    <footer id="footer">
      <p className="bottom-text">© Daniel Hanna {theDate.getFullYear()}</p>
    </footer>
  );
}

export default Footer;
