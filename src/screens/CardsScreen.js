import React from "react";

import styles from "../styles/card-styles/cards.css";

import Bounce from "react-reveal/Bounce";

import wheat from "../assets/Wheat-Icon.svg";
import handShake from "../assets/HandShake.svg";
import moneyHand from "../assets/world.svg";
import truck from "../assets/Truck.svg";

const CardsScreen = () => {
  function Card(props) {
    return (
      <div className="card-content last">
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
          heading="Качество"
          description="Наша компания строго следит за стандартами качества и безопасности продукции. Вся сельхозпродукция соответствует международным нормам и требованиям"
        />
        <Card
          view={handShake}
          heading="Партнерство"
          description="Мы стремимся к установлению долгосрочных партнерских отношений с нашими клиентами. Взаимовыгодное сотрудничество и доверие - это основа нашей работы."
        />
        <Card
          view={moneyHand}
          heading="Глобальность"
          description="Наша компания активно участвует в международной торговле зерном и имеет прочные связи с клиентами и партнерами по всему миру. Это позволяет нам эффективно управлять международными сделками."
        />
        <Card
          view={truck}
          heading="Логистика"
          description="Мы занимается экспортом зерна в различные страны, предоставляя качественную продукцию и эффективные логистические решения для своих клиентов."
        />
      </Bounce>
    </div>
  );
};

export default CardsScreen;
