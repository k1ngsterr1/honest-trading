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
            <input
              className="name-input"
              type="text"
              name="name"
              required={true}
              placeholder="Иван Иванов Иванович"
            ></input>
          </div>
          <div className="phone-container">
            <h6 className="phone-heading">Номер телефона</h6>
            <input
              className="phone-input"
              type="tel"
              minLength="10"
              maxLength="11"
              name="phone"
              required={true}
              placeholder="+7 (___) ___ - __ - __"
            ></input>
          </div>
          <div className="email-container">
            <h6 className="email-heading">Почта</h6>
            <input
              className="email-input"
              type="email"
              name="email"
              required={true}
              placeholder="example@gmail.com"
            ></input>
          </div>
          <p className="form-paragraph">
            Мы свяжемся с Вами в ближайшее время. Ваши данные не будут переданы
            третьим лицам.
          </p>
          <button className="form-button" value="Send">
            Отправить
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactScreen;
