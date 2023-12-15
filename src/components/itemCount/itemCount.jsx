import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/cartContext";
import Cart from "../cart/cart3.svg";

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
          className="btnStyle btnHover f3"
        />
        <p>{count}</p>
        <input
          type="button"
          value="+"
          onClick={increse}
          className="btnStyle btnHover f3"
        />
      </div>

      <div className="itemCount__complete">
        <Link
          to="/"
          style={{ textDecoration: "none" }}
          className="cart btnStyle2"
          onClick={complete}
        >
          <img src={Cart} alt="carrito" />
        </Link>

        <Link to="/cart" style={{ textDecoration: "none" }}>
          <input
            type="button"
            value="Comprar juego"
            className="f1 btnStyle2"
            style={{
              width: "180px",
              height: "70px",
            }}
            onClick={complete}
          />
        </Link>
      </div>
    </div>
  );
};

export default itemCount;
