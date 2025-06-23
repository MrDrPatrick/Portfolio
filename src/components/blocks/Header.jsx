import React, { useEffect, useRef } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import "./Header.css";

const titles = ["Game Developer", "Full‑stack Developer", "Software Engineer", "Designer"];

function Header() {
  const [index, setIndex] = React.useState(0);
  const nodeRef = useRef(null);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <header id="header" className="gradient-background">
      <h1 className="my-name">Daniel Hanna</h1>

      <SwitchTransition mode="out-in">
        <CSSTransition key={titles[index]} nodeRef={nodeRef} timeout={{ enter: 1000, exit: 800 }} classNames="dust" unmountOnExit>
          <h2 className="tag-line">{titles[index]}</h2>
        </CSSTransition>
      </SwitchTransition>
    </header>
  );
}

export default Header;
