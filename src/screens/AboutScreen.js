import React from "react";

// image
import wheatPhoto from "../assets/wheat-about.svg";

const AboutScreen = () => {
  return (
    <div className="about-screen">
      <div className="about-container">
        <h3 className="about-heading">О НАС</h3>
        <div className="number-list">
          <div className="first">
            <span className="01">01</span>
            <p className="description-01">
              Lorem ipsum dolor sit amet consectetur. Faucibus id massa volutpat
              turpis. Sagittis et mattis vitae diam consectetur sollicitudin.
            </p>
          </div>
          <div className="second">
            <span className="02">02</span>
            <p className="description-02">
              Lorem ipsum dolor sit amet consectetur. Faucibus id massa volutpat
              turpis. Sagittis et mattis vitae diam consectetur sollicitudin.
            </p>
          </div>
          <div className="third">
            <span className="03">03</span>
            <p className="description-03">
              Lorem ipsum dolor sit amet consectetur. Faucibus id massa volutpat
              turpis. Sagittis et mattis vitae diam consectetur sollicitudin.
            </p>
          </div>
        </div>
        <DownSeparator></DownSeparator>
      </div>
      <img className="wheat-about" src={wheatPhoto}></img>
    </div>
  );
};

export default AboutScreen;
