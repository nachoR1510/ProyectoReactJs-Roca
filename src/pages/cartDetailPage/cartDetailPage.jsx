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
      <div className="empty-cart">
        <h2 className="text-white font-inter">
          No tienes <span className="font-mont text-yellow">JUEGOS</span> en el{" "}
          <span className="font-mont">CARRITO.</span>
        </h2>
        <Link to="/category/all">
          <p className="text-black text-title font-inter bg-white border padding-10 btn-hover">
            Explora la tienda
          </p>
        </Link>
      </div>
    );
  }

  return (
    <div className="cartDetail">
      <div>
        <h2 className="text-white text-title font-mont bold">CARRITO</h2>

        <div className="gamesDetail border outline padding-10">
          {cart.map((game) => {
            return (
              <div className="game" key={game.id}>
                <div>
                  <div className="game-img">
                    <img
                      src={game.img}
                      alt={game.nombre}
                      className="border outline"
                    />
                    <p className="bg-black-blur border text-white padding-5 text-body font-inter outline">
                      x{game.quantity}
                    </p>
                  </div>
                  <div className="game-data">
                    <h3 className="text-white text-body bold font-inter">
                      {game.nombre.toUpperCase()}
                    </h3>
                    <h4 className="text-white font-inter text-body">
                      ${game.precio * game.quantity}
                    </h4>
                  </div>
                </div>
                <CartModifier initial={game.quantity} game={game} />
              </div>
            );
          })}
        </div>
      </div>

      <div className="total-container">
        <h5 className="text-white text-title bold font-mont">RESUMEN</h5>

        <div className="cartDetail-total border outline padding-10">
          <div className="cart-list">
            {cart.map((game, index) => {
              return (
                <div className="text-white text-body font-inter cart-list-items">
                  <p className="cart-list-items-quantity">{index + 1}.</p>
                  <p className="cart-list-items-title">{game.nombre}</p>
                  <p className="cart-list-items-body">${game.precio}</p>
                  <p className="cart-list-items-quantity">x{game.quantity}</p>
                  <p className="cart-list-items-body">
                    ${game.precio * game.quantity}
                  </p>
                </div>
              );
            })}
          </div>
          <hr />
          <p className="text-white font-inter text-body">
            Subtotal: ${totalPrice()}
          </p>
          <p className="text-white font-inter text-body">Descuento: 0</p>
          <p className="text-white font-mont text-title bold">
            Total: $ {totalPrice()}
          </p>

          <div className="btn-total">
            <Link to="/checkout">
              <input
                type="button"
                value="Comprar"
                className="border bg-yellow-gradiant outline padding-10 text-black text-body bold font-inter glow"
              />
            </Link>

            <input
              type="button"
              value="Vaciar carrito"
              className="border bg-white padding-10 text-black text-body bold font-inter btn-hover"
              onClick={clean}
            />
          </div>
        </div>

        <Link
          to="/category/all"
          className="text-black text-body font-inter bg-white border btn-hover bold padding-10 total-container-btn"
        >
          <p>Agregar mas juegos</p>
        </Link>
      </div>
    </div>
  );
};

export default cartDetailPage;
