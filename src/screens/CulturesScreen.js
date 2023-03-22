import React from "react";

// images
import softWheat from "../assets/wheat_soft.svg";
import hardWheat from "../assets/wheat_hard.svg";
import raps from "../assets/raps.svg";
import brown from "../assets/brown.svg";
import gold from "../assets/gold.svg";
import arrow from "../assets/arrow.svg";

// styles
import styles from "../styles/cultures-styles/cultures.css";

const CulturesScreen = () => {
  return (
    <div className="culture-screen">
      <div className="culture-container">
        <h3 className="culture-heading">
          ПОСТАВЛЯЕМЫЕ <span className="yellow-cultures">КУЛЬТУРЫ</span>
        </h3>
        <p className="culture-paragraph">
          Lorem ipsum dolor sit amet consectetur. Faucibus id massa volutpat
          turpis. Sagittis et mattis vitae diam consectetur sollicitudin.
        </p>
        <div className="cultures-photo">
          <div className="soft-wheat-container">
            <img className="soft-wheat" src={softWheat}></img>
            <h6 className="soft-wheat-heading">Пшеница мягкая</h6>
          </div>
          <div className="hard-wheat-container">
            <img className="hard-wheat" src={hardWheat}></img>
            <h6 className="hard-wheat-heading">Пшеница твердая (дурум)</h6>
          </div>
          <div className="brown-container">
            <img className="brown" src={brown}></img>
            <h6 className="brown-heading">Семена льна коричневого</h6>
          </div>
          <div className="gold-container">
            <img className="gold" src={gold}></img>
            <h6 className="brown-heading">Семена льна золотистого</h6>
          </div>
          <div className="raps-container">
            <img className="gold" src={raps}></img>
            <h6 className="raps-heading">Рапс</h6>
          </div>
          <button className="contact-with-us">Связаться с нами</button>
          <img className="arrow" src={arrow}></img>
        </div>
      </div>
    </div>
  );
};

export default CulturesScreen;
