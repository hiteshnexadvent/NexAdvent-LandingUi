import React from "react";
import "./slide.css";

export default function Form() {
  return (
    <div className="form-top">
      <div className="form">
        <h2>
          Your Competitors Are Already Selling Online. What Are You Waiting For?
        </h2>
        <p>
          If you’ve got products, we’ve got the blueprint to turn them into
          consistent sales. Let’s get your store live and making money.
        </p>

        <div className="form-wrapper">
          <form className="contact-form">
            <label>Name</label>
            <input type="text" placeholder="Jane Smith" />

            <label>Email</label>
            <input type="email" placeholder="jane@framer.com" />

            <label>Topic</label>
            <select>
              <option value="">Select...</option>
              <option value="support">Support</option>
              <option value="sales">Sales</option>
              <option value="feedback">Feedback</option>
            </select>

            <label>Message</label>
            <textarea placeholder="Enter your message"></textarea>

            <button type="submit" className="form-btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
