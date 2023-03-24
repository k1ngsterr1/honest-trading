import React from "react";

// styles
import styles from "../styles/about-styles/about.css";

// Element
import DownSeparator from "../components/DownSeparator";

// image
import wheatPhoto from "../assets/wheat-about.svg";

// Animation
import Slide from "react-reveal/Slide";

const AboutScreen = () => {
  return (
    <div className="about-screen" id="about">
      <div className="about-container">
        <h3 className="about-heading">О НАС</h3>
        <Slide right>
          <div className="number-list">
            <div className="first">
              <p className="description-01">
                Lorem ipsum dolor sit amet consectetur. Faucibus id massa
                volutpat turpis. Sagittis et mattis vitae diam consectetur
                sollicitudin.
              </p>
              <span className="s-01">01</span>
            </div>
            <div className="second">
              <p className="description-02">
                Lorem ipsum dolor sit amet consectetur. Faucibus id massa
                volutpat turpis. Sagittis et mattis vitae diam consectetur
                sollicitudin.
              </p>
              <span className="s-02">02</span>
            </div>
            <div className="third">
              <p className="description-03">
                Lorem ipsum dolor sit amet consectetur. Faucibus id massa
                volutpat turpis. Sagittis et mattis vitae diam consectetur
                sollicitudin.
              </p>
              <span className="s-03">03</span>
            </div>
          </div>
          <DownSeparator></DownSeparator>
        </Slide>
      </div>
      <img className="wheat-about" src={wheatPhoto}></img>
    </div>
  );
};

export default AboutScreen;
