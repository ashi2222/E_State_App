import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About Dream Home</h1>
      <p className="about-text">
        Welcome to <strong>Dream Home</strong>, your number one source for all things real estate. 
        We're dedicated to providing you the very best of services, with an emphasis on reliability, 
        customer service, and uniqueness.
      </p>
      <p className="about-text">
        Founded by <strong>Ashish Patel</strong>, Dream Home has come a long way from its beginnings. 
        When Ashish Patel first started out, his passion for helping people find their dream homes 
        drove him to start his own business.
      </p>
      <p className="about-text">
        We hope you enjoy our services as much as we enjoy offering them to you. If you have any questions 
        or comments, please don't hesitate to contact us.
      </p>
      <p className="about-signature">
        Sincerely,
        <br />
        Ashish Patel
      </p>
    </div>
  );
};

export default About;
