import React from "react";
import "./slide.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-left">
          <h3>Contact us at</h3>
          <h5 className="footer-email">lunera@tech.com</h5>

          <div className="newsletter">
            <input type="email" placeholder="name@email.com" />
            <button>Subscribe</button>
          </div>
        </div>

        <div className="footer-links">
          <div>
            <h4>Links</h4>
            <ul>
              <li>Home</li>
              <li>Features</li>
              <li>Pricing</li>
              <li>Integrations</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h4>More Resources</h4>
            <ul>
              <li>FAQ</li>
              <li>Blog</li>
              <li>Testimonials</li>
              <li>Terms</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
      </div>

      {/* <div className="footer-bottom">
        <p>Designed by Lunis</p>
        <p className="made">Made in Framer</p>
      </div> */}
    </footer>
  );
}
