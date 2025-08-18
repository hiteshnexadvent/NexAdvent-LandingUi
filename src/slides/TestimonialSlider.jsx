import React from "react";
import "./slide.css";

const testimonials = [
  {
    rating: 5,
    text: "NexAdvent helped us build a strong online presence. Their ad strategies brought real customers and steady growth in just a few months.",
    name: "Arnav",
    role: "Fashion Brand Owner",
  },
  {
    rating: 5,
    text: "The team is professional, responsive, and result-oriented. Finally, a marketing agency that actually delivers what they promise.",
    name: "Rohit",
    role: "Restaurant Owner",
  },
  {
    rating: 5,
    text: "We trusted NexAdvent for LinkedIn marketing, and they brought in genuine B2B leads. Their approach is data-driven and effective.",
    name: "Mehul",
    role: "IT Consultant",
  },
  {
    rating: 5,
    text: "From day one, they guided us with the right strategy. Now our campaigns run smoothly, and we get consistent results every month.",
    name: "Priya",
    role: "E-Commerce Entrepreneur",
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
            {/* <img src={t.img} alt={t.name} className="author-img" /> */}
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
