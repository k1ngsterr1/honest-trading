import React from "react";

// styles
import styles from "../styles/footer-styles/footer.css";

// Link
import { Link } from "react-scroll";

// Logo
import logo from "../assets/honest_trading.png";

// Icons
import { MdArrowDropUp } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="logo-container">
          <img className="logo" src={logo}></img>
          <p className="footer-paragraph">
            Lorem ipsum dolor sit amet consectetur. Faucibus id massa volutpat
            turpis. Sagittis et mattis vitae diam consectetur sollicitudin.
          </p>
        </div>
        <nav className="footer-navigation">
          <Link to="main" smooth={true} className="main-footer-link">
            Главная
          </Link>
          <Link to="about" smooth={true} className="about-footer-link">
            О нас
          </Link>
          <Link to="contact" smooth={true} className="contact-footer-link">
            Связаться с нами
          </Link>
        </nav>
        <Link to="main" smooth={true} className="upper-button">
          Подняться вверх
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
