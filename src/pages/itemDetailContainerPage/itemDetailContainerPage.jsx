import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../main";
import { collection, query, getDocs } from "firebase/firestore";
import ItemCount from "../../components/itemCount/itemCount";

const itemDetailContainerPage = () => {
  const [games, setgames] = useState([]);

  let { id } = useParams();

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

  let juego = games.filter((el) => {
    return el.id.includes(id);
  });

  return (
    <div>
      {juego.map((game) => {
        return (
          <div key={game.id} className="itemDetail">
            <div className="itemDetail-overlay"></div>

            <img src={game.bgImg} alt="bgGame" className="itemDetail-bg" />

            <div className="itemDetail-data">
              <img
                src={game.img}
                alt={game.nombre}
                className="border itemDetail-data-img"
              />
              <img
                src={game.img}
                alt={game.nombre}
                className="border itemDetail-data-imgBlur"
              />

              <div className="itemDetail-data-text">
                <div>
                  <h2 className="text-white text-bold text-title font-mont">
                    {game.nombre}
                  </h2>

                  <p className="text-white text-bold text-body font-inter">
                    ${game.precio.toLocaleString("es-AR")}
                  </p>
                </div>

                <ItemCount initial={1} game={game} />
              </div>
            </div>

            <div className="itemDetail-about">
              <h3 className="text-white text-title text-bold font-mont">
                Sobre este juego
              </h3>
              <div className="itemDetail-about-container border padding-5">
                <h4 className="text-white text-title font-inter bold ">
                  {game.nombre}
                </h4>

                <div className="tags">
                  <p className="text-white text-body font-inter padding-5 bold">
                    Categorias:
                  </p>
                  {game.categorias.map((categoria) => {
                    return (
                      <div>
                        <p className="text-white text-body font-inter padding-5 border bg-black-blur catg">
                          {categoria}
                        </p>
                      </div>
                    );
                  })}
                </div>

                <h5 className="text-white text-body font-inter">Descripción</h5>
                <p className="text-white text-body font-inter ">
                  {game.desc.replace(/\\n/g, "\n")}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default itemDetailContainerPage;
