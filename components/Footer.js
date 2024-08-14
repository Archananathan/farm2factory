import React from 'react';
import '../CSS/Footer.css'; // Make sure to create a CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import google from './images/Google.png';
import {Link} from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section contact-us">
        <h3>Contact us</h3>
        <p>Farm2Factory Agro and Poultry Waste Care Limited</p>
        <p><strong>Registered Office and Factory:</strong></p>
        <p>Gat No 314/1, 314/2/1, Pandalgudi, Aruppukkottai,<br />
          District Virudhunagar, TamilNadu 626 113, India</p>
        <p>CIN - U01111MH2020PLC344170</p>
        <p><strong>Phone:</strong><br />1800 212 002 020</p>
        <p><strong>Email:</strong><br />farm2factory@gmail.com</p>
        <p>© Farm2Factory Agro and Poultry Waste Care Ltd.</p>
      </div>
      <div className="footer-section featured-links">
        <h3>Featured links</h3>
        <ul>
          <li>Our Story</li>
          <li>Meet our Chairman</li>
          <li>Careers</li>
          <li>Investors</li>
        </ul>
      </div>
      <div className="footer-section help">
        <h3>Help</h3>
        <ul>
          <li><Link to = '/Contact'>Contact Us</Link></li>
          <li>Privacy Policy</li>
          <li>Terms of Use</li>
        </ul>
      </div>
      <div className="footer-section farmer-app">
        <h3>Farmer App</h3>
        <div className="app-links">
          <ul>
          <li><img src={google} alt="Get it on Google Play"  style={{ width: '150px', height: '50px' }}/></li>
          <li><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png' alt="Download on the App Store"  style={{ width: '150px', height: '50px' }}/></li>
          </ul>
        </div>
      </div>
      <div className="footer-social-icons">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
        <FontAwesomeIcon icon={faTwitter} size="2x" />
        <FontAwesomeIcon icon={faInstagram} size="2x" />
        <FontAwesomeIcon icon={faYoutube} size="2x" />
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </div>
    </footer>
  );
};

export default Footer;
