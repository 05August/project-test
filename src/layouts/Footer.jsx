import React from "react";
import logo from "../assets/img/logo.png";
import { FOOTER_LINK } from "../constants/constants";
import { Col } from "antd";

const renderFooterLink = () => {
  return FOOTER_LINK.map((column, index) => {
    return (
      <div key={`column-${index}`} className="column-link">
        {column.map((element, index) => {
          return (
            <ul key={`columnitem--${index}`}>
              {element.map((item) => {
                return (
                  <li key={item}>
                    <a href="#">{item}</a>{" "}
                  </li>
                );
              })}
            </ul>
          );
        })}
      </div>
    );
  });
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container-section">
        <div className="footer__container--top">
          <a href="#" className="footer__logo">
            <img src={logo} alt="ninjaMail" />
            <h1>NinjaMail</h1>
          </a>
          <div className="footer__link">{renderFooterLink()}</div>
        </div>
        <div className="footer__container--bot">
          <p>
            NinjaMail is a sample project for Quest AI. © 2019 Quest AI, All rights
            reserved.
          </p>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
