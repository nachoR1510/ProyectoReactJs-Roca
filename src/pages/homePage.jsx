import { useEffect, useState } from "react";
import Item from "../components/itemListContainer/itemListContainer";

const homePage = () => {
  const [chars, setChars] = useState([]);

  useEffect(() => {
    fetch("../../data.json")
      .then((response) => response.json())
      .then((data) => setChars(data));
  }, []);

  return (
    <div>
      <main className="main bgImg">
        <div className="main__titulo">
          <h2 className="f2">GameKey Kingdom</h2>

          <a href="#" className="f1">
            Empezar a explorar juegos
          </a>
        </div>
        <p className="main__fondo"></p>
      </main>

      <section id="tienda">
        {chars.map((char) => {
          return <Item char={char} />;
        })}
      </section>
    </div>
  );
};

export default homePage;
