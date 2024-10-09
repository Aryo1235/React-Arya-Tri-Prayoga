import "./App.css";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import ProductForm from "./components/ProductForm";

function App() {
  return (
    <>
      <Header />
      <section className="container mt-5">
        <div className=" row justify-content-center">
          <MainContent />
          <ProductForm />
        </div>
      </section>
    </>
  );
}

export default App;
