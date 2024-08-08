import React, { createContext, useState, useContext } from "react";
import { toast } from "react-toastify";

// Crear el contexto
export const CartContext = createContext();

// Hook para usar el contexto
export const useCart = () => useContext(CartContext);

// Proveedor del contexto
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item, quantity) => {
    const existingItem = cart.find((i) => i.id === item.id);
    if (existingItem) {
      setCart(
        cart.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + quantity } : i
        )
      );
      toast.success(
        `Updated ${item.name} quantity to ${existingItem.quantity + quantity}!`
      );
    } else {
      setCart([...cart, { ...item, quantity }]);
      toast.success(`Has añadido ${quantity} ${item.name} al carrito!`);
    }
  };

  const removeFromCart = (id) => {
    const item = cart.find((item) => item.id === id);
    setCart(cart.filter((item) => item.id !== id));
    if (item) {
      toast.info(`Has eliminado ${item.name} del carrito!`);
    }
  };

  const clearCart = () => {
    setCart([]);
    toast.info("Has eliminado todos los items del carrito!");
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
