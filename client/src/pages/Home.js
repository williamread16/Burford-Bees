import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Burford Bees</h1>
          <p>Producing fine quality, locally sourced honey in the heart of the Cotswolds</p>
          <Link to="/products" className="btn hero-btn">Explore Our Honey</Link>
        </div>
      </section>
      
      <section className="features">
        <div className="feature-card">
          <div className="feature-icon">🐝</div>
          <h3>Local & Pure</h3>
          <p>Our honey is 100% pure and sourced from our own apiaries in the Cotswolds.</p>
        </div>
        
        <div className="feature-card">
          <div className="feature-icon">🌱</div>
          <h3>Sustainable</h3>
          <p>We're committed to sustainable beekeeping practices that protect our bees and environment.</p>
        </div>
        
        <div className="feature-card">
          <div className="feature-icon">🍯</div>
          <h3>Artisanal</h3>
          <p>Each jar of honey is carefully harvested and processed to maintain its natural properties.</p>
        </div>
      </section>
      
      <section className="popular-products">
        <h2>Our Popular Products</h2>
        <div className="product-grid">
          <div className="product-card">
            <div className="product-image"></div>
            <h3>Wildflower Honey</h3>
            <p>A delicate blend of various wildflower nectars.</p>
            <Link to="/products" className="btn">Learn More</Link>
          </div>
          
          <div className="product-card">
            <div className="product-image"></div>
            <h3>Heather Honey</h3>
            <p>Rich and aromatic honey from heather blooms.</p>
            <Link to="/products" className="btn">Learn More</Link>
          </div>
          
          <div className="product-card">
            <div className="product-image"></div>
            <h3>Beeswax Candles</h3>
            <p>Natural beeswax candles with a subtle honey scent.</p>
            <Link to="/products" className="btn">Learn More</Link>
          </div>
        </div>
      </section>
      
      <section className="cta-section">
        <div className="cta-content">
          <h2>Interested in Our Story?</h2>
          <p>Learn about our journey, our bees, and our commitment to quality honey production.</p>
          <Link to="/about" className="btn cta-btn">About Us</Link>
        </div>
      </section>
    </div>
  );
}

export default Home;