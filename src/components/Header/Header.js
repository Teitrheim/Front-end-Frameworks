import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import CartIcon from "../CartIcon/CartIcon";

const Header = () => {
  return (
    <header className={styles.navbar}>
      <div className={styles.navItems}>
        <Link to="/" className={styles.navItem}>
          Home
        </Link>
        <Link to="/contact" className={styles.navItem}>
          Contact
        </Link>
      </div>
      <CartIcon />
    </header>
  );
};

export default Header;
