import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const integrations = [
  { name: 'meta', img: '/images/meta.png' },
  { name: 'instagram', img: '/images/insta.png' },
  { name: 'gmail', img: '/images/gmail.png' },
  { name: 'interakt', img: '/images/interakt.png' },
  { name: 'whatsapp', img: '/images/whatsapp.jpg' },
  { name: 'wati', img: '/images/wati.png' },
  { name: 'razorpay', img: '/images/razorpay.png' },
  { name: 'microsoft', img: '/images/microsoft.jpg' },
];

const IntegrationSlider = () => {
  const containerRef = useRef(null);
  const [radius, setRadius] = useState(160);

  useEffect(() => {
    const updateRadius = () => {
      if (containerRef.current) {
        const size = containerRef.current.offsetWidth;
        setRadius(size / 2 - 40); // 40px = half of icon size
      }
    };
    updateRadius();
    window.addEventListener("resize", updateRadius);
    return () => window.removeEventListener("resize", updateRadius);
  }, []);

  return (
    <section className="integration-section">
      <h2>
        Powerful Integrations,<br />Effortless Setup
      </h2>

      <motion.div
        ref={containerRef}
        className="arc-container"
        animate={{ rotate: [0, 360] }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
      >
        {integrations.map((item, i) => {
          const angle = (360 / integrations.length) * i;
          return (
            <motion.div
              key={i}
              className="arc-item"
              style={{
                transform: `rotate(${angle}deg) translate(0, -${radius}px) rotate(-${angle}deg)`
              }}
            >
              <img src={item.img} alt={item.name} />
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default IntegrationSlider;
