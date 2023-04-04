import React from "react";

import styles from "../styles/nav-links-styles/nav-links.css";
import { Link } from "react-scroll";

const NavLinks = () => {
  return (
    <nav className="mobile-nav-links">
      <Link to="#about" className="about-mob-link" id="about-n" smooth={true}>
        О компании
      </Link>
      <Link
        to="#services"
        className="services-mob-link"
        id="services-n"
        smooth={true}
      >
        Услуги
      </Link>
      <Link
        to="#contacts"
        className="contacts-mob-link"
        id="contacts-n"
        smooth={true}
      >
        Контакты
      </Link>
    </nav>
  );
};

export default NavLinks;
