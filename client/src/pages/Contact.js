import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, this would send the form data to a server
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero-content">
          <h1>Contact Us</h1>
          <p>Get in touch with the Burford Bees team</p>
        </div>
      </section>
      
      <section className="contact-details">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Our Details</h2>
              <div className="info-item">
                <h3>Address</h3>
                <p>Burford Bees</p>
                <p>112 High Street</p>
                <p>Burford, Oxfordshire</p>
                <p>OX18 4QJ</p>
              </div>
              
              <div className="info-item">
                <h3>Opening Hours</h3>
                <p>Monday - Friday: 9am - 5pm</p>
                <p>Saturday: 10am - 4pm</p>
                <p>Sunday: Closed</p>
              </div>
              
              <div className="info-item">
                <h3>Contact</h3>
                <p>Phone: (01993) 123-4567</p>
                <p>Email: info@burfordbees.com</p>
              </div>
              
              <div className="info-item">
                <h3>Follow Us</h3>
                <div className="social-links">
                  <a href="#" className="social-link">Facebook</a>
                  <a href="#" className="social-link">Instagram</a>
                  <a href="#" className="social-link">Twitter</a>
                </div>
              </div>
            </div>
            
            <div className="contact-form-container">
              <h2>Send Us a Message</h2>
              {formSubmitted ? (
                <div className="form-success">
                  <p>Thank you for your message! We'll get back to you as soon as possible.</p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="btn submit-btn">Send Message</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
      
      <section className="map-section">
        <div className="container">
          <h2>Find Us</h2>
          <div className="map-container">
            {/* In a real application, you would integrate with Google Maps or another mapping service */}
            <div className="map-placeholder">
              <p>Map of Burford Bees location would be displayed here</p>
              <p>112 High Street, Burford, Oxfordshire, OX18 4QJ</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="faq-section">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>Do you offer tours of your apiaries?</h3>
              <p>Yes, we offer guided tours of our main apiary by appointment during the summer months. Please contact us to arrange a visit.</p>
            </div>
            
            <div className="faq-item">
              <h3>Can I purchase honey directly from your premises?</h3>
              <p>Absolutely! You can visit our shop in Burford during opening hours to purchase our full range of products.</p>
            </div>
            
            <div className="faq-item">
              <h3>Do you ship your honey nationwide?</h3>
              <p>Yes, we offer shipping across the UK. Orders placed before 2pm are usually dispatched the same day.</p>
            </div>
            
            <div className="faq-item">
              <h3>Are your products suitable for vegetarians?</h3>
              <p>Our honey products are suitable for most vegetarians, but they are not suitable for vegans as they are produced by bees.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;