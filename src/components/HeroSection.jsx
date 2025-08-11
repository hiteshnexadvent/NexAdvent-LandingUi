import React from "react";
// import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="floating-card card-left">
        <span>Loads in seconds</span>
      </div>

      <div className="center-phone">
        <img src='/images/mobile.avif' alt="Phone UI" />
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
