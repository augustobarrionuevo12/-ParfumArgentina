import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({ perfume, onAdd }) => {
  return (
    <div className="item-detail">
      <img
        src={perfume.image}
        alt={perfume.name}
        className="item-detail-image"
      />
      <div className="item-detail-info">
        <h1>{perfume.name}</h1>
        <p>{perfume.description}</p>
        <ItemCount stock={perfume.stock} onAdd={onAdd} />
      </div>
    </div>
  );
};

export default ItemDetail;
