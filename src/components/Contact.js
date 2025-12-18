import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Get In Touch</h2>
        <p>I'd love to hear from you! Feel free to reach out for collaborations or just a friendly hello.</p>
        <div className="contact-info">
          <div className="contact-item">
            <h3>Email</h3>
            <p>your.email@example.com</p>
          </div>
          <div className="contact-item">
            <h3>LinkedIn</h3>
            <p>linkedin.com/in/yourprofile</p>
          </div>
          <div className="contact-item">
            <h3>GitHub</h3>
            <p>github.com/yourusername</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;