import { useEffect } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Properties from "./Properties";

function PropertiesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="appMain">
      <Navbar />
      <section className="properties-page-hero">
        <div className="container text-center">
          <p className="properties-page-kicker text-uppercase mb-2">Listings</p>
          <h1 className="fw-bolder mb-3">
            All <span className="text-teal">Properties</span>
          </h1>
          <p className="text-secondary mx-auto mb-0" style={{ maxWidth: "680px" }}>
            Explore every apartment, villa, penthouse, and commercial space on
            our platform. Filter by type, compare price and location, and open
            a listing for full apartment details.
          </p>
        </div>
      </section>
      <Properties />
      <Footer />
    </div>
  );
}

export default PropertiesPage;
