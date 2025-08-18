import React from 'react';
import './slide.css';

const FooterMarquee = () => {
  const items = [
    "Clean Code & Powerful Backends",
    "Mobile-First, Always Responsive",
    "Built with Best Security",
    "UX-Led, Data-Informed Design",
    "Speed Optimized for SEO & UX",
    "Mobile-First, Always Responsive",
    "Modern Layouts and Designs",
    "Built with Best Security",
    "Scalable & Secure Architecture",
    "Future-Ready Website Development"
  ];

  const rendered = items.map((item, i) => (
    <span key={i}>{item}</span>
  ));

  return (
    <div className="marquee-wrapper">
      <div className="marquee-track">
        <div className="marquee-content">{rendered}</div>
        <div className="marquee-content">{rendered}</div>
      </div>
    </div>
  );
};

export default FooterMarquee;
