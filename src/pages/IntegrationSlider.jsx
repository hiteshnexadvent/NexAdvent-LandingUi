import React from "react";
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
  return (
    <section className="integration-section">
      <h2>
        Powerful Integrations,<br />Effortless Setup
      </h2>

      <motion.div
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
              whileHover={{ scale: 1.1, boxShadow: "0 12px 30px rgba(0,0,0,0.2)" }}
              style={{
                transform: `rotate(${angle}deg) translate(0, -160px) rotate(-${angle}deg)`
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
