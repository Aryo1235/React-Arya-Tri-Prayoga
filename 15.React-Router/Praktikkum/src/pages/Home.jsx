import ButtonLoad from "../component/ButtonLoad";
import Card from "../component/Card";
import Footer from "../component/Footer";
import Header from "../component/Header";
import HeroSection from "../component/HeroSection";
import Input from "../component/Input";
const HomePages = () => {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        <HeroSection />
        <section className="my-4">
          <h1 className="mx-3 my-8 text-3xl font-bold ">Product List</h1>
          <div className="flex  justify-center">
            <Card />
            <Card />
            <Card />
          </div>
          <ButtonLoad />
        </section>
        <Input />
      </main>
      <Footer />
    </>
  );
};

export default HomePages;
