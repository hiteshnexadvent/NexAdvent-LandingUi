import React from "react";
import { motion } from "framer-motion";
import "./slide.css";

const testimonials = [
  {
    rating: 5,
    text: "NexAdvent delivered exactly what they promised, a store that sells. We doubled our orders in the first month.",
    name: "Arnav, ",
    role: "Fashion Brand Owner",
    img: "/images/test1.avif"
  },
  {
    rating: 5,
    text: "Everything was ready. Payments, tracking, email marketing — I started getting sales from day one.",
    name: "Ayesha",
    role: "Fashion Label",
    img: "/images/test1.avif"
  },
  {
    rating: 5,
    text: "Lunera made our site look premium without custom coding. Perfect blend of form and function.",
    name: "Marcus Reed",
    role: "CTO, TechVault",
    img: "/images/test1.avif"
  }
];

export default function TestimonialSlider() {
  return (
    <section className="testimonial-section">
      <h2 className="testimonial-heading">Real Stories, Real Results</h2>
      <div className="testimonial-container">
        {testimonials.map((t, i) => (
          <motion.div
            className="testimonial-card"
            key={i}
            whileHover={{ y: -5 }}
          >
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
          </motion.div>
        ))}
      </div>
    </section>
  );
}
