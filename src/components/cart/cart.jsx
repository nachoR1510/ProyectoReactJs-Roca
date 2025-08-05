import cartImg from "./cart3.svg";
import { useCartContext } from "../../context/cartContext";

const cart = () => {
  const { cartTotalQuantity } = useCartContext();

  return (
    <div className="header-user-cart text-body text-white">
      <img src={cartImg} alt="carritoCompra" />
      <p className="font-inter text-body">{cartTotalQuantity() || 0}</p>
    </div>
  );
};

export default cart;
