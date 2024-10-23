import "./App.css";
import CreateProduct from "./CreateProduct";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<CreateProduct />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
