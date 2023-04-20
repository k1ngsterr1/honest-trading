import React from "react";

import styles from "../styles/nav-links-styles/nav-links.css";
import { Link } from "react-scroll";

import { slide as Menu } from "react-burger-menu";

const NavLinks = () => {
  return (
    <nav className="mobile-nav-links">
      <Menu>
        <Link to="about" className="about-mob-link" id="about-n" smooth={true}>
          О компании
        </Link>
        <Link
          to="culture"
          className="services-mob-link"
          id="services-n"
          smooth={true}
        >
          Культуры
        </Link>
        <Link
          to="contact"
          className="contacts-mob-link"
          id="contacts-n"
          smooth={true}
        >
          Контакты
        </Link>
      </Menu>
    </nav>
  );
};

export default NavLinks;
