import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <header className="header">
      <nav className="nav container">
        <a href="#home" className="nav_logo">
          Kiran
        </a>

        <ul className="nav_list grid">
          <li className="nav_item">
            <a href="#home" className="nav_link">
              Home
            </a>
          </li>
          <li className="nav_item">
            <a href="#skills" className="nav_link">
              Skills
            </a>
          </li>
          <li className="nav_item">
            <a href="#projects" className="nav_link">
              Projects
            </a>
          </li>

          <li className="nav_item">
            <a href="#contact" className="nav_link">
              Hire me
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
