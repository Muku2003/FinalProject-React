import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './HotelContact.css'
const HotelContact = () => {
  return (
    <div className="hotel-contact">
      <h2>Contact Details</h2>
      <div className="contact-info">
        <div className="info-item">
          <span className="info-label">Address:</span>
          <span className="info-text">123 Main Street,Coimbatore , India</span>
        </div>
        <div className="info-item">
          <span className="info-label">Phone:</span>
          <span className="info-text">123-456-7890</span>
        </div>
        <div className="info-item">
          <span className="info-label">Email:</span>
          <span className="info-text">mukums@hotel.com</span>
        </div>
      </div>
      <div className="social-media-links">
      <a href="https://www.facebook.com/example" target="_blank">
        <FontAwesomeIcon icon={faFacebook} />
      </a>
      <a href="https://www.twitter.com/example" target="_blank">
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a href="https://www.instagram.com/example" target="_blank">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
    </div>
    </div>
    
    
  );
};

export default HotelContact;