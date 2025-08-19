import React, { useState } from "react";
import "./slide.css";
import Captcha from "./Captcha";
import axios from "axios";

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    city: "",
    company: ""
  });

  const [captchaValue, setCaptchaValue] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!captchaValue) {
      alert("Please complete the CAPTCHA");
      return;
    }

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_API_URL}/admin/user-query`,
        {
          ...formData,
          captcha: captchaValue,
        },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      if (response.data.message) {
        alert(response.data.message);
      }

      setFormData({
        name: "",
        email: "",
        mobile: "",
        city: "",
        company: ""
      });
      setCaptchaValue("");

    } catch (error) {
      if (error.response?.data?.message) {
        alert(error.response.data.message);
      } else {
        alert("Something went wrong. Please try again later.");
      }
    }
  };

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
          <form className="contact-form" onSubmit={handleSubmit}>
            <label>Name</label>
            <input
              type="text"
              placeholder="Jane Smith"
              name="name"
              onChange={handleChange}
              value={formData.name}
              required
            />

            <label>Email</label>
            <input
              type="email"
              placeholder="jane@framer.com"
              name="email"
              onChange={handleChange}
              value={formData.email}
              required
            />

            <label>Mobile</label>
            <input
              type="text"
              placeholder="1234567890"
              name="mobile"
              onChange={handleChange}
              value={formData.mobile}
              required
            />

            <label>City/State</label>
            <input
              type="text"
              placeholder="Delhi"
              name="city"
              onChange={handleChange}
              value={formData.city}
              required
            />
            

            <label>Company Name</label>
            <input
              type="text"
              placeholder="Nexadvent"
              name="company"
              onChange={handleChange}
              value={formData.company}
              required
            />

            {/* Captcha Component */}
            <Captcha onChange={handleCaptchaChange} />

            <button type="submit" className="form-btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
