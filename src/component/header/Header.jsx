import React from "react";
import "./header.scss";
import logobox from "../../assets/img/thebox.png";

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <a href="#">
          <img src={logobox} alt="thebox" />
        </a>
        <nav className="header-menu">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Proyects</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
