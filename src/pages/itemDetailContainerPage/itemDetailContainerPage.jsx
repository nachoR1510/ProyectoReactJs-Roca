import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const itemDetailContainerPage = () => {
  const [games, setgames] = useState([]);

  let { id } = useParams();

  useEffect(() => {
    fetch("../../data.json")
      .then((response) => response.json())
      .then((data) => setgames(data));
  }, []);

  let juego = games.filter((el) => {
    return el.id.includes(id);
  });

  return (
    <div>
      {juego.map((game) => {
        return (
          <div className="itemDetail f1">
            <img src={game.img} />
            <div className="itemDetail__card">
              <h1>{game.titulo}</h1>
              <p className="itemDetail__card__categorias">
                Categorias: {game.categorias.join()}
              </p>
              <p className="itemDetail__card__desc">{game.descripcion}</p>
              <h3>${game.precio}</h3>
              <input type="button" value="Comprar" className="f1 btnStyle1" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default itemDetailContainerPage;
