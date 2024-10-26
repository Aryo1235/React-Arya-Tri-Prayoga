import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ProductForm from "./ProductForm";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<ProductForm />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
