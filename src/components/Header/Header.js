import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.navbar}>
      <Link to="/" className={styles.navItem}>
        Home
      </Link>
      <Link to="/contact" className={styles.navItem}>
        Contact
      </Link>
      <button className={styles.cartButton}>
        Cart 🛒 <span className="badge">0</span>
      </button>
    </header>
  );
};

export default Header;
