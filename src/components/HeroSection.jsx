import React, { useEffect, useState } from "react";
import "./Style.css";

const HeroSection = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="hero-container">
      {/* White fade overlay */}
      <div className="fade-overlay"></div>

      <div className="floating-card card-left">
        <span>Loads in seconds</span>
      </div>

      <div
        className="center-phone"
        style={{
          transform: `translateY(${-offset * 0.2}px)`, // negative for reverse
          transition: "transform 0.05s linear",
        }}
      >
        <img src="/images/mobile.avif" alt="Phone UI" />
      </div>

      <div className="floating-card card-right">
        <span>Increases 70% chances of checkout</span>
      </div>

      <div className="floating-card card-right1">
        <span>Works perfectly on every device</span>
      </div>
    </div>
  );
};

export default HeroSection;
