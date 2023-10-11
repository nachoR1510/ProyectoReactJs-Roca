import cartImg from "./cart3.svg";

const cart = () => {
  return (
    <div className="cartStyle" style={{ marginLeft: "5%" }}>
      <img src={cartImg} alt="carritoCompra" />
      <p>0</p>
    </div>
  );
};

export default cart;
