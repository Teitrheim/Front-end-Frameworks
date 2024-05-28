import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../components/CartContext/CartContext";
import styles from "./CheckoutPage.module.css";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const { cartItems, clearCart } = useCart();

  // Calculate total price
  const total = cartItems.reduce(
    (acc, item) => acc + (item.discountedPrice || item.price),
    0
  );

  // Handle checkout confirmation and clear cart
  const handleCheckout = () => {
    // Example alert for demonstration
    alert("Proceeding to Checkout...");
    clearCart();
    navigate("/success");
  };

  const handleClearCart = () => {
    clearCart();
    navigate("/");
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
      <button className={styles.clearCartButton} onClick={handleClearCart}>
        Clear Cart
      </button>
    </div>
  );
};

export default CheckoutPage;
