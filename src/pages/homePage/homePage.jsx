import { useEffect, useState } from "react";
import Item from "../../components/itemListContainer/itemListContainer";
import { key } from "localforage";

const homePage = () => {
  const [games, setgames] = useState([]);

  useEffect(() => {
    fetch("../../data.json")
      .then((response) => response.json())
      .then((data) => setgames(data));
  }, []);

  let destacado = games.filter((el) => {
    return el.id.includes("8");
  });

  return (
    <div>
      <main className="main bgImg">
        <div className="main__titulo">
          <h2 className="f2">Juego destacado</h2>

          {destacado.map((game) => {
            return <Item key={game.id} game={game} />;
          })}

          <a href="#tienda" className="f1">
            Empezar a explorar juegos
          </a>
        </div>
        <p className="main__fondo"></p>
      </main>

      <section id="tienda">
        {games.map((game) => {
          return <Item game={game} />;
        })}
      </section>
    </div>
  );
};

export default homePage;
