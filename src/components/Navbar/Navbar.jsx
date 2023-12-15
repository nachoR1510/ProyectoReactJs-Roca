import Cart from "../cart/cart.jsx";
import logo from "../../img/logo.png";
import SelectCategoria from "../selectCategorias/selectCategorias.jsx";
import { Link } from "react-router-dom";
import User from "../../img/user.svg";

const Navbar = () => {
  return (
    <header className="header">
      <div>
        <Link
          to="/"
          style={{ textDecoration: "none" }}
          className="header__logo"
        >
          <img src={logo} alt="logo" />
          <h1 className="f2">GameKey Kingdom</h1>
        </Link>
      </div>

      <div className="header__links">
        <input
          type="search"
          id="barraBus"
          className="f3"
          placeholder="¿Buscas un juego en especifico?"
        />

        <div id="fixFuente">
          <SelectCategoria />
        </div>
      </div>

      <div className="header__cart">
        <img
          src={User}
          alt="iconoUsuario"
          style={{ width: "30px", height: "30px" }}
        />

        <Link to="/cart" style={{ textDecoration: "none", paddingLeft: "2%" }}>
          <Cart />
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
