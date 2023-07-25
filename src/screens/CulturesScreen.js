import React from "react";

// Link
import { Link } from "react-scroll";

// images
import softWheat from "../assets/wheat-soft.png";
import hardWheat from "../assets/wheat-hard.png";
import raps from "../assets/raps.png";
import brown from "../assets/brown.png";
import gold from "../assets/gold.png";
import arrow from "../assets/arrow.svg";

// styles
import styles from "../styles/cultures-styles/cultures.css";

// Animation
import Bounce from "react-reveal/Bounce";

const CulturesScreen = () => {
  return (
    <div className="culture-screen" id="culture">
      <div className="culture-container">
        <h3 className="culture-heading">
          ПОСТАВЛЯЕМЫЕ
          <span className="yellow-cultures"> КУЛЬТУРЫ</span>
        </h3>
        <Bounce bottom>
          <p className="culture-paragraph">
            Наша компания предлагает широкий ассортимент сельхозпродукции для
            экспорта:
          </p>
          <div className="cultures-photo">
            <div className="soft-wheat-container">
              <img
                className="soft-wheat"
                src={softWheat}
                alt="soft-wheat"
              ></img>
              <h6 className="soft-wheat-heading">Пшеница мягкая</h6>
            </div>
            <div className="hard-wheat-container">
              <img
                className="hard-wheat"
                src={hardWheat}
                alt="checheviza"
              ></img>
              <h6 className="hard-wheat-heading">Чечевица</h6>
            </div>
            <div className="brown-container">
              <img className="brown" src={brown} alt="brown"></img>
              <h6 className="brown-heading">Семена льна коричневого</h6>
            </div>
            <div className="gold-container">
              <img className="gold" src={gold} alt="yachmen"></img>
              <h6 className="gold-heading">Ячмень</h6>
            </div>
            <div className="raps-container">
              <img className="raps" src={raps} alt="raps"></img>
              <h6 className="raps-heading">Семена подсолнечника</h6>
            </div>
          </div>
          <Link to="form" smooth={true} className="contact-with-us">
            Связаться с нами
          </Link>
          <img className="arrow" src={arrow} alt="arrow"></img>
        </Bounce>
      </div>
    </div>
  );
};

export default CulturesScreen;
