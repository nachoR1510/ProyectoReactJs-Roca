import "./sass/main.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/homePage/homePage";
import Category from "./pages/categoryPage/categoryPage";
import ItemDetail from "./pages/itemDetailContainerPage/itemDetailContainerPage";
import Cart from "./pages/cartDetailPage/cartDetailPage";
import Checkout from "./pages/checkoutPage/checkoutPage";
import CartProvider from "./context/cartContext";

const App = () => {
  return (
    <Router>
      <CartProvider>
        <div>
          <style>
            @import
            url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap');
          </style>

          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:categoryId" element={<Category />} />
            <Route path="/item/:id" element={<ItemDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </div>
      </CartProvider>
    </Router>
  );
};

export default App;
