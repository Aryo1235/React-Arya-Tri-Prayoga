import "./App.css";
import CreateProduct from "./CreateProduct";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Fetchdata from "./Fetchdata";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<CreateProduct />} />
          <Route path="/fetch" element={<Fetchdata />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
