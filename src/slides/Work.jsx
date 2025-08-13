import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./slide.css";

const steps = [
  {  
    title: "We Talk", 
    desc: "You tell us about your products, market, and goals. We map out your store plan.",
    image: "/images/choose4.svg"
  },
  { 
    image: "/images/choose5.svg", 
    title: "We Build", 
    desc: "Our team sets up your Shopify store, optimizes for conversions, and connects all the sales tools." 
  },
  { 
    image: "/images/choose6.svg", 
    title: "You Sell", 
    desc: "Your store goes live, ready to take orders 24/7." 
  }
];

export default function Work() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  const cardGap = 40;
  const cardHeight = 300;
// Scroll phases — 3rd card ke liye zyada space
// Scroll phases (same)
const p1 = 0.0;
const p2 = 0.33;
const p3 = 0.66;
const p4 = 1.0;

// Sticky + Slide animations (same)
const y1 = useTransform(scrollYProgress, [p1, p2], [0, 0]);
const y2 = useTransform(scrollYProgress, [p1, p2, p3], [cardHeight + cardGap, 0, 0]);
const y3 = useTransform(scrollYProgress, [p2, p3, p4], [(cardHeight + cardGap) * 2, 0, 0]);

// Opacity — slow overlap
const opacity1 = useTransform(scrollYProgress, [p1, p2 - 0.15, p2], [1, 1, 0]);
const opacity2 = useTransform(scrollYProgress, [p2, p3 - 0.15, p3], [1, 1, 0]);
const opacity3 = useTransform(scrollYProgress, [p3, p4 - 0.15, p4], [1, 1, 0]);

// Z-index — match overlap slowdown
const z1 = useTransform(scrollYProgress, [p1, p2 - 0.15], [3, 1]);
const z2 = useTransform(scrollYProgress, [p1 + 0.15, p3 - 0.15], [2, 3]);
const z3 = useTransform(scrollYProgress, [p2 + 0.15, p4], [2, 3]);


  return (
    <section
      ref={sectionRef}
      className="steps-container"
      style={{ minHeight: `${cardHeight * steps.length + cardGap * (steps.length - 1)}px` }}
    >
      <div className="steps-left">
        <button className="steps-tag">How It Works</button>
        <h2>We Keep It Simple</h2>
      </div>

      {/* Sticky container */}
      <div className="steps-right" style={{ position: "sticky", top: "100px", height: cardHeight }}>
        
        {/* Card 1 */}
        <motion.div
          className="step-card"
          style={{
            y: y1,
            zIndex: z1,
            opacity: opacity1,
            position: "absolute",
            top: 0, left: 0, right: 0
          }}
        >
          <h3 className="step-title">{steps[0].title}</h3>
          <p className="step-desc">{steps[0].desc}</p>
          <img src={steps[0].image} alt={steps[0].title} style={{ width: "60%", marginTop: "10px" }} />
        </motion.div>

        {/* Card 2 */}
        <motion.div
          className="step-card"
          style={{
            y: y2,
            zIndex: z2,
            opacity: opacity2,
            position: "absolute",
            top: 0, left: 0, right: 0
          }}
        >
          <h3 className="step-title">{steps[1].title}</h3>
          <p className="step-desc">{steps[1].desc}</p>
          <img src={steps[1].image} alt={steps[1].title} style={{ width: "60%", marginTop: "10px" }} />
        </motion.div>

        {/* Card 3 */}
        <motion.div
          className="step-card"
          style={{
            y: y3,
            zIndex: z3,
            opacity: opacity3,
            position: "absolute",
            top: 0, left: 0, right: 0
          }}
        >
          <h3 className="step-title">{steps[2].title}</h3>
          <p className="step-desc">{steps[2].desc}</p>
          <img src={steps[2].image} alt={steps[2].title} style={{ width: "60%", marginTop: "10px" }} />
        </motion.div>
      </div>
    </section>
  );
}
