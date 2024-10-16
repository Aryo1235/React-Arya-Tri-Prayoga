import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-white shadow fixed top-0  w-full z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-xl font-semibold text-gray-800">MyWebsite</h1>
        </div>

        {/* Navigation */}
        <nav className="flex space-x-4">
          <Link to="/" className="text-gray-800 hover:text-blue-600">
            Home
          </Link>
          <Link to="/about" className="text-gray-800 hover:text-blue-600">
            About
          </Link>
          <a href="#services" className="text-gray-800 hover:text-blue-600">
            Services
          </a>
          <a href="#contact" className="text-gray-800 hover:text-blue-600">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
