import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../CartContext/CartContext";

const CartIcon = () => {
  const navigate = useNavigate();
  const { cartItems } = useCart();

  // Calculate the total number of items in the cart
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const handleNavigateToCart = () => {
    navigate("/checkout");
  };

  return (
    <button className="cartButton" onClick={handleNavigateToCart}>
      Cart 🛒 <span className="badge">{itemCount}</span>
    </button>
  );
};

export default CartIcon;
