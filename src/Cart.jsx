// src/components/Cart.jsx
import React from "react";

const Cart = ({ cart }) => {
  return (
    <div>
      <h2>Mis Compras</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} - Cantidad: {item.quantity}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
