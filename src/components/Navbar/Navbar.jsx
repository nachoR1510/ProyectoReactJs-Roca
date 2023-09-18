import "./Navbar.css";
import cart from "./cart3.svg";
import logo from "./building-castle.svg";

const Navbar = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="logo" />
        <h1>GameKey Kingdom</h1>
      </div>

      <ul className="header__links">
        <li>
          <a href="#" className="separador">
            Componentes
          </a>
        </li>

        <li>
          <a href="#" className="actual">
            Juegos
          </a>
        </li>

        <input type="search" id="barraBus" placeholder="Buscar un producto" />
      </ul>

      <div className="header__cart">
        <input type="button" value="iniciar sesión" />

        <img src={cart} alt="carritoCompra" />
        <p>0</p>
      </div>
    </header>
  );
};

export default Navbar;
