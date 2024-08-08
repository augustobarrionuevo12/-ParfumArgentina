// src/App.jsx
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavBar from "./components/NavBar";
import ImagenPrincipal from "./components/ImagenPrincipal";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Carrito from "./components/Carrito";
import Footer from "./components/Footer"; // Importa el Footer
// import { fetchPerfumes } from "./Api";
import { CartProvider } from "./context/CartContext";
import "./index.css";

function App() {
  const [perfumes, setPerfumes] = useState([]);

  useEffect(() => {
    const loadPerfumes = async () => {
      const data = await fetchPerfumes();
      setPerfumes(data);
    };
    loadPerfumes();
  }, []);

  return (
    <CartProvider>
      <Router>
        <div>
          <NavBar />
          <ImagenPrincipal />
          <Routes>
            <Route
              path="/"
              element={<ItemListContainer perfumes={perfumes} />}
            />
            <Route
              path="/category/:categoryId"
              element={<ItemListContainer perfumes={perfumes} />}
            />
            <Route
              path="/item/:itemId"
              element={<ItemDetailContainer perfumes={perfumes} />}
            />
            <Route path="/carrito" element={<Carrito />} />
          </Routes>
          <Footer />
        </div>
        <ToastContainer />
      </Router>
    </CartProvider>
  );
}

export default App;
