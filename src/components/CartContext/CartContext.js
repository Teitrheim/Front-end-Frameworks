import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);

  return context;
};
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addProductToCart = (product) => {
    setCartItems((currentItems) => {
      const updatedCart = [...currentItems, product];
      console.log("Updated Cart:", updatedCart);
      return updatedCart;
    });
  };

  const contextValue = {
    cartItems,
    addProductToCart,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};
