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
        <h2 className="f1">LISTA DE JUEGOS</h2>

        <div className="cartDetail__fill__games">
          {cart.map((game) => {
            return (
              <div className="game" key={game.id}>
                <img src={game.img} alt={game.nombre} />
                <h3 className="f3">{game.nombre.toUpperCase()}</h3>
                <h4 className="f3">
                  X{game.quantity} ${game.precio * game.quantity}
                </h4>
                <CartModifier initial={game.quantity} game={game} />
              </div>
            );
          })}
        </div>

        <div className="cartDetail__fill__total">
          <p>total: $ {totalPrice()}</p>

          <div style={{ display: "flex", gap: "10px" }}>
            <Link to="/checkout" style={{ textDecoration: "none" }}>
              <input
                type="button"
                value="Comprar"
                className="f3 btnStyle btnHover"
                style={{ fontSize: "2rem", width: "120px", height: "60px" }}
              />
            </Link>

            <input
              type="button"
              value="Vaciar tienda"
              className="f3 btnStyle btnHover"
              onClick={clean}
              style={{ fontSize: "2rem", width: "160px", height: "60px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default cartDetailPage;
