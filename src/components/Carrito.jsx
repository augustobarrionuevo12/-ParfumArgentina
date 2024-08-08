import React from "react";
import { useCart } from "../context/CartContext";
import "./Carrito.css";

const Carrito = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="container my-5">
      <h2 className="mb-4 text-light">Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p className="text-center">No hay productos en el carrito</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Producto</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Precio</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td>
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{ width: "50px", marginRight: "10px" }}
                    />
                    {item.name}
                  </td>
                  <td>{item.quantity}</td>
                  <td>${item.price * item.quantity}</td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="text-end">
            <h4 class="text-light">Total: ${totalPrice}</h4>
            <button className="btn btn-warning me-2" onClick={clearCart}>
              Vaciar carrito
            </button>
            <button className="btn btn-success">Proceder al pago</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Carrito;
