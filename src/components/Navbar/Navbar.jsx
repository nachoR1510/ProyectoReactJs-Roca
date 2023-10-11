import Cart from "../cart/cart.jsx";
import logo from "./building-castle.svg";
import SelectCategoria from "../selectCategorias/selectCategorias.jsx";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header">
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="header__logo">
          <img src={logo} alt="logo" />
          <h1 className="f2">
            Game<u>Key</u> Kingdom
          </h1>
        </div>
      </Link>

      <div className="header__links">
        <input
          type="search"
          id="barraBus"
          className="f1"
          placeholder="Buscar un producto"
        />

        <div id="fixFuente">
          <SelectCategoria />
        </div>
      </div>

      <div className="header__cart">
        <input type="button" className="f1 btnStyle1" value="Iniciar sesión" />

        <Cart />
      </div>
    </header>
  );
};

export default Navbar;
