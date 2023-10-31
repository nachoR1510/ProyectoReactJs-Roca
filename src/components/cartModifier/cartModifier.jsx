import { useCartContext } from "../../context/cartContext";
import { useState } from "react";

const cartModifier = ({ initial, game }) => {
  const { cartCount, removeFromCart } = useCartContext();
  const [count, setCount] = useState(initial);

  const addToCart = () => {
    setCount(count + 1);
    cartCount(game, count);
  };

  const subFromCart = () => {
    setCount(count - 1);

    if (count === 0) {
      removeFromCart(game.id);
    } else {
      cartCount(game, count);
    }
  };

  const delate = () => {
    removeFromCart(game.id);
  };

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <input
        type="button"
        value="+"
        onClick={addToCart}
        className="btnStyle1"
        style={{ width: "30px", fontSize: "2rem" }}
      />

      <input
        type="button"
        value="-"
        onClick={subFromCart}
        className="btnStyle1"
        style={{ width: "30px", fontSize: "2rem" }}
      />

      <input
        type="button"
        value="Eliminar del carrito"
        onClick={delate}
        className="btnStyle1"
        style={{ width: "120px", fontSize: "1.2rem" }}
      />
    </div>
  );
};

export default cartModifier;
