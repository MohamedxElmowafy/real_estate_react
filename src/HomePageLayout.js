import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Category from "./Category";
import Footer from "./Footer";
import Homepage from "./Homepage";
import HowItWorks from "./HowItWorks";
import Navbar from "./Navbar";
import Properties from "./Properties";
import Reviews from "./Reviews";

function HomePageLayout() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      document.querySelector(location.hash)?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <div className="appMain">
      <Navbar />
      <Homepage />
      <Category />
      <HowItWorks />
      <Reviews />
      <Properties preview />
      <Footer />
    </div>
  );
}

export default HomePageLayout;
