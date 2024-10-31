import "./App.css";
import CreateProduct from "./CreateProduct";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetail from "./ProductDetail";
import Login from "./Login";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<CreateProduct />} />
          <Route path="/:id" element={<ProductDetail />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
