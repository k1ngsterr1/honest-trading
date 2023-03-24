import React from "react";

import { Link } from "react-scroll";

// Icons
import { BsFillTelephoneFill } from "react-icons/bs";

// Styles
import styles from "../styles/main-styles/main.css";

// Assets
import logo from "../assets/honest_trading.png";
import blob from "../assets/main_blob.svg";
import DownSeparator from "../components/DownSeparator";

// Animation
import Slide from "react-reveal/Slide";

const MainScreen = () => {
  return (
    <div className="main-screen" id="main">
      <main className="main-container">
        {/* Navigation */}
        <nav className="navigation">
          <img className="honest-trading-logo" src={logo} alt="logo"></img>
          <div className="navigation-links">
            <a className="main">Главная</a>
            <Link className="about-us" to="about-screen" smooth={true}>
              О нас
            </Link>
            <Link className="contact-with-us" to="contact-us" smooth={true}>
              Связаться с нами
            </Link>
          </div>
        </nav>
        <Slide left>
          <div className="main-content">
            <h1 className="main-heading">
              Экспорт <span className="yellow">Зерна</span>
            </h1>
            <p className="main-paragraph">
              Lorem ipsum dolor sit amet consectetur. Dolor volutpat in sed eget
              cursus aliquam ac. A magna et phasellus mauris. Neque curabitur
              justo imperdiet venenatis viverra ullamcorper neque amet eget. At
              non laoreet id vitae vel.
            </p>
            <button className="consultation-button">
              <BsFillTelephoneFill className="phone-icon"></BsFillTelephoneFill>
              Получить консультацию
            </button>

            <DownSeparator></DownSeparator>
          </div>
        </Slide>
      </main>
      <img className="blob" src={blob}></img>
    </div>
  );
};

export default MainScreen;
