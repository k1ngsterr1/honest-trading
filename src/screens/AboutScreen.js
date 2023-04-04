import React from "react";

// styles
import styles from "../styles/about-styles/about.css";

// Element
import DownSeparator from "../components/DownSeparator";

// image
import wheatPhoto from "../assets/wheat-about-google.png";

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
              <span className="s-01-mob">01</span>
              <p className="description-01">
                Компания "Honest Trading" - это профессиональная команда,
                занимающаяся торговлей зерном высокого качества.
              </p>
              <span className="s-01">01</span>
            </div>
            <div className="second">
              <span className="s-02-mob">02</span>
              <p className="description-02">
                Наша компания имеет многолетний опыт в отрасли и предоставляет
                широкий спектр услуг по продаже зерновых культур, а также услуги
                по их хранению и перевозке.
              </p>
              <span className="s-02">02</span>
            </div>
            <div className="third">
              <span className="s-03-mob">03</span>
              <p className="description-03">
                Мы готовы предоставить вам только лучшее качество зерна по
                доступным ценам. Обращайтесь к нам сегодня, чтобы получить
                высококачественный товар и узнать, как мы можем помочь вам
                достичь успеха в вашем бизнесе!
              </p>
              <span className="s-03">03</span>
            </div>
          </div>
          <DownSeparator></DownSeparator>
        </Slide>
      </div>
      <img className="wheat-about" src={wheatPhoto} alt="wheat"></img>
    </div>
  );
};

export default AboutScreen;
