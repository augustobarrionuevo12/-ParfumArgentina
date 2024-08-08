import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./ItemDetailContainer.css";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const db = getFirestore();
    const productRef = doc(db, "items", itemId);

    getDoc(productRef).then((snapshot) => {
      if (snapshot.exists()) {
        setProduct({ id: snapshot.id, ...snapshot.data() });
      } else {
        setProduct(null);
      }
    });
  }, [itemId]);

  const onAddToCart = (item, quantity) => {
    addToCart(item, quantity);
    toast.success("Producto agregado al carrito");
  };

  if (!product) {
    return (
      <div className="product-not-found">
        <h2>Producto no encontrado</h2>
        <p>Lo sentimos, pero el producto que buscas no está disponible.</p>
        <p>Puedes buscar otros productos similares en nuestro catálogo.</p>
      </div>
    );
  }

  return (
    <div className="item-detail-container">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-details">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p className="product-price">Precio: ${product.price}</p>
        <button
          className="add-to-cart-button"
          onClick={() => onAddToCart(product, 1)}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemDetailContainer;
