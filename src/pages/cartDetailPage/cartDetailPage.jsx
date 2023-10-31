import { useState } from "react";
import { useCartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";
import CartModifier from "../../components/cartModifier/cartModifier";

const cartDetailPage = () => {
  const { cart, totalPrice, clearCart } = useCartContext();

  const clean = () => {
    clearCart();
  };

  if (cart.length === 0) {
    return (
      <div className="cartDetail f1">
        <div className="cartDetail__empty">
          <h2>Todavia no tienes juegos en el carrito</h2>
          <Link to="/" style={{ textDecoration: "none" }}>
            <p>Explora la tienda</p>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cartDetail f1">
      <div className="cartDetail__fill">
        <h2>Lista de juegos</h2>

        {cart.map((game) => {
          return (
            <div className="cartDetail__fill__games" key={game.id}>
              <img src={game.img} alt={game.nombre} />
              <h3>{game.nombre}</h3>
              <h4>
                X{game.quantity} ${game.precio * game.quantity}
              </h4>
              <CartModifier initial={game.quantity} game={game} />
            </div>
          );
        })}

        <p>total: $ {totalPrice()}</p>

        <div style={{ display: "flex", gap: "10px" }}>
          <Link to="/checkout" style={{ textDecoration: "none" }}>
            <input
              type="button"
              value="Comprar"
              className="f1 btnStyle1"
              style={{ fontSize: "2rem", width: "120px", height: "60px" }}
            />
          </Link>

          <input
            type="button"
            value="Vaciar tienda"
            className="f1 btnStyle1"
            onClick={clean}
            style={{ fontSize: "2rem", width: "160px", height: "60px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default cartDetailPage;
