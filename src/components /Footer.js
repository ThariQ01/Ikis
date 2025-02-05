import React from "react";
import './Footer.css';
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineLinkedin } from 'react-icons/ai';
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom"; 
import { handleContactClick } from "./Header.js"; 
import logo from './assets/images/logo.png';

const handleSubmit = (e) => {
  e.preventDefault(); 

  const email = e.target.elements.email?.value;


  if (validateEmail(email)) {
    alert("Thank you for subscribing!");
    e.target.reset(); 
  } else {
    alert("Please enter a valid email address.");
  }
};

const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};



const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={logo} alt="Logo" className="" width={100} />
        </div>

        <div className="footer-content">
          <div className="footer-section quick-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><span onClick={handleContactClick} >Contact Us</span></li>
            </ul>
          </div>

          <div className="footer-section contact-info">
            <h4>Contact Info</h4>
            <p>+91 9486111784</p>
            <p>privatelimitedikis@gmail.com</p>
          </div>

          <div className="footer-section privacy-policy">
            <h4>Privacy Policy</h4>
            <ul>
              <li>
                <Link to= "/terms-and-conditions" target="_blank">Terms & Conditions</Link>
              </li>
              <li>
                <Link to="/supports" target="_blank">Supports</Link>
              </li>
              <li>
                <Link to="/privacy-policy" target="_blank">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section social-media">
            <h4>Subscribe For Update</h4>
            <form onSubmit= {handleSubmit}>
              <div className="input-container">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="email-input"
                  required
                />
                <button type="submit" className="arrow-button">
                  <FaArrowRight />
                </button>
              </div>
            </form>
            <h4>Social Media</h4>
            <div className="social-icons">
              <a href="https://www.instagram.com/ikis.io?igsh=dDFtdjg1bzRveGRh" target="_blank" rel="noopener noreferrer">
                <AiOutlineInstagram />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <AiOutlineLinkedin />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <AiOutlineFacebook />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

