import React from "react";

const logos = [
  "/images/logo1.svg",
  "/images/logo2.svg",
  "/images/logo3.svg",
  "/images/logo4.svg",
  "/images/logo5.svg",
  "/images/logo6.svg",
];

const LogoMarquee = () => {
  return (
    <div className="logo-section">
      <p className="logo-heading">The brands we work with, don’t settle for average. They choose results.</p>
      <div className="marquee">
        <div className="marquee-track">
          {logos.concat(logos).map((logo, index) => (
            <img key={index} src={logo} alt="Logo" className="marquee-logo" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoMarquee;
