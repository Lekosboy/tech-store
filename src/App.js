import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import Products from "./pages/ProductsPage";
import Contact from "./pages/ContactPage";
import SingleProduct from "./pages/SingleProductPage";
import Cart from "./pages/CartPage";
import Default from "./pages/Default.js";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/SideBar";
import Sidecart from "./components/SideCart";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      {/* navbar, sidebar,cart, footer */}
      <Navbar />
      <Sidebar />
      <Sidecart />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" exact element={<Products />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Default />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
