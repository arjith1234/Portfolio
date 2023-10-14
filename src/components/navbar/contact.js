import React from "react";
import './contact.css';

const ContactMe = () => {
  return (
    <section id="contact">
      <div className="contact-container">
        <h2>Contact Me</h2>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" placeholder="Your Name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Your Email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" placeholder="Your Message" rows="4" required></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
     
    </section>

  );
}

export default ContactMe;