import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>About Burford Bees</h1>
          <p>Our story, mission, and passion for beekeeping</p>
        </div>
      </section>
      
      <section className="about-story">
        <div className="about-container">
          <div className="about-text">
            <h2>Our Story</h2>
            <p>Burford Bees was established in 2010 by James and Sarah Thompson, two passionate beekeepers with a dream of producing the finest honey while supporting the local bee population.</p>
            <p>What started as a hobby with just two hives has grown into a thriving family business with over 50 hives across multiple locations in the beautiful Cotswolds countryside.</p>
            <p>Our journey has been guided by a deep respect for nature and a commitment to sustainable beekeeping practices that prioritize the health and wellbeing of our bees.</p>
          </div>
          <div className="about-image founder-image"></div>
        </div>
      </section>
      
      <section className="about-mission">
        <div className="about-container reverse">
          <div className="about-text">
            <h2>Our Mission</h2>
            <p>At Burford Bees, our mission is two-fold:</p>
            <ul>
              <li>To produce exceptional quality, raw honey that showcases the unique flavors of the Cotswolds landscapes</li>
              <li>To protect and promote healthy bee populations through sustainable beekeeping practices</li>
            </ul>
            <p>We believe that bees are vital to our ecosystem and that responsible beekeeping is essential for their survival. We're committed to educating our community about the importance of bees and how we can all help protect these incredible creatures.</p>
          </div>
          <div className="about-image mission-image"></div>
        </div>
      </section>
      
      <section className="about-process">
        <h2>Our Process</h2>
        <div className="process-steps">
          <div className="process-step">
            <div className="step-number">1</div>
            <h3>Hive Management</h3>
            <p>We carefully maintain our hives throughout the year, ensuring our bees have everything they need to thrive.</p>
          </div>
          
          <div className="process-step">
            <div className="step-number">2</div>
            <h3>Ethical Harvesting</h3>
            <p>We harvest honey only when there is a surplus, making sure to leave plenty for the bees themselves.</p>
          </div>
          
          <div className="process-step">
            <div className="step-number">3</div>
            <h3>Minimal Processing</h3>
            <p>Our honey is cold-extracted and minimally filtered to preserve all of its natural goodness.</p>
          </div>
          
          <div className="process-step">
            <div className="step-number">4</div>
            <h3>Local Distribution</h3>
            <p>We jar and label our honey by hand and distribute it to local markets and shops around the Cotswolds.</p>
          </div>
        </div>
      </section>
      
      <section className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <div className="member-image"></div>
            <h3>James Thompson</h3>
            <p>Founder & Head Beekeeper</p>
          </div>
          
          <div className="team-member">
            <div className="member-image"></div>
            <h3>Sarah Thompson</h3>
            <p>Founder & Production Manager</p>
          </div>
          
          <div className="team-member">
            <div className="member-image"></div>
            <h3>Michael Davis</h3>
            <p>Apiary Manager</p>
          </div>
          
          <div className="team-member">
            <div className="member-image"></div>
            <h3>Emma Wilson</h3>
            <p>Community Educator</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;