import cartImg from "./cart3.svg";

const cart = () => {
  return (
    <div className="cartStyle">
      <img src={cartImg} alt="carritoCompra" />
      <p>0</p>
    </div>
  );
};

export default cart;
