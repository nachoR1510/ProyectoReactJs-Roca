import cartImg from "./cart3.svg";
import { useCartContext } from "../../context/cartContext";

const cart = () => {
  const { cartTotalQuantity } = useCartContext();

  return (
    <div className="cartStyle" style={{ marginLeft: "5%" }}>
      <img src={cartImg} alt="carritoCompra" />
      <p>{cartTotalQuantity() || 0}</p>
    </div>
  );
};

export default cart;
