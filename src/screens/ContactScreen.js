import React from "react";

import styles from "../styles/contact-styles/contact.css";

const ContactScreen = () => {
  return (
    <div className="contact-screen">
      <div className="contact-container">
        <h3 className="contact-heading">СВЯЗАТЬСЯ</h3>
        <h4 className="contact-heading-second">
          ПОЛУЧИТЕ КОНСУЛЬТАЦИЮ ОТ ЭКСПЕРТА!
        </h4>
        <p className="contact-paragraph">
          Lorem ipsum dolor sit amet consectetur. Aliquam id metus est eleifend
          tempus proin hendrerit sed. Tellus amet vel luctus dapibus ornare
          aliquet. Mattis neque facilisi varius lacus urna feugiat ac. Felis in
          risus cras nunc viverra vitae volutpat venenatis.
        </p>
        <form className="form">
          <h5 className="form-heading">Оставить заявку на консультацию</h5>
          <div className="name-container">
            <h6 className="name-heading">Ваше ФИО</h6>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactScreen;
