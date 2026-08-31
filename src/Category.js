function Category() {
  return (
    <div className="container categoryTime text-center">
      <h1 className="fw-bolder"> Browse By Category</h1>
      <p className="text-secondary">
        Explore curated collections of properties tailored to your specific
        lifestyle and needs.
      </p>
      <div className="categories d-flex justify-content-between py-4 text-start text-white">
        <div
          className="mainCate p-3"
          style={{ backgroundImage: "url('images/luxVilla.png')" }}
        >
          <h4>Luxury Villa</h4>
          <h6>5 Properities</h6>
        </div>
        <div
          className="mainCate p-3"
          style={{ backgroundImage: "url('images/pentHouse.png')" }}
        >
          <h4>Penthouse</h4>
          <h6>2 Properities</h6>
        </div>
        <div
          className="mainCate p-3"
          style={{ backgroundImage: "url('images/commercial.png')" }}
        >
          <h4>Commercial</h4>
          <h6>1 Properities</h6>
        </div>
        <div
          className="mainCate p-3"
          style={{ backgroundImage: "url('images/apartment.png')" }}
        >
          <h4>Modern Apartments</h4>
          <h6>1 Properities</h6>
        </div>
      </div>
    </div>
  );
}

export default Category;
