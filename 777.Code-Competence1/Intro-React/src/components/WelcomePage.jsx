import HeroSection from "./HeroSection";
import Navbar from "./Navbar";
import Contact from "./Contact";

import Footers from "./Footer";
const WelcomePage = () => {
  return (
    <div>
      {/* Header Section */}
      <Navbar />

      {/* Welcome Section */}
      <HeroSection />
      <Contact />
      <Footers />
    </div>
  );
};

export default WelcomePage;
