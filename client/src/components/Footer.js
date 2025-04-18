import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Burford Bees</h3>
          <p>Local, ethical honey production since 2010.</p>
          <p>We're committed to sustainable beekeeping practices and producing the finest quality honey.</p>
        </div>
        
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/products">Our Honey</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Burford, Oxfordshire</p>
          <p>Email: info@burfordbees.com</p>
          <p>Phone: (01993) 123-4567</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Burford Bees. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;