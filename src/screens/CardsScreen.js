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
          heading="Заголовок"
          description="Lorem ipsum dolor sit amet consectetur. Nunc donec ullamcorper viverra lectus quis pretium volutpat eget. Aliquam ultrices tincidunt nulla commodo."
        />
        <Card
          view={handShake}
          heading="Заголовок"
          description="Lorem ipsum dolor sit amet consectetur. Nunc donec ullamcorper viverra lectus quis pretium volutpat eget. Aliquam ultrices tincidunt nulla commodo."
        />
        <Card
          view={moneyHand}
          heading="Заголовок"
          description="Lorem ipsum dolor sit amet consectetur. Nunc donec ullamcorper viverra lectus quis pretium volutpat eget. Aliquam ultrices tincidunt nulla commodo."
        />
        <Card
          view={truck}
          heading="Заголовок"
          description="Lorem ipsum dolor sit amet consectetur. Nunc donec ullamcorper viverra lectus quis pretium volutpat eget. Aliquam ultrices tincidunt nulla commodo."
        />
      </Bounce>
    </div>
  );
};

export default CardsScreen;
