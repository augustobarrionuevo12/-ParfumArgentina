import React from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";

const Item = ({ perfume, onAdd }) => {
  return (
    <div className="item">
      <img src={perfume.image} alt={perfume.name} className="item-image" />
      <h3>{perfume.name}</h3>
      <p>{perfume.description}</p>
      <Link to={`/item/${perfume.id}`}>Ver detalles</Link>
      <ItemCount stock={perfume.stock} onAdd={onAdd} />
    </div>
  );
};

export default Item;
