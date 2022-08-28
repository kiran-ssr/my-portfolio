import React from "react";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav_logo">
          Kiran
        </a>

        <div className="nav_menu">
          <ul className="nav_list grid">
            <li className="nav_item">
              <a href="" className="nav_link">
                <i className="uil-nav_icon" />
              </a>
            </li>

            <li className="nav_item">
              <a href="" className="nav_link">
                <i className="uil-nav_icon" />
              </a>
            </li>

            <li className="nav_item">
              <a href="" className="nav_link">
                <i className="uil-nav_icon" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
