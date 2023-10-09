import "./sass/main.css";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/itemListContainer/itemListContainer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/homePage";

const App = () => {
  return (
    <Router>
      <div>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Playfair+Display+SC:wght@700&display=swap');
          @import
          url('https://fonts.googleapis.com/css2?family=Rubik+Mono+One&display=swap');
        </style>

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
