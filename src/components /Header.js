import React from 'react';
import './Header.css';
import logo from './assets/images/logo.png';

  export const handleContactClick = (redirectToGmail = false) => {
    if (redirectToGmail) {
    const recipientEmail = "privatelimitedikis@gmail.com"; 
    const gmailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipientEmail}`;
    window.open(gmailtoLink, "_blank");
    }
    };

const Header = () => {
  return (
    <nav className="header">
      <div className="logo">
        <img src={logo} alt="Logo" className="" width={100} />
      </div>
      <ul className="header-list">
        <li><a href="/IKIS/#home">Home</a></li>
        <li><a href="/IKIS/#about">About Us</a></li>
        <li><a href="/IKIS/#services">Services</a></li>
        <li><a href="/IKIS/#services">Blog</a></li>
        <li><a href="/IKIS/#faq">FAQ</a></li>
        
      </ul>
      <button className="contact-button" onClick={handleContactClick}>
        Contact Us
      </button>
    </nav>
  );
};

export default Header;

