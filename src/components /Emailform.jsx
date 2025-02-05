import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Emailform.css";


function EmailForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    emailjs
      .send(
        serviceId, 
        templateId, 
        formData,
        publicKey 
      )
      .then(
        (result) => {
          alert("Email sent successfully!");
          setFormData({
            name: "",
            email: "",
            company: "",
            phone: "",
            message: "",
          });
        },
        (error) => {
          alert("Failed to send email. Please try again.");
          console.error(error);
        }
      );
  };

  return (
    <form className="email-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your E-mail"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <input
          type="text"
          id="company"
          name="company"
          placeholder="Company and Designation"
          value={formData.company}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="phone number"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <textarea
          id="message"
          name="message"
          placeholder="Message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
      </div>

      <button type="submit" className="email-submit-button">send your message</button>
    </form>
  );
}

export default EmailForm;
