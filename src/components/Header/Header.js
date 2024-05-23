import React from "react";
import { Link } from "react-router-dom";
// import SearchBar from './SearchBar';
import styles from "./Header.module.css";

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
      <button className={styles.cartButton}>
        Cart 🛒 <span className={styles.badge}>0</span>
      </button>
    </header>
  );
};

export default Header;
