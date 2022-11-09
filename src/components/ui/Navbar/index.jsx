import React from "react";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">Kiran</div>
      <ul className="app__navbar-links">
        {["Skills", "Projects", "Hire Me"].map((item) => (
          <li className="app__flex" key={`link-${item}`}>
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
