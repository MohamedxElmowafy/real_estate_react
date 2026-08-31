const testimonials = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "First-time Buyer",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80",
    text: "Finding our dream home felt like an overwhelming task until we partnered with this team. They walked us through every step, explained the complex paperwork, and negotiated a fantastic deal. Highly recommend!",
    featured: false
  },
  {
    id: 2,
    name: "Marcus Chen",
    role: "Property Investor",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80",
    text: "As an investor, I value market insights and efficiency. Their team provided data-driven advice that helped me secure a high-yield commercial property. Their professionalism is unmatched in the industry.",
    featured: true
  },
  {
    id: 3,
    name: "Elena Rostova",
    role: "Home Seller",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80",
    text: "Selling a house is stressful, but they made it seamless. From professional staging advice to a brilliant marketing strategy, we had multiple competitive offers within a week. Truly an outstanding experience!",
    featured: false
  }
];

function Reviews() {
  return (
    <div id="testimonials" className="reviewsTime container text-center">
      <h1>What Our Clients Say</h1>
      <p className="lead-text">
        Our seasoned team excels in real estate with years of successful market
        navigation, offering informed decisions and optimal results.
      </p>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 pt-5">
        {testimonials.map((test) => (
          <div className="col" key={test.id}>
            <div className={`testimonial-card text-start ${test.featured ? "featured" : ""}`}>
              <span className="quote-icon">
                <i className="fa-solid fa-quote-left"></i>
              </span>
              
              <div className="testimonial-avatar-wrapper">
                <img
                  className="testimonial-avatar"
                  src={test.avatar}
                  alt={test.name}
                />
              </div>

              <div className="testimonial-stars">
                {Array.from({ length: test.rating }).map((_, i) => (
                  <i key={i} className="fa-solid fa-star me-1"></i>
                ))}
              </div>

              <p className="testimonial-text">
                "{test.text}"
              </p>

              <div className="testimonial-divider"></div>

              <div className="testimonial-author">
                <h6 className="testimonial-author-name">{test.name}</h6>
                <span className="testimonial-author-role">{test.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reviews;
