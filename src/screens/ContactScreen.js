import React from "react";

import styles from "../styles/contact-styles/contact.css";

// EmailJS
import emailjs from "@emailjs/browser";
// Hooks
import { useRef } from "react";
import { useState } from "react";

// Popup
import Popup from "reactjs-popup";

// Assets
import phoneIcon from "../assets/phone-icon.svg";
import emailIcon from "../assets/email-icon.svg";

const ContactScreen = () => {
  const form = useRef();

  const [fullName, setFullName] = useState("");
  const [sendText, setSentText] = useState("Отправить");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [mail, setMail] = useState("");

  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);

  function sendEmail(e) {
    e.preventDefault();
    // setSent("sended");
    setFullName("");
    setPhoneNumber("");
    setMail("");
    setOpen((o) => !o);

    emailjs
      .sendForm(
        "service_w0paaqk",
        "template_ml8qtrj",
        e.target,
        "JS78G17G__CdQyVeC"
      )
      .then((res) => {
        // console.log("SUCCESS");
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="contact-screen" id="contact">
      <div className="contact-container">
        <h3 className="contact-heading">СВЯЗАТЬСЯ</h3>
        <h4 className="contact-heading-second">
          ПОЛУЧИТЕ КОНСУЛЬТАЦИЮ ОТ ЭКСПЕРТА!
        </h4>
        <p className="contact-paragraph">
          Если вы заинтересованы в сотрудничестве с нашей компанией, пожалуйста,
          свяжитесь по указанным контактным данным.
        </p>
        <form className="form" id="form" ref={form} onSubmit={sendEmail}>
          <h5 className="form-heading">Оставить заявку на консультацию</h5>
          <div className="name-container">
            <h6 className="name-heading">Ваше ФИО</h6>
            <input
              className="name-input"
              type="text"
              name="name"
              value={fullName}
              required={true}
              onChange={(event) => setFullName(event.target.value)}
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
              value={phoneNumber}
              onChange={(event) => setPhoneNumber(event.target.value)}
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
              value={mail}
              required={true}
              onChange={(event) => setMail(event.target.value)}
              placeholder="example@gmail.com"
            ></input>
          </div>
          <p className="form-paragraph">
            Мы свяжемся с Вами в ближайшее время. Ваши данные не будут переданы
            третьим лицам.
          </p>
          <button className="form-button" value="Send">
            Отправить заявку
          </button>
        </form>
        <div className="contacts">
          <div className="mobile-phone-c">
            <img className="phone-icon" src={phoneIcon} alt="phone-icon"></img>
            <a className="phone-link" href="tel:+77068260008">
              +7-706-826-00-08{" "}
            </a>
          </div>
        </div>
      </div>
      <Popup open={open} closeOnDocumentClick onClose={closeModal} modal>
        <div className="modal">
          <a className="close" onClick={closeModal}>
            &times;
          </a>
          <h2 className="popup-heading">Ваша заявка отправлена</h2>
          <p className="popup-paragraph">
            Наши менеджеры свяжутся с вами в скором времени
          </p>
        </div>
        <div className="overlay"></div>
      </Popup>
    </div>
  );
};

export default ContactScreen;
