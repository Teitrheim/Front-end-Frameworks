import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addProductToCart = (product) => {
    setCartItems((currentItems) => [...currentItems, product]);
  };

  const clearCart = () => {
    setCartItems([]); // Clears all items in the cart
  };

  const contextValue = {
    cartItems,
    addProductToCart,
    clearCart,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};
