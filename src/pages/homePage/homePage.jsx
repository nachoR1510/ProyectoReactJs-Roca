import { useEffect, useState } from "react";
import Item from "../../components/itemListContainer/itemListContainer";
import { db } from "../../main";
import { collection, query, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";

const categorias = [
  "terror",
  "aventura",
  "acción",
  "fantasia",
  "online",
  "rpg",
];

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
    <div className="home">
      {destacado.map((game) => {
        return (
          <main>
            <video className="bgVideo" autoPlay muted loop playsInline>
              <source src={"/video/home-video.mp4"} type="video/mp4" />
            </video>

            <div className="home-banner">
              <div className="banner-link border padding">
                <Link
                  to={`/item/${game.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <img src={game.img} alt="home-game" className="border" />

                  <p className="font-inter text-black text-body bold border bg-yellow-gradiant link-price">
                    ${game.precio.toLocaleString("es-AR")}
                  </p>
                </Link>
              </div>
            </div>

            <div className="home-line">
              <div className="home-catalog">
                <h3 className="text-title text-white font-mont bold">
                  JUEGOS DESTACADOS
                </h3>
                <section id="items" className="home-best">
                  {games.slice(0, 6).map((game) => {
                    return <Item game={game} key={game.id} />;
                  })}
                </section>

                <Link to="/category/all">
                  <input
                    type="button"
                    value="Catalogo completo"
                    className="bg-white border text-body font-inter"
                  />
                </Link>
              </div>

              <section className="home-genders bg-black-blur">
                <h4 className="text-title text-white font-mont">
                  BUSCAR POR CATEGORIA
                </h4>

                <div className="home-genders-cards">
                  {categorias.map((cat) => (
                    <Link
                      key={cat}
                      to={`/category/${cat}`}
                      className="genders-card border"
                      style={{
                        backgroundImage: `url('/img/bg-${cat}.webp')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    >
                      <div className="overley-card border"></div>
                      <img
                        src={`/img/${cat}.webp`}
                        alt={`juego-${cat}`}
                        className="card-pj"
                      />
                      <p className="text-body text-white font-inter bold bg-black-blur border padding-5">
                        {cat.toUpperCase()}
                      </p>
                    </Link>
                  ))}
                </div>
              </section>
            </div>
          </main>
        );
      })}
    </div>
  );
};

export default homePage;
