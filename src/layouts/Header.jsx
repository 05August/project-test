import React from "react";
import logo from "../assets/img/logo.png";
import { NAV_DATA } from "../constants/constants";

const renderNav = () => {
  return (
    <ul>
      {NAV_DATA.map((navItem, index) => {
        return (
          <li key={`${navItem.title}-${index}`}>
            <a href="#">{navItem.title}</a>
          </li>
        );
      })}
    </ul>
  );
};

const Header = () => {
  return (
    <header className="header">
      <div className="header__left">
        <a href="#" className="header__left--logo">
          <img src={logo} alt="ninjaMail" />
          <h1>NinjaMail</h1>
        </a>
      </div>
      <div className="header__right">
        <div className="header__right--nav">{renderNav()}</div>
        <div className="header__right--login">
          <a href="#">sign up free</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
