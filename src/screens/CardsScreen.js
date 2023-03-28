import React from "react";

import styles from "../styles/card-styles/cards.css";

import Bounce from "react-reveal/Bounce";

import wheat from "../assets/Wheat-Icon.svg";
import handShake from "../assets/HandShake.svg";
import moneyHand from "../assets/MoneyHand.svg";
import truck from "../assets/Truck.svg";

const CardsScreen = () => {
  function Card(props) {
    return (
      <div className="card-content">
        <img className="card-image" src={props.view}></img>
        <h6 className="card-header">{props.heading}</h6>
        <p className="card-paragraph">{props.description}</p>
      </div>
    );
  }

  return (
    <div className="cards-container">
      <Bounce bottom>
        <Card
          view={wheat}
          heading="Лучшее качество"
          description=" Мы тщательно отбираем зерно от производителей-партнеров, чтобы обеспечить нашим клиентам только высококачественный продукт."
        />
        <Card
          view={handShake}
          heading="Партнерство"
          description="Мы готовы стать вашим надежным партнером в торговле зерном. Мы стремимся к долгосрочным отношениям и предлагаем честные условия сотрудничества."
        />
        <Card
          view={moneyHand}
          heading="Лучшие цены"
          description="Компания Honest Trading предлагает лучшие цены на зерновые культуры на рынке. Мы постоянно отслеживаем изменения цен и стараемся предоставлять нашим клиентам самые выгодные условия покупки"
        />
        <Card
          view={truck}
          heading="Логистика"
          description="Компания Honest Trading является экспортером зерновых культур высокого качества. Мы предлагаем широкий выбор зерновых культур и готовы к экспорту в различные страны мира."
        />
      </Bounce>
    </div>
  );
};

export default CardsScreen;
