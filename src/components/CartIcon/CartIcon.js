import React from "react";
import { useCart } from "../CartContext/CartContext";

const CartIcon = () => {
  const { cartItems } = useCart();

  console.log(cartItems);

  return (
    <button className="cartButton">
      Cart 🛒 <span className="badge">{cartItems.length}</span>
    </button>
  );
};

export default CartIcon;
