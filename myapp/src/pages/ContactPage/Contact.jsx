import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>
      <p className="contact-text">
        Thank you for your interest in Dream Home. Please fill out the form below and we will get back to you as soon as possible.
      </p>
      <form className="contact-form">
        <label className="contact-label">Name:</label>
        <input type="text" className="contact-input" placeholder="Enter your name" />
        
        <label className="contact-label">Email:</label>
        <input type="email" className="contact-input" placeholder="Enter your email address" />
        
        <label className="contact-label">Message:</label>
        <textarea className="contact-textarea" placeholder="Type your message here"></textarea>
        
        <button type="submit" className="contact-button">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
