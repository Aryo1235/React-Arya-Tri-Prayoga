import "./App.css";
import CreateProduct from "./pages/CreateProduct";
import ProductDetail from "./pages/ProductDetail";
import HomePages from "./pages/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/createproduct" element={<CreateProduct />} />
        <Route path="/createproduct/:id" element={<ProductDetail />} />
      </Routes>
    </>
  );
}

export default App;
