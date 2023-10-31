import React from "react";
const CartContext = React.createContext([]);
import { useState, useContext } from "react";
export const useCartContext = () => useContext(CartContext);

const cartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const cartCount = (game, newCount) => {
    const newCart = cart.filter((el) => el.id !== game.id);
    newCart.push({ ...game, quantity: newCount });
    setCart(newCart);
  };

  const clearCart = () => setCart([]);

  const cartFind = (id) => (cart.find((game) => game.id === id) ? true : false);

  const removeFromCart = (id) => setCart(cart.filter((game) => game.id !== id));

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
        cart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default cartProvider;
