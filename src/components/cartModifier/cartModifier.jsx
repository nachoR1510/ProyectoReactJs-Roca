import { useCartContext } from "../../context/cartContext";
import { useState } from "react";

const cartModifier = ({ initial, game }) => {
  const { cartCount, removeFromCart, cartSub } = useCartContext();
  const [count, setCount] = useState(initial);

  const addToCart = () => {
    setCount(count + 1);
    const add = 1;
    cartCount(game, add);
  };

  const subFromCart = () => {
    setCount(count - 1);

    if (count === 1) {
      removeFromCart(game.id);
    } else {
      const sub = 1;
      cartSub(game, sub);
    }
  };

  const delate = () => {
    removeFromCart(game.id);
  };

  return (
    <div className="cart-modifier border outline padding-5">
      <input
        type="button"
        value="+"
        onClick={addToCart}
        className="bg-white font-inter text-body text-black border btn-hover padding-5"
      />

      <input
        type="button"
        value="-"
        onClick={subFromCart}
        className="bg-white font-inter text-body text-black border btn-hover padding-5"
      />

      <img
        src="/public/img/trash-icon.svg"
        alt="btn-trash"
        className="border outline"
        onClick={delate}
      />
    </div>
  );
};

export default cartModifier;
