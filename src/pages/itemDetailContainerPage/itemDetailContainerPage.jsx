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
          <div
            className="itemDetail f1"
            style={{
              backgroundImage: `url(${game.bgImg})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            key={game.id}
          >
            <div className="itemDetail__card">
              <img src={game.logo} className="itemDetail__card__logo" />
              <div>
                <h3 className="itemDetail__card__categorias">Categorias</h3>
                <p className="itemDetail__card__categorias">
                  {game.categorias.join(" ")}
                </p>
              </div>
              <p className="itemDetail__card__desc">{game.desc}</p>
              <h4>${game.precio}</h4>
              <ItemCount initial={1} game={game} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default itemDetailContainerPage;
