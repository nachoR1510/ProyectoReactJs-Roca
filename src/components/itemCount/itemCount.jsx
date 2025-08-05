import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/cartContext";
import Swal from "sweetalert2";

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

  const addToCart = () => {
    complete();

    Swal.fire({
      position: "top",
      title: "Juego añadido al carrito",
      background:
        "linear-gradient(to right, #ffc300 0%, #ffc300 26%, #ffd60a 100%)",
      color: "#000000",
      showConfirmButton: false,
      timer: 1000,
    });
  };

  const { cartCount } = useCartContext();

  return (
    <div className="btnsItem">
      <div className="btnsItem-quantity border bg-black-blur">
        <input
          type="button"
          value="-"
          disabled={count <= 1}
          onClick={decrese}
          className="text-black text-body font-inter border bg-white"
        />
        <p className="text-white text-body font-inter bg-black-blur border">
          {count}
        </p>
        <input
          type="button"
          value="+"
          onClick={increse}
          className="text-black text-body font-inter border bg-white"
        />
      </div>

      <div className="btnsItem-purchase ">
        <div className="bg-white btnsItem-purchase-cart" onClick={addToCart}>
          <img src="/img/cartAdd.svg" alt="carrito" />
        </div>

        <Link to="/cart">
          <input
            type="button"
            value="Comprar"
            className="text-black text-body font-inter bg-white btnbuy "
            onClick={complete}
          />
        </Link>
      </div>
    </div>
  );
};

export default itemCount;
