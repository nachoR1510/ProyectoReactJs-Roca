import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/cartContext";

export const itemCount = ({ initial, game }) => {
  const [count, setCount] = useState(initial);

  const decrese = () => {
    setCount(count - 1);
  };

  const increse = () => {
    setCount(count + 1);
  };

  const complete = () => {
    cartCount(game, count);
  };

  const { cartCount } = useCartContext();

  return (
    <div className="itemCount">
      <div className="itemCount__quantity">
        <p>Cantidad:</p>
        <input
          type="button"
          value="-"
          disabled={count <= 1}
          onClick={decrese}
          className="btnStyle1 f1"
        />
        <p>{count}</p>
        <input
          type="button"
          value="+"
          onClick={increse}
          className="btnStyle1 f1"
        />
      </div>

      <div className="itemCount__complete">
        <Link to="/" style={{ textDecoration: "none" }}>
          <input
            type="button"
            value="Añadir al carrito"
            className="f1 btnStyle1"
            style={{ fontSize: "1.5rem", width: "160px", height: "60px" }}
            onClick={complete}
          />
        </Link>

        <Link to="/cart" style={{ textDecoration: "none" }}>
          <input
            type="button"
            value="Comprar"
            className="f1 btnStyle1"
            style={{
              fontSize: "1.5rem",
              width: "160px",
              height: "60px",
            }}
            onClick={complete}
          />
        </Link>
      </div>
    </div>
  );
};

export default itemCount;
