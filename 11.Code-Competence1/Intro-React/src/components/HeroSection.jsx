const HeroSection = () => {
  return (
    <section
      className="bg-blue-600 text-white mt-8 py-64 bg-cover bg-center"
      style={{
        backgroundImage: 'url("/hero-image.jpg")',
      }}
    >
      <div className="container mx-auto px-6 text-center  py-12 rounded-lg">
        <h2 className="text-4xl font-bold mb-4">Welcome to Our Website</h2>
        <p className="text-lg mb-8">
          We provide the best services to help your business grow.
        </p>
        <button className="px-6 py-2 bg-white text-blue-600 font-semibold rounded-md hover:bg-blue-50 transition">
          Get Started
        </button>
      </div>
    </section>
  );
};
export default HeroSection;
