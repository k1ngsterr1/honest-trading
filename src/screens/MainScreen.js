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

import { slide as Menu } from "react-burger-menu";

// Styles
import wheatMobile from "../assets/mobile-wheat.png";

var cross_styles = {
  bmBurgerButton: {
    position: "fixed",
    width: "clamp(16px,1.6666666666666667vw,64px)",
    height: "clamp(11px,5.314009661835748vw,44px)",
    right: "clamp(16px,7.729468599033816vw,64px)",
    top: "clamp(22.5px,10.869565217391305vw,90px)",
  },
  bmBurgerBars: {
    background: "#D6BF1C",
    width: "clamp(14px,6.763285024154589vw,56px)",
    height: "clamp(1.5px,0.7246376811594203vw,6px)",
    borderRadius: "120px",
  },
  bmBurgerBarsHover: {
    background: "#1f1f1f",
  },
  bmCrossButton: {
    height: "32px",
    width: "32px",
    left: "200px",
    right: "clamp(32px,3.3333333333333335vw,128px)",
    top: "30px",
    bottom: "0",
    overflowX: "hidden",
  },
  bmCross: {
    background: "#305A02",
    width: "3px",
    height: "25px",
  },
  bmMenuWrap: {
    width: "clamp(125px,60.38647342995169vw,500px)",
    position: "fixed",
    height: "100%",
    top: "0px",
  },
  bmMenu: {
    background: "#fff",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em",
    overflowX: "hidden",
    overflowY: "hidden",
    boxShadow: "0px 0px 37px 15px rgba(0, 0, 0, 0.25)",
  },
  bmMorphShape: {
    fill: "#373a47",
  },
  bmItemList: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    paddingRight: "clamp(136px,14.166666666666666vw,544px)",
    paddingTop: "clamp(32px,15.458937198067632vw,128px)",
    fontFamily: "Source Sans Pro",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "clamp(10px,4.830917874396135vw,40px)",
    textAlign: "right",
    color: "#D6BF1C",
    overflowX: "hidden",
  },
  bmItem: {
    display: "inline-block",
    marginTop: "clamp(12px,5.797101449275362vw,48px)",
  },
};

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
          <nav className="mobile-burger">
            <Menu right styles={cross_styles}>
              <Link
                to="about"
                className="about-mob-link"
                id="about-n"
                smooth={true}
              >
                О компании
              </Link>
              <Link
                to="culture"
                className="services-mob-link"
                id="services-n"
                smooth={true}
              >
                Культуры
              </Link>
              <Link
                to="contact"
                className="contacts-mob-link"
                id="contacts-n"
                smooth={true}
              >
                Контакты
              </Link>
            </Menu>
          </nav>
        </nav>
        <Slide left>
          <div className="main-content">
            <h1 className="main-heading">
              Честный <span className="yellow">зерновой</span> бизнес с honest{" "}
              <span className="yellow">trading.</span>
            </h1>
            <p className="main-paragraph">
              Наша компания является надежным и опытным игроком в
              зерно-трейдинговой индустрии. Наше качество продукции, надежные
              поставки, глобальное присутствие и клиентская ориентированность
              делают нас предпочтительным партнером для клиентов, и мы гордимся
              тем, что предоставляем надежные решения для мировой зерновой
              торговли.
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
      <img className="wheat-mobile" src={wheatMobile} alt="wheat field"></img>
    </div>
  );
};

export default MainScreen;
