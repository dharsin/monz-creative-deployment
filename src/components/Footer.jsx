import React from "react";
import "../App.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about">
          <h3>Monz Creative School</h3>
          <p>
            Monz Creative School is a premier institute for creative and digital
            learning. We provide courses in graphic design, web development,
            photography, animation, and more, empowering students to unlock
            their full creative potential.
          </p>
        
        </div>

        <div className="footer-section links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Courses</a></li>
            <li><a href="#">Workshops</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h4>Contact Us</h4>
          <p> 📍 123 Creative Street, Coimbatore, Tamil Nadu 641012</p>
          <p>📞 +91 98765 43210</p>
          <p>✉️ info@monzcreativeschool.com</p>
         
        </div>

        
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Monz Creative School. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
