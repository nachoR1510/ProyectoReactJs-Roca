import { useState } from "react";
import { useCartContext } from "../../context/cartContext";

const checkoutPage = () => {
  const { cart } = useCartContext();

  const generarCodigo = () => {
    return Math.random().toString(36).substring(2, 10).toUpperCase();
  };

  return (
    <div className="checkout">
      <h1 className="text-white font-mont text-title bold">TUS CODIGOS</h1>
      <div className="border outline padding-10 checkout-games">
        {cart.map((game) => {
          const quantity = game.quantity || 1;

          return (
            <div key={game.id} className="games-repeat">
              {Array.from({ length: quantity }).map((_, index) => (
                <div
                  key={`${game.id}-${index}`}
                  className="checkout-game border bg-white padding-5"
                >
                  <img src={game.img} alt={game.nombre} className="border" />
                  <p className="text-black text-body font-inter">
                    {game.nombre}
                  </p>
                  <p className="text-black text-title font-inter bg-yellow-gradiant border padding-5 outline glow">
                    {generarCodigo()}
                  </p>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default checkoutPage;
