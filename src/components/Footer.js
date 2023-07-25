import React from "react";

// styles
import styles from "../styles/footer-styles/footer.css";

// Link
import { Link } from "react-scroll";

// Logo
import logo from "../assets/honest_trading.png";
import triangle from "../assets/Triangle.svg";

// Icons
import { MdArrowDropUp } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="logo-container">
          <img className="logo" src={logo}></img>
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
      <span className="footer-separator"></span>
      <p className="footer-text">Copyright Honest Trading</p>
      <div className="spark">
        <div className="spark-content">
          <span className="spark-text">Разработано в</span>
          <img
            className="triangle"
            src={triangle}
            onClick={() => window.open("https://sparkstudio.kz/", "_blank")}
            alt="spark-studio"
          ></img>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
