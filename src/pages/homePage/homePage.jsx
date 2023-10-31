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
          <main
            className="main"
            style={{
              backgroundImage: `url(${game.bgImg})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            key={game.id}
          >
            <h2 className="f1 main__titulo">Juego destacado</h2>
            <a href="#tienda" className="f1">
              Empezar a explorar juegos
            </a>

            <div className="main__card f1">
              <img src={game.logo} />
              <div className="main__card__bg">
                <p>{game.desc}</p>
                <Link
                  to={`/item/${game.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <input
                    type="button"
                    value="Más información"
                    className="btnStyle1 f1"
                    style={{
                      fontSize: "1.5rem",
                      width: "160px",
                      height: "60px",
                      marginTop: "3%",
                    }}
                  />
                </Link>
              </div>
            </div>

            <p className="main__fondo"></p>
          </main>
        );
      })}

      <section id="tienda">
        {games.map((game) => {
          return <Item game={game} key={game.id} />;
        })}
      </section>
    </div>
  );
};

export default homePage;
