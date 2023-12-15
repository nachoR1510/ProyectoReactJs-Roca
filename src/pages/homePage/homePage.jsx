import { useEffect, useState } from "react";
import Item from "../../components/itemListContainer/itemListContainer";
import { db } from "../../main";
import { collection, query, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";

const homePage = () => {
  const [games, setgames] = useState([]);

  useEffect(() => {
    const getGames = async () => {
      const q = query(collection(db, "juegos"));
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setgames(docs);
    };
    getGames();
  }, []);

  let destacado = games.filter((el) => {
    return el.nombre.includes("Lies");
  });

  return (
    <div>
      {destacado.map((game) => {
        return (
          <div>
            <img className="bgImg" src={game.bgImg} alt="bgimgHome" />

            <main className="home">
              <h2 className="home__titulo f1">JUEGO DESTACADO</h2>

              <div className="home__game">
                <img src={game.logo} />
                <div className="home__game__info">
                  <p>{game.desc}</p>
                  <Link
                    to={`/item/${game.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <input
                      type="button"
                      value="Más información"
                      className="btnStyle btnHover btnHome f3"
                    />
                  </Link>
                </div>
              </div>

              <div className="home__btnToTienda">
                <a href="#items" className="f3">
                  Explorar juegos
                </a>
              </div>

              <p className="home__degraded"></p>
            </main>

            <div
              style={{
                backgroundColor: "#2728255a",
                backdropFilter: "blur(25px)",
              }}
            >
              <div className="home__store">
                <h3 className="f1">JUEGOS RECOMENDADOS</h3>
                <section id="items">
                  {games.map((game) => {
                    return <Item game={game} key={game.id} />;
                  })}
                </section>
              </div>
            </div>
          </div>
        );
      })}
      ;
    </div>
  );
};

export default homePage;
