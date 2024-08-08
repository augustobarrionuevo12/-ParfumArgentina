import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import { CartContext } from "../context/CartContext";
import "./NavBar.css";

const NavBar = () => {
  const { cart } = useContext(CartContext);

  return (
    <div className="navbar-container">
      <div className="logo-container">
        <Link to="/">
          <img src="/images/Perfume.png" alt="Logo" className="logo" />
        </Link>
      </div>
      <div className="container my-5">
        <div className="row">
          <div className="col">
            <ul className="nav justify-content-center">
              <li className="nav-item">
                <Link className="nav-link active text-light" to="/">
                  Todos
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/category/masculinas">
                  Fragancias Masculinas
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/category/femeninas">
                  Fragancias Femeninas
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-light"
                  to="/category/cofres-sets"
                >
                  Cofres y sets
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/Carrito">
                  <CartWidget />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
