import React from "react";
import { Link } from "react-router-dom";
import styles from "./CheckoutSuccessPage.module.css";

const CheckoutSuccessPage = () => {
  return (
    <div className={styles.successPage}>
      <h1>Checkout Successful</h1>
      <p>Your order has been successfully placed!</p>
      <Link to="/">Go back to store</Link> {}
    </div>
  );
};

export default CheckoutSuccessPage;
