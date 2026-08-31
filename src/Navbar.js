import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState();
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (location.pathname === "/properties") {
      setActive("Property");
    } else if (location.hash === "#how-it-works") {
      setActive("Works");
    } else if (location.hash === "#testimonials") {
      setActive("Test");
    } else {
      setActive("Home");
    }
  }, [location]);

  const goHome = () => {
    setActive("Home");
    setMenuOpen(false);
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goHomeSection = (hash, navKey) => {
    setActive(navKey);
    setMenuOpen(false);
    if (location.pathname !== "/") {
      navigate(`/${hash}`);
    } else {
      document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="navbar position-fixed top-0 w-100" style={{ zIndex: "3" }}>
      <nav className={`navbar-field container fw-medium ${scrolled ? "scrolledNav" : ""}`}>
        <div
          className="nav-logo d-flex align-items-center"
          role="button"
          onClick={goHome}
        >
          <div className="logo">
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              aria-hidden="true"
              height="24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
              ></path>
            </svg>
          </div>
          <span>RealEstate</span>
        </div>
        <button
          className="nav-toggle"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
        >
          <i className={`fa-solid ${menuOpen ? "fa-xmark" : "fa-bars"}`}></i>
        </button>
        <ul className={`nav-links mb-0 ${menuOpen ? "is-open" : ""}`}>
          <li className={active === "Home" ? "active" : ""} onClick={goHome}>
            Home
          </li>
          <li
            className={active === "Works" ? "active" : ""}
            onClick={() => goHomeSection("#how-it-works", "Works")}
          >
            How It Works
          </li>
          <li
            className={active === "Property" ? "active" : ""}
            onClick={() => {
              setActive("Property");
              setMenuOpen(false);
              navigate("/properties");
            }}
          >
            Properties
          </li>
          <li
            className={active === "Test" ? "active" : ""}
            onClick={() => goHomeSection("#testimonials", "Test")}
          >
            Testmonials
          </li>
        </ul>
        <div className="right-nav">
          <button className="btn">
            <i className="fa-regular fa-user"></i>
          </button>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
