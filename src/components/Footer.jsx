import React from 'react';
import './Footer.css'; // Import the CSS file

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-row">
          <div className="footer-column">
            <h4>About Us</h4>
            <p>
              Kalibari Temple is a place of worship and spiritual solace. Join us for our regular services and special events.
            </p>
          </div>
          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#events">Events</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Contact Us</h4>
            <p>
              Kalibari Temple<br />
              Rest Camp, Pandu,<br />
              Guwahati, Assam 781012<br />
              Email: info@kalibari.org<br />
              Phone: +91 12345 67890
            </p>
          </div>
          <div className="footer-column">
            <h4>Follow Us</h4>
            <div className="footer-social">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; {new Date().getFullYear()} Kalibari Temple. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
