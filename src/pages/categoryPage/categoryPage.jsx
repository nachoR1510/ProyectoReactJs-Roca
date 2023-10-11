import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Item from "../../components/itemListContainer/itemListContainer";
import { Link } from "react-router-dom";

const categoryPage = () => {
  const [games, setgames] = useState([]);

  let { categoryId } = useParams();

  useEffect(() => {
    fetch("../../data.json")
      .then((response) => response.json())
      .then((data) => setgames(data));
  }, []);

  let categoriaJuegos = games.filter((el) => {
    return el.categorias.includes(categoryId);
  });

  return (
    <div id="tienda" style={{ marginTop: "8%" }}>
      {categoriaJuegos.map((game) => {
        return <Item game={game} />;
      })}
    </div>
  );
};

export default categoryPage;
