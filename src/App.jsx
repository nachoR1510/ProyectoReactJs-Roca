import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Items from "./components/itemListContainer/itemListContainer";
import imgBaldursGate3 from "./img/baldursGate3.webp";
import imgStarfield from "./img/starfield.jpg";
import imgSekiro from "./img/sekiro.webp";
import imgDbd from "./img/dbd.jpg";
import imgBioInf from "./img/bioshockInifinite.jpg";
import imgTCM from "./img/TCM.jpg";

const App = () => {
  return (
    <div>
      <Navbar />

      <section className="tienda">
        <Items img={imgBaldursGate3} titulo="Baldurs gate 3" precio="$9999" />
        <Items img={imgStarfield} titulo="Starfield" precio="$12000" />
        <Items img={imgSekiro} titulo="Sekiro" precio="$650" />
        <Items img={imgDbd} titulo="Dead by dayligth" precio="$1600" />
        <Items img={imgBioInf} titulo="Bioshock infinite" precio="$400" />
        <Items
          img={imgTCM}
          titulo="The texas chainsaw massacre"
          precio="$2000"
        />
      </section>
    </div>
  );
};

export default App;
