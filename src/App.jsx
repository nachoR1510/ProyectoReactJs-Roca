import "./sass/main.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/footer/footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage/homePage";
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
          <Navbar />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/category/:categoryId" element={<Category />} />
            <Route path="/item/:id" element={<ItemDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
          <Footer />
        </div>
      </CartProvider>
    </Router>
  );
};

export default App;
