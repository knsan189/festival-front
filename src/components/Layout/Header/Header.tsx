import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import HeaderSearch from "./HeaderSearch";
import Navigation from "./Navigation";

const Header = () => (
  <header className={styles.header}>
    <div className={styles.row}>
      <div className={styles.logo}>
        <Link to="/">
          <img src="/images/logo2.jpg" alt="logo" />
        </Link>
      </div>
      <HeaderSearch />
      <Navigation />
    </div>
  </header>
);

export default Header;
