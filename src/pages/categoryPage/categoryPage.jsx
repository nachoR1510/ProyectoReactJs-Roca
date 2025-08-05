import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Item from "../../components/itemListContainer/itemListContainer";
import { db } from "../../main";
import { collection, query, getDocs } from "firebase/firestore";

const categoryPage = () => {
  const [games, setgames] = useState([]);
  const { categoryId } = useParams();

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

  const categoriaJuegos =
    categoryId === "all"
      ? games
      : games.filter((el) => el.categorias.includes(categoryId));

  return (
    <div className="itemList">
      {categoryId !== "all" && (
        <div
          className="itemList-banner border"
          style={{
            backgroundImage: `url('/img/bg-${categoryId}.webp')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            className="banner-blur"
            style={{
              backgroundImage: `url('/img/bg-${categoryId}.webp')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <img src={`/img/${categoryId}.webp`} alt="img" />
          <div>
            <Link
              to="/"
              className="itemList-banner-btn border bg-white-blur padding-10"
            >
              <img src="/img/back-icon.svg" alt="btn-back" />
              <p className="text-black text-body text-bold font-inter">
                Volver
              </p>
            </Link>
            <h2 className="text-title text-white bold font-mont bg-black-blur border padding-10 outline">
              {categoryId.toUpperCase()}
            </h2>
          </div>
        </div>
      )}

      {categoriaJuegos.map((game) => (
        <div key={game.id}>
          <Item game={game} />
        </div>
      ))}
    </div>
  );
};

export default categoryPage;
