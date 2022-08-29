import React, { useState } from "react";
import "./header.css";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav_logo">
          Kiran
        </a>

        <div className={toggle ? "nav_menu show-menu" : "nav_menu"}>
          <ul className="nav_list grid">
            <li className="nav_item">
              <a href="#home" className="nav_link active-link">
                <i className="uil uil-estate nav_icon" />
                Home
              </a>
            </li>

            <li className="nav_item">
              <a href="#about" className="nav_link">
                <i className="uil uil-user nav_icon" />
                Skills
              </a>
            </li>

            <li className="nav_item">
              <a href="#about" className="nav_link">
                <i className="uil uil-user nav_icon" />
                About
              </a>
            </li>

            <li className="nav_item">
              <a href="#Qualification" className="nav_link">
                <i className="uil uil-file-alt nav_icon" />
                Qualification
              </a>
            </li>
            <li className="nav_item">
              <a href="#Projects" className="nav_link">
                <i className="uil uil-scenery nav_icon" />
                Projects
              </a>
            </li>

            <li className="nav_item">
              <a href="#Contact" className="nav_link">
                <i className="uil uil-message nav_icon" />
                Contact
              </a>
            </li>
          </ul>

          <i
            className="uil uil-times nav_close"
            onClick={() => setToggle(!toggle)}
          />
        </div>

        <div className="nav_toggle" onClick={() => setToggle(!toggle)}>
          <i className="uil uil-apps" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
