import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import { useCart } from "../context/CartContext";
import "./ItemListContainer.css";
import {
  addDoc,
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import productos from "./productos.json";
// Asegúrate de importar los productos

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();
  const { addToCart } = useCart();

  useEffect(() => {
    const db = getFirestore();
    let perfumesQuery;

    if (categoryId) {
      perfumesQuery = query(
        collection(db, "items"),
        where("category", "==", categoryId)
      );
    } else {
      perfumesQuery = collection(db, "items");
    }

    getDocs(perfumesQuery).then((snapshot) => {
      const perfumesList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setItems(perfumesList);
    });
  }, [categoryId]);

  const onAddToCart = (item, quantity) => {
    addToCart(item, quantity);
  };

  // // useEffect(() => {
  // //   const uploadProductsToFirebase = async () => {
  // //     const db = getFirestore();
  // //     const productsCollection = collection(db, "items");

  // //
  // //     productos.forEach(async (product) => {
  // //       try {
  // //         await addDoc(productsCollection, product);
  // //         console.log("Producto agregado:", product.name);
  // //       } catch (error) {
  // //         console.error("Error agregando producto:", error);
  // //       }
  // //     });
  // //   };

  // //   // Llama a la función para subir los productos
  // //   uploadProductsToFirebase();
  //}, []); //

  return (
    <div className="item-list-container">
      <div className="row">
        {items.map((item) => (
          <div key={item.id} className="col-md-3 col-sm-6 mb-3">
            {" "}
            {/* Cambia 'col-md-4' a 'col-md-3' */}
            <div className="card border-0 text-center">
              <img
                src={item.image}
                className="card-img-top item-image"
                alt={item.name}
              />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.brand}</p>
                <p className="card-text">
                  <b>€{item.price}</b>
                </p>
                <ItemCount
                  stock={item.stock}
                  onAdd={(quantity) => onAddToCart(item, quantity)}
                />
                <Link to={`/item/${item.id}`}>
                  <button className="btn btn-secondary mt-2">
                    Ver detalles
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
