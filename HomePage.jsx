import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation
import './HomePage.css'

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Welcome to  Residency</h1>
      <p>Explore our services:</p>
      <ul id='home'>
      <li>
        <Link to="/signup">Sign Up</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
       <li>
        <Link to="/hotel">Hotel</Link>
      </li>
        <li>
          <Link to="/booking">Booking</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;