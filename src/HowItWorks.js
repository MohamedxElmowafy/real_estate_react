function HowItWorks() {
  return (
    <div id="how-it-works" className="howWorks container text-center my-5">
      <h1 className="fw-bolder">
        Our Seamless <span style={{ color: "#0d9488" }}>Process</span>
      </h1>
      <p className="text-secondary">
        We've simplified the journey of finding your dream home into three
        clear, stress-free steps.
      </p>
      <div className="ourProcess d-flex align-items-start py-5">
        <div className="processNum p-3 d-flex flex-column align-items-center gap-4">
          <h1 className="text-white fs-3">01</h1>
          <i className="fa-solid fa-magnifying-glass-dollar"></i>
          <h3 className="fw-bolder">Smart Search</h3>
          <p className="text-secondary">
            Leverage our AI-driven Smart Search algorithms to find the best
            property matches tailored to your specific preferences.
          </p>
        </div>
        <div className="processNum p-3 d-flex flex-column align-items-center gap-4">
          <h1 className="text-white fs-3">02</h1>
          <i className="fa-solid fa-vr-cardboard"></i>
          <h3 className="fw-bolder">virtual Tours</h3>
          <p className="text-secondary">
            Experience your future home from anywhere with our high-definition
            3D virtual tours and immersive walkthroughs.
          </p>
        </div>
        <div className="processNum p-3 d-flex flex-column align-items-center gap-4">
          <h1 className="text-white fs-3">03</h1>
          <i className="fa-solid fa-handshake"></i>
          <h3 className="fw-bolder">Verified Trust</h3>
          <p className="text-secondary">
            Every listing is strictly audited for ownership and condition,
            ensuring your peace of mind and a secure transaction.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
