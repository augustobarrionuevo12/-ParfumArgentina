import React from "react";
import { useCart } from "../context/CartContext";

const CartWidget = () => {
  const { cart } = useCart();
  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div>
      <button
        type="button"
        className="btn btn-primary position-relative bg-secondary"
        style={{ display: "flex", alignItems: "center" }}
      >
        Mis compras
        <img
          src="/images/bx-cart-add.svg"
          alt="carrito"
          style={{ marginLeft: "8px" }}
        />
        {totalQuantity > 0 && (
          <span
            className="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle"
            style={{ marginLeft: "8px" }}
          >
            {totalQuantity}
          </span>
        )}
      </button>
    </div>
  );
};

export default CartWidget;
