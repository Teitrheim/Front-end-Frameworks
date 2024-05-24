import React from "react";
import { useCart } from "../components/CartContext/CartContext";
import styles from "./CheckoutPage.module.css";

const CheckoutPage = () => {
  const { cartItems, clearCart } = useCart();

  // Calculate the total cost of items in the cart
  const total = cartItems.reduce(
    (acc, item) => acc + (item.discountedPrice || item.price),
    0
  );

  return (
    <div className={styles.checkoutPage}>
      <h1>Cart Summary</h1>
      <ul className={styles.productList}>
        {cartItems.map((item) => (
          <li key={item.id} className={styles.productItem}>
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
          </li>
        ))}
      </ul>
      <div className={styles.total}>
        <h3>Total: ${total.toFixed(2)}</h3>
      </div>
      <button
        className={styles.checkoutButton}
        onClick={() => alert("Proceeding to Checkout...")}
      >
        Checkout
      </button>
      <button className={styles.clearCartButton} onClick={clearCart}>
        Clear Cart
      </button>{" "}
      {}
    </div>
  );
};

export default CheckoutPage;
