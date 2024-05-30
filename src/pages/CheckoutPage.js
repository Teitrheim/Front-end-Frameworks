import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../components/CartContext/CartContext";
import styles from "./CheckoutPage.module.css";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const { cartItems, clearCart, addProductToCart, removeProductFromCart } =
    useCart();

  const total = cartItems.reduce(
    (acc, item) => acc + (item.discountedPrice || item.price) * item.quantity,
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
            <h2>
              {item.title} (x{item.quantity})
            </h2>
            <p>{item.description}</p>
            <p>Price: ${item.discountedPrice || item.price}</p>
            <div className={styles.quantityControls}>
              <button
                onClick={() => addProductToCart(item)}
                className={styles.addButton}
              >
                +
              </button>
              <button
                onClick={() => removeProductFromCart(item.id)}
                className={styles.removeButton}
              >
                -
              </button>
            </div>
          </div>
        </div>
      ))}
      <div className={styles.total}>
        <h3>Total: ${total.toFixed(2)}</h3>
      </div>
      <button className={styles.checkoutButton} onClick={handleCheckout}>
        Checkout
      </button>
      <button className={styles.clearCartButton} onClick={clearCart}>
        Clear Cart
      </button>
    </div>
  );
};

export default CheckoutPage;
