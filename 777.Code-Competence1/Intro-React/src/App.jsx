import "./App.css";
import AboutUs from "./components/AboutUsPage";
import WelcomePage from "./components/WelcomePage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </>
  );
}

export default App;
