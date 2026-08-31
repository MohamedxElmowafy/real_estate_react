import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const FALLBACK_PHOTO = "/images/apartment.png";
const PREVIEW_COUNT = 6;

function Properties({ preview = false }) {
  const navigate = useNavigate();
  const { properties, loading, error } = useSelector((state) => state.properties);
  const [activeFilter, setActiveFilter] = useState("All");
  const [selected, setSelected] = useState(null);
  const [favorites, setFavorites] = useState({});

  useEffect(() => {
    if (!selected) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event) => {
      if (event.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selected]);

  const categories = useMemo(() => {
    const unique = [...new Set(properties.map((item) => item.category))];
    return ["All", ...unique];
  }, [properties]);

  const visibleProperties = useMemo(() => {
    const filtered =
      activeFilter === "All"
        ? properties
        : properties.filter((item) => item.category === activeFilter);
    return preview ? filtered.slice(0, PREVIEW_COUNT) : filtered;
  }, [activeFilter, preview, properties]);

  const toggleFavorite = (id) => {
    setFavorites((current) => ({ ...current, [id]: !current[id] }));
  };

  return (
    <section id="properties" className="properties-section py-5">
      <div className="container text-center">
        {preview ? (
          <>
            <h1 className="fw-bolder">
              Featured <span className="text-teal">Properties</span>
            </h1>
            <p className="text-secondary mx-auto" style={{ maxWidth: "640px" }}>
              A short look at our latest listings. Open Discover more for the
              full properties catalog.
            </p>
          </>
        ) : null}

        {!preview && (
          <div className="d-flex flex-wrap justify-content-center gap-2 pb-5">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={`btn filter-btn ${
                  activeFilter === category ? "active-filter" : "inactive-filter"
                }`}
                onClick={() => setActiveFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>
        )}

        {loading && visibleProperties.length === 0 && (
          <p className="text-secondary">Loading listings...</p>
        )}
        {error && (
          <p className="text-secondary">
            Showing saved listings. Live feed could not be loaded.
          </p>
        )}

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 text-start">
          {visibleProperties.map((property) => (
            <div className="col" key={property.id}>
              <article className="property-card card h-100 border rounded-4 overflow-hidden bg-white">
                <div className="card-image-wrapper position-relative overflow-hidden">
                  <img
                    className="property-card-img"
                    src={property.photo || FALLBACK_PHOTO}
                    alt={property.name}
                    onError={(event) => {
                      event.currentTarget.src = FALLBACK_PHOTO;
                    }}
                  />
                  <span className="category-badge badge bg-teal text-white position-absolute top-0 start-0 m-3">
                    {property.category}
                  </span>
                  <div className="position-absolute top-0 end-0 m-3 d-flex flex-column align-items-end gap-2">
                    {property.label && (
                      <span className="badge-tag label-tag">{property.label}</span>
                    )}
                    {property.verified && (
                      <span className="badge-tag verified-tag">
                        <i className="fa-solid fa-circle-check me-1"></i>
                        Verified
                      </span>
                    )}
                  </div>
                  <button
                    type="button"
                    className="favorite-btn btn rounded-circle p-0 position-absolute bottom-0 end-0 m-3 d-flex align-items-center justify-content-center"
                    aria-label="Save listing"
                    onClick={() => toggleFavorite(property.id)}
                  >
                    <i
                      className={`${
                        favorites[property.id] ? "fa-solid text-danger" : "fa-regular"
                      } fa-heart`}
                    ></i>
                  </button>
                </div>

                <div className="card-body p-4 d-flex flex-column">
                  <p className="property-price text-teal mb-2">{property.price}</p>
                  <h3 className="property-title fw-bold mb-2">{property.name}</h3>
                  <p className="text-secondary mb-3">
                    <i className="fa-solid fa-location-dot text-teal me-2"></i>
                    {property.location}
                  </p>

                  <div className="property-specs-grid d-flex justify-content-between py-3 mb-3">
                    <div className="spec-item text-center">
                      <i className="fa-solid fa-bed text-teal"></i>
                      <div className="fw-semibold">{property.beds || "—"}</div>
                      <div className="spec-label text-secondary text-uppercase">Beds</div>
                    </div>
                    <div className="spec-item text-center">
                      <i className="fa-solid fa-bath text-teal"></i>
                      <div className="fw-semibold">{property.baths || "—"}</div>
                      <div className="spec-label text-secondary text-uppercase">Baths</div>
                    </div>
                    <div className="spec-item text-center">
                      <i className="fa-solid fa-ruler-combined text-teal"></i>
                      <div className="fw-semibold">{property.sqft}</div>
                      <div className="spec-label text-secondary text-uppercase">Sqft</div>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="btn btn-teal w-100 py-2-5 rounded-pill fw-semibold mt-auto"
                    onClick={() => setSelected(property)}
                  >
                    View details
                  </button>
                </div>
              </article>
            </div>
          ))}
        </div>

        {preview && (
          <div className="pt-5">
            <button
              type="button"
              className="btn btn-teal discover-more-btn rounded-pill px-5 py-2-5 fw-semibold"
              onClick={() => navigate("/properties")}
            >
              Discover more
              <i className="fa-solid fa-arrow-right ms-2"></i>
            </button>
          </div>
        )}
      </div>

      {selected && (
        <div
          className="modal-overlay d-flex align-items-center justify-content-center"
          onClick={() => setSelected(null)}
        >
          <div
            className="modal-container bg-white rounded-4 overflow-hidden d-flex flex-column flex-lg-row position-relative"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="modal-close-btn btn rounded-circle p-0 d-flex align-items-center justify-content-center"
              onClick={() => setSelected(null)}
              aria-label="Close details"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
            <div className="modal-img-col col-lg-5 p-0">
              <img
                className="modal-main-img"
                src={selected.photo || FALLBACK_PHOTO}
                alt={selected.name}
                onError={(event) => {
                  event.currentTarget.src = FALLBACK_PHOTO;
                }}
              />
            </div>
            <div className="modal-details-col col-lg-7 p-4 p-lg-5 text-start">
              <span className="badge bg-teal mb-3">{selected.category}</span>
              <h2 className="fw-bolder mb-2">{selected.name}</h2>
              <p className="text-secondary mb-3">
                <i className="fa-solid fa-location-dot text-teal me-2"></i>
                {selected.location}
              </p>
              <p className="property-price text-teal mb-4">{selected.price}</p>
              <div className="property-specs-grid d-flex justify-content-between py-3 mb-4">
                <div className="spec-item text-center">
                  <i className="fa-solid fa-bed text-teal"></i>
                  <div className="fw-semibold">{selected.beds || "—"}</div>
                  <div className="spec-label text-secondary text-uppercase">Beds</div>
                </div>
                <div className="spec-item text-center">
                  <i className="fa-solid fa-bath text-teal"></i>
                  <div className="fw-semibold">{selected.baths || "—"}</div>
                  <div className="spec-label text-secondary text-uppercase">Baths</div>
                </div>
                <div className="spec-item text-center">
                  <i className="fa-solid fa-ruler-combined text-teal"></i>
                  <div className="fw-semibold">{selected.sqft}</div>
                  <div className="spec-label text-secondary text-uppercase">Sqft</div>
                </div>
              </div>
              {selected.amenities?.length > 0 && (
                <>
                  <h5 className="fw-bold mb-3">Amenities</h5>
                  <div className="d-flex flex-wrap gap-2">
                    {selected.amenities.map((amenity) => (
                      <span
                        key={amenity}
                        className="amenity-tag badge rounded-pill bg-light text-dark px-3 py-2"
                      >
                        {amenity}
                      </span>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Properties;
