import Navbar from "./Navbar";
import Footer from "./Footer";
const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div className="about-container mt-10 flex flex-col items-center p-8 bg-gray-100">
        <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">
          About Us
        </h1>
        <img
          src="/about.jpg"
          alt="About Us"
          className="about-image w-full max-w-md h-auto rounded-lg shadow-lg mb-6"
        />
        <p className="about-description text-lg text-gray-700 text-center max-w-2xl">
          Welcome to our website! We are a passionate team dedicated to
          providing the best service and experience to our users. Our mission is
          to create a user-friendly platform that helps connect people and
          deliver quality content.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
