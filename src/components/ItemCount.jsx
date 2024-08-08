import { useState } from "react";

const ItemCount = ({ stock, onAdd }) => {
  const [contador, setContador] = useState(1);

  const incrementar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const decrementar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  const handleAdd = () => {
    onAdd(contador);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="btn-group" role="group">
            <button
              type="button"
              className="btn btn-light"
              onClick={decrementar}
            >
              -
            </button>
            <button type="button" className="btn btn-light">
              {contador}
            </button>
            <button
              type="button"
              className="btn btn-light"
              onClick={incrementar}
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div className="row my-1">
        <div className="col">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={handleAdd}
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCount;
