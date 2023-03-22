import React from "react";

import { Link } from "react-scroll";

import logo from "../assets/honest_trading.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="logo-container">
        <img className="logo" src={logo}></img>
        <p className="footer-paragraph">
          Lorem ipsum dolor sit amet consectetur. Faucibus id massa volutpat
          turpis. Sagittis et mattis vitae diam consectetur sollicitudin.
        </p>
      </div>
      <nav className="footer-navigation">
        <Link className="main-footer-link">Главная</Link>
        <Link className="about-footer-link">О нас</Link>
        <Link className="contact-footer-link">Связаться с нами</Link>
      </nav>
    </footer>
  );
};

export default Footer;
