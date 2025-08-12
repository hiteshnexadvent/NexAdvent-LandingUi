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

  // Card positions — direct top jump
  const y1 = useTransform(scrollYProgress, [0, 0.33, 0.34], [0, 0, 0]);
  const y2 = useTransform(scrollYProgress, [0, 0.33, 0.34], [350, 0, 0]); // gap kam kiya (200px)
  const y3 = useTransform(scrollYProgress, [0, 0.66, 0.67], [700, 400, 0]);

  // z-index controls for stacking
  const z1 = useTransform(scrollYProgress, [0, 0.33, 0.34], [3, 3, 1]);
  const z2 = useTransform(scrollYProgress, [0, 0.33, 0.34, 0.66, 0.67], [1, 4, 4, 4, 1]);
  const z3 = useTransform(scrollYProgress, [0, 0.66, 0.67], [1, 1, 5]);

  // Fade out effect for hiding previous cards
  const opacity1 = useTransform(scrollYProgress, [0.3, 0.34], [1, 0]);
  const opacity2 = useTransform(scrollYProgress, [0.63, 0.67], [1, 0]);

  return (
    <section className="steps-container" ref={sectionRef}>
      <div className="steps-left">
        <button className="steps-tag">How It Works</button>
        <h2>We Keep It Simple</h2>
      </div>

      <div className="steps-right" style={{ position: "relative", height: "100vh" }}>
        
        {/* Card 1 */}
<motion.div
  className="step-card"
  style={{
    y: y1,
    zIndex: z1,
    opacity: opacity1,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0
  }}
>
  <div>
    <h3 style={{textAlign:'start',color:'#143cbd',fontWeight:'600'}}>{steps[0].title}</h3>
    <p style={{textAlign:'start',color:'#585656'}}>{steps[0].desc}</p>
    <img 
      src={steps[0].image} 
      alt={steps[0].title} 
      style={{ width: "60%", marginTop: "10px" }} 
    />
  </div>
</motion.div>

{/* Card 2 */}
<motion.div
  className="step-card"
  style={{
    y: y2,
    zIndex: z2,
    opacity: opacity2,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0
  }}
>
  <div>
    <h3 style={{textAlign:'start',color:'#143cbd',fontWeight:'600'}}>{steps[1].title}</h3>
    <p style={{textAlign:'start',color:'#585656'}}>{steps[1].desc}</p>
    <img 
      src={steps[1].image} 
      alt={steps[1].title} 
      style={{ width: "60%", marginTop: "10px" }} 
    />
  </div>
</motion.div>

{/* Card 3 */}
<motion.div
  className="step-card"
  style={{
    y: y3,
    zIndex: z3,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0
  }}
>
  <div>
    <h3 style={{textAlign:'start',color:'#143cbd',fontWeight:'600'}}>{steps[2].title}</h3>
    <p style={{textAlign:'start',color:'#585656'}}>{steps[2].desc}</p>
    <img 
      src={steps[2].image} 
      alt={steps[2].title} 
      style={{ width: "60%", marginTop: "10px" }} 
    />
  </div>
</motion.div>

      </div>
    </section>
  );
}
