import Cart from "../cart/cart.jsx";
import logo from "../../img/logo.png";
import SelectCategoria from "../selectCategorias/selectCategorias.jsx";
import { Link } from "react-router-dom";

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
          className="f1"
          placeholder="¿Buscas un juego en especifico?"
        />

        <div id="fixFuente">
          <SelectCategoria />
        </div>
      </div>

      <div className="header__cart">
        <input type="button" className="f1 btnStyle1" value="Iniciar sesión" />

        <Link to="/cart" style={{ textDecoration: "none", paddingLeft: "2%" }}>
          <Cart />
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
