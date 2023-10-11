import "./sass/main.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/homePage/homePage";
import Category from "./pages/categoryPage/categoryPage";
import ItemDetail from "./pages/itemDetailContainerPage/itemDetailContainerPage";

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
          <Route path="/category/:categoryId" element={<Category />} />
          <Route path="/item/:id" element={<ItemDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
