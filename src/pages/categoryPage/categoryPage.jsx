import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Item from "../../components/itemListContainer/itemListContainer";
import { db } from "../../main";
import { collection, query, getDocs } from "firebase/firestore";

const categoryPage = () => {
  const [games, setgames] = useState([]);

  let { categoryId } = useParams();

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

  let categoriaJuegos = games.filter((el) => {
    return el.categorias.includes(categoryId);
  });

  return (
    <div id="tienda" style={{ marginTop: "8%" }}>
      {categoriaJuegos.map((game) => {
        return <Item game={game} key={game.id} />;
      })}
    </div>
  );
};

export default categoryPage;
