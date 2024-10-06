import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footers = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Website Name */}
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-semibold">MyWebsite</h2>
            <p className="mt-2">Your trusted partner in business.</p>
          </div>

          {/* Contact Information */}
          <div className="mb-4 md:mb-0">
            <h3 className="font-semibold text-lg">Contact Us</h3>
            <p>Phone: +62 123 456 789</p>
            <p>Address: 123 Main Street, Jakarta, Indonesia</p>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-500"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-pink-500"
            >
              <FaInstagram size={24} />
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p>&copy; 2024 MyWebsite. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footers;
