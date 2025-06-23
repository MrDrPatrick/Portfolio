import React from "react";
import "./Menu.css";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

function Menu() {
  const [isOpen, setIsOpen] = React.useState(false);

  function toggleMenu() {
    setIsOpen((prev) => !prev);
  }

  if (isOpen) {
    return (
      <div id="menu-open">
        <ul className="nav">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Experience</a>
          </li>
          <li>
            <a href="#features">Projects</a>
          </li>
        </ul>
        <button className="menu-button-open" onClick={toggleMenu}>
          <MenuRoundedIcon />
        </button>
      </div>
    );
  } else {
    return (
      <div id="menu-closed">
        <button className="menu-button" onClick={toggleMenu}>
          <MenuRoundedIcon />
        </button>
      </div>
    );
  }
}

export default Menu;
