import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../CartContext/CartContext";

const CartIcon = () => {
  const navigate = useNavigate();
  const { cartItems } = useCart();

  const handleNavigateToCart = () => {
    navigate("/checkout");
  };

  return (
    <button className="cartButton" onClick={handleNavigateToCart}>
      Cart 🛒 <span className="badge">{cartItems.length}</span>
    </button>
  );
};

export default CartIcon;
