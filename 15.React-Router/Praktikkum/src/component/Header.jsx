import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <header>
        {/* Navbar */}
        <nav className="bg-gray-100 shadow-md">
          <div className="container mx-auto px-4 py-3 flex justify-between items-center">
            {/* Logo di Kiri */}
            <a className="text-2xl font-semibold" href="#">
              <h3>SIMPLE HEADER</h3>
            </a>
            <button
              className="block lg:hidden text-gray-500 focus:outline-none"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
            <div className="hidden lg:flex space-x-8" id="navbarNav">
              {/* Nav List di Kanan */}
              <ul className="flex items-center space-x-1">
                <li>
                  <Link
                    className="bg-blue-500 text-white py-2 px-4 rounded-md"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-blue-500 hover:text-blue-600 py-2 px-4"
                    to="/createproduct"
                  >
                    Create Product
                  </Link>
                </li>
                <li>
                  <a
                    className="text-blue-500 hover:text-blue-600 py-2 px-4"
                    href="#"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a className="text-gray-400 cursor-not-allowed py-2 px-4">
                    Disabled
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
