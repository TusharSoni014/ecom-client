import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import ProductDetail from "./pages/productDetail/ProductDetail";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchCategories } from "./redux/slices/categorySlice";
import Collection from "./pages/collection/Collection";
import { fetchTopPicks } from "./redux/slices/topPicksSlice";
import toast, { Toaster } from "react-hot-toast";
import Payment from "./pages/payment/Payment";

const notify = () =>
  toast.success("Always at the bottom.", {
    position: "bottom-center",
  });

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchTopPicks());
  }, []);

  return (
    <>
      <Navbar />
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:categoryId?" element={<Collection />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
          <Route path="/payment/:status" element={<Payment />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
