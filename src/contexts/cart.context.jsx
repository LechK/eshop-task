import React, { createContext, useState, useCallback } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [products, setProducts] = useState({});

  const increase = useCallback(
    (id) => {
      const newProducts = { ...products };
      if (newProducts[id]) {
        newProducts[id].quantity += 1;
      } else {
        newProducts[id] = { quantity: 1 };
      }
      setProducts(newProducts);
    },
    [products]
  );

  const decrease = useCallback(
    (id) => {
      const newProducts = { ...products };
      if (newProducts[id]) {
        newProducts[id].quantity -= 1;
      }

      if (newProducts[id].quantity === 0) {
        delete newProducts[id];
      }
      setProducts(newProducts);
    },
    [products]
  );

  const deleteProduct = useCallback(
    (id) => {
      const newProducts = { ...products };
      if (newProducts[id]) {
        delete newProducts[id];
      }
      setProducts(newProducts);
    },
    [products]
  );

  return (
    <CartContext.Provider
      value={{ products, increase, decrease, deleteProduct }}
    >
      {children}
    </CartContext.Provider>
  );
};
