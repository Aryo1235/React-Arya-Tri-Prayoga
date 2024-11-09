import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GeminiAi from "./GeminiAi";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<GeminiAi />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
