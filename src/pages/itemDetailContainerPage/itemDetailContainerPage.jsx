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
          <div key={game.id}>
            <img src={game.bgImg} alt="bgGame" className="bgImg" />

            <div className="itemDetail animate__animated animate__fadeInDownBig animate__delay-1s">
              <div className="itemDetail__info">
                <div className="itemDetail__info__img">
                  <img src={game.img} alt="juegoImg" />
                </div>
                <div className="itemDetail__info__item">
                  <div className="titulo">
                    <h2 className="f1">{game.nombre.toUpperCase()}</h2>
                  </div>
                  <div className="precio">
                    <h3 className="f1">${game.precio}</h3>
                  </div>
                </div>

                <div
                  style={{ display: "flex", flexDirection: "row", gap: "5px" }}
                >
                  {game.categorias.map((categoria) => {
                    return (
                      <div className="itemDetail__info__catg">
                        <p>{categoria}</p>;
                      </div>
                    );
                  })}
                </div>

                <ItemCount initial={1} game={game} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default itemDetailContainerPage;
