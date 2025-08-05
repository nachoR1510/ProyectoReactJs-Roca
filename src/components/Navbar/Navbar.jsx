import Cart from "../cart/cart.jsx";
import SelectCategoria from "../selectCategorias/selectCategorias.jsx";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <Link to="/">
          <img src="/img/logo.webp" alt="logo" />
          <h1 className="text-title text-white font-lubri">GameKey Kingdom</h1>
          <p className="bg-yellow-gradiant"></p>
        </Link>
      </div>

      <div className="header-search font-inter">
        <input
          type="search"
          id="searchBox"
          placeholder="¿Buscas un juego en especifico?"
        />

        <div>
          <SelectCategoria className="text-body text-white" />
        </div>
      </div>

      <div className="header-user">
        <img src="/img/user.svg" alt="iconoUsuario" />

        <Link to="/cart">
          <Cart />
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
