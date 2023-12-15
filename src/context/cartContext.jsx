import React from "react";
const CartContext = React.createContext([]);
import { useState, useContext } from "react";
export const useCartContext = () => useContext(CartContext);

const cartProvider = ({ children }) => {
  let cartJSON = JSON.parse(localStorage.getItem("cartJSON"));
  const [cart, setCart] = useState(cartJSON ?? []);

  const sortCart = (oldCart) => {
    oldCart.sort((a, b) => {
      return b.precio - a.precio;
    });

    setCart(oldCart);
    cartJSON = JSON.stringify(oldCart);
    localStorage.removeItem("cartJSON");
    localStorage.setItem("cartJSON", cartJSON);
  };

  const cartCount = (game, newCount) => {
    const oldCount = cart.filter((el) => el.id === game.id);
    oldCount.map((el) => (newCount = newCount + el.quantity));
    const newCart = cart.filter((el) => el.id !== game.id);
    newCart.push({ ...game, quantity: newCount });
    sortCart(newCart);
  };

  const cartSub = (game, newCount) => {
    const oldCount = cart.filter((el) => el.id === game.id);
    oldCount.map((el) => (newCount = el.quantity - newCount));
    const newCart = cart.filter((el) => el.id !== game.id);
    newCart.push({ ...game, quantity: newCount });
    sortCart(newCart);
  };

  const clearCart = () => {
    setCart([]);
    localStorage.clear("cartJSON");
  };

  const cartFind = (id) => (cart.find((game) => game.id === id) ? true : false);

  const removeFromCart = (id) => {
    setCart(cart.filter((game) => game.id !== id));
    cartJSON = JSON.stringify(cart.filter((game) => game.id !== id));
    localStorage.removeItem("cartJSON");
    localStorage.setItem("cartJSON", cartJSON);
  };

  const cartTotalQuantity = () => {
    return cart.reduce(
      (accumulator, actGame) => accumulator + actGame.quantity,
      0
    );
  };

  const totalPrice = () => {
    return cart.reduce((prev, act) => prev + act.quantity * act.precio, 0);
  };

  return (
    <CartContext.Provider
      value={{
        clearCart,
        cartFind,
        removeFromCart,
        cartCount,
        cartTotalQuantity,
        totalPrice,
        cartSub,
        cart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default cartProvider;
