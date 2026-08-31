import React, { useState, useEffect, useRef } from "react";

function Homepage() {
  const [activeTab, setActiveTab] = useState("buy");
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("Apartment");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="container homePage d-flex align-items-start min-vh-100 justify-content-between">
      <div className="homeStartLeft d-flex flex-column min-vh-100">
        <h1 className="hero-title">
          Find Your <span>Perfect</span> Next Chapter.
        </h1>
        <p className="text-secondary mt-3 mb-4">
          Experience the most advanced real estate search platform. Discover
          verified listings, connect with top agents, and find a place you'll
          love.
        </p>

        {/* Tabs */}
        <div className="search-tabs d-flex gap-2 mb-3">
          {["buy", "rent", "sell"].map((tab) => (
            <button
              key={tab}
              className={`tab-btn ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Main Search Container */}
        <div className="search-container d-flex align-items-center w-100">
          {/* Location Section */}
          <div className="search-field-wrapper d-flex flex-grow-1 align-items-center px-4 py-3 gap-3">
            <div className="field-icon-wrapper">
              <i className="fa-solid fa-location-dot"></i>
            </div>
            <div className="d-flex flex-column flex-grow-1">
              <span className="field-label">LOCATION</span>
              <input
                className="field-input"
                type="text"
                placeholder="Where are you looking for"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
          </div>

          <div className="field-divider"></div>

          {/* Property Type Custom Dropdown */}
          <div
            className="search-field-wrapper d-flex flex-grow-1 align-items-center px-4 py-3 gap-3 position-relative"
            onClick={() => setDropdownOpen(!dropdownOpen)}
            ref={dropdownRef}
          >
            <div className="field-icon-wrapper">
              <i className="fa-solid fa-house"></i>
            </div>
            <div className="d-flex flex-column flex-grow-1 justify-content-center">
              <span className="field-label">PROPERTY TYPE</span>
              <div className="custom-select-trigger d-flex justify-content-between align-items-center">
                <span className="selected-value">{propertyType}</span>
                <i
                  className={`fa-solid fa-chevron-down select-arrow ${
                    dropdownOpen ? "rotated" : ""
                  }`}
                ></i>
              </div>

              {dropdownOpen && (
                <div className="custom-dropdown-menu">
                  {["Apartment", "Villa", "Penthouse", "Commercial"].map(
                    (type) => (
                      <div
                        key={type}
                        className={`dropdown-option ${
                          propertyType === type ? "selected" : ""
                        }`}
                        onClick={(e) => {
                          e.stopPropagation();
                          setPropertyType(type);
                          setDropdownOpen(false);
                        }}
                      >
                        {type}
                      </div>
                    ),
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Search Action Button */}
          <div className="p-2">
            <button className="search-btn d-flex align-items-center justify-content-center gap-2">
              <i className="fa-solid fa-magnifying-glass"></i>
              <span>Search</span>
            </button>
          </div>
        </div>
        <div className="footHome d-flex justify-content-between">
          <div>
            <h1>12K+</h1>
            <h1>READY PROPERTIES</h1>
          </div>
          <div>
            <h1>500+</h1>
            <h1>AGENT NETWORK</h1>
          </div>
          <div>
            <h1>4.8/5</h1>
            <h1>USER RATING</h1>
          </div>
        </div>
      </div>

      <div className="homeStartRight">
        <div className="rightImg">
          <img
            className="w-100 rounded-5"
            src="/images/landBanner.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
export default Homepage;
