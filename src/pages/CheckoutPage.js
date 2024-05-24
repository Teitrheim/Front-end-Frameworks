import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../components/CartContext/CartContext";
import styles from "./CheckoutPage.module.css";

const CheckoutPage = () => {
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();

  const total = cartItems.reduce(
    (acc, item) => acc + (item.discountedPrice || item.price),
    0
  );

  const handleCheckout = () => {
    alert("Proceeding to Checkout...");
    clearCart();
    navigate("/success");
  };

  return (
    <div className={styles.checkoutPage}>
      <h1>Cart Summary</h1>
      {cartItems.map((item) => (
        <div key={item.id} className={styles.productItem}>
          <img
            src={item.image.url}
            alt={item.title}
            className={styles.productImage}
          />
          <div>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <p>Price: ${item.discountedPrice || item.price}</p>
          </div>
        </div>
      ))}
      <div className={styles.total}>
        <h3>Total: ${total.toFixed(2)}</h3>
      </div>
      <button className={styles.checkoutButton} onClick={handleCheckout}>
        Checkout
      </button>
    </div>
  );
};

export default CheckoutPage;
