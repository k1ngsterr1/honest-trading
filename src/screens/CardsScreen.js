import React from "react";

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
      <Card
        view={require("../assets/wheat.svg")}
        heading="Заголовок"
        description="Lorem ipsum dolor sit amet consectetur. Nunc donec ullamcorper viverra lectus quis pretium volutpat eget. Aliquam ultrices tincidunt nulla commodo."
      />
      <Card
        view={require("../assets/HandShake.svg")}
        heading="Заголовок"
        description="Lorem ipsum dolor sit amet consectetur. Nunc donec ullamcorper viverra lectus quis pretium volutpat eget. Aliquam ultrices tincidunt nulla commodo."
      />
      <Card
        view={require("../assets/MoneyHand.svg")}
        heading="Заголовок"
        description="Lorem ipsum dolor sit amet consectetur. Nunc donec ullamcorper viverra lectus quis pretium volutpat eget. Aliquam ultrices tincidunt nulla commodo."
      />
      <Card
        view={require("../assets/Truck.svg")}
        heading="Заголовок"
        description="Lorem ipsum dolor sit amet consectetur. Nunc donec ullamcorper viverra lectus quis pretium volutpat eget. Aliquam ultrices tincidunt nulla commodo."
      />
    </div>
  );
};

export default CardsScreen;
