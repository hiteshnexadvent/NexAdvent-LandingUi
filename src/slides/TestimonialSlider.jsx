import React from "react";
import "./slide.css";

const testimonials = [
  {
    rating: 5,
    text: "Lunera made our site look premium without custom coding. Perfect blend of form and function.",
    name: "Marcus Reed",
    role: "CTO, TechVault",
    img: "/images/test1.avif"
  },
  {
    rating: 5,
    text: "The attention to detail in Lunera is unmatched. Our clients love the polished feel!",
    name: "Sophie Yang",
    role: "UX Designer, FlowStudio",
    img: "/images/test1.avif"
  },
  {
    rating: 5,
    text: "Lunera’s modern aesthetics and ease of use impressed both our team and customers.",
    name: "Nia Johnson",
    role: "Product Lead, ZenMetrics",
    img: "/images/test1.avif"
  },
  {
    rating: 5,
    text: "Lunera’s modular design let us customize effortlessly. Our landing page performance soared!",
    name: "Elena Petrova",
    role: "Head of Growth, DataPulse",
    img: "/images/test1.avif"
  }
];
function Row({ direction }) {
  // Duplicate testimonials for smooth infinite loop
  const items = [...testimonials, ...testimonials];

  return (
    <div className={`slider-row ${direction}`}>
      {items.map((t, i) => (
        <div className="testimonial-card" key={i}>
          <div className="stars">
            {"★".repeat(t.rating).split("").map((star, idx) => (
              <span key={idx} className="star">{star}</span>
            ))}
          </div>
          <p className="testimonial-text">{t.text}</p>
          <div className="testimonial-author">
            <img src={t.img} alt={t.name} className="author-img" />
            <div>
              <h4 className="author-name">{t.name}</h4>
              <p className="author-role">{t.role}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function TestimonialSlider() {
  return (
    <section className="testimonial-section">
      <h3 className="testimonial-heading">Testimonials</h3>
      <Row direction="left" />
      <Row direction="right" />
    </section>
  );
}
