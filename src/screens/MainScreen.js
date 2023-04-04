import React from "react";

import { Link } from "react-scroll";
import { useState } from "react";

// Icons
import { BsFillTelephoneFill } from "react-icons/bs";

// Styles
import styles from "../styles/main-styles/main.css";

// Assets
import logo from "../assets/honest_trading.png";
import blob from "../assets/main_blob.svg";
import DownSeparator from "../components/DownSeparator";
import wheat from "../assets/wheat-main.png";

// Animation
import Slide from "react-reveal/Slide";

import { AiOutlineClose } from "react-icons/ai";
import NavLinks from "../components/NavLinks";
import { GiHamburgerMenu } from "react-icons/gi";

const MainScreen = () => {
  const [open, setOpen] = useState(false);

  const hamburgerMenu = (
    <GiHamburgerMenu
      className="burger-menu"
      onClick={() => setOpen(!open)}
    ></GiHamburgerMenu>
  );

  const closeMenu = (
    <AiOutlineClose
      className="cross"
      onClick={() => setOpen(!open)}
    ></AiOutlineClose>
  );

  return (
    <div className="main-screen" id="main">
      <main className="main-container">
        {/* Navigation */}
        <nav className="navigation">
          <img className="honest-trading-logo" src={logo} alt="logo"></img>
          <div className="navigation-links">
            <Link className="main" smooth={true} to="main">
              Главная
            </Link>
            <Link className="about-us" to="about-screen" smooth={true}>
              О нас
            </Link>
            <Link className="contact-with-us" to="contact" smooth={true}>
              Связаться с нами
            </Link>
          </div>
          <div className="for-burger-menu">
            {open ? closeMenu : hamburgerMenu}
            {open && <NavLinks />}
          </div>
        </nav>
        <Slide left>
          <div className="main-content">
            <h1 className="main-heading">
              Честный <span className="yellow">зерновой</span> бизнес с honest{" "}
              <span className="yellow">trading.</span>
            </h1>
            <p className="main-paragraph">
              Наша компания предлагает услуги по торговле зерном высокого
              качества. Мы специализируемся на продаже зерновых культур, таких
              как пшеница, ячмень, овес и других, а также предоставляем услуги
              по их хранению и перевозке.
            </p>
            <Link to="form" smooth={true} className="consultation-button">
              <BsFillTelephoneFill className="phone-icon"></BsFillTelephoneFill>
              Получить консультацию
            </Link>
            <DownSeparator></DownSeparator>
          </div>
        </Slide>
      </main>
      <img className="main-screen-image" src={wheat} alt="wheat"></img>
      <img className="blob" src={blob} alt="blob"></img>
    </div>
  );
};

export default MainScreen;
