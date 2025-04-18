import React from 'react';
import './Products.css';

function Products() {
  const products = [
    {
      id: 1,
      name: 'Wildflower Honey',
      description: 'Our wildflower honey is collected from diverse floral sources across the Cotswolds, offering a complex flavor profile that changes subtly with each season.',
      price: '£8.50',
      size: '340g',
      image: 'wildflower'
    },
    {
      id: 2,
      name: 'Heather Honey',
      description: 'This distinctive honey is harvested from heather moorlands. It has a stronger, more aromatic taste and a unique gel-like consistency thats prized by honey connoisseurs.',
      price: '£9.50',
      size: '340g',
      image: 'heather'
    },
    {
      id: 3,
      name: 'Cotswold Honey',
      description: 'Sourced from hives placed in traditional Cotswold meadows, this honey offers a taste of the English countryside with delicate floral notes.',
      price: '£8.50',
      size: '340g',
      image: 'cotswold'
    },
    {
      id: 4,
      name: 'Raw Honeycomb',
      description: 'Straight from the hive, our raw honeycomb is completely unprocessed and can be enjoyed as a delicious spread or natural sweet treat.',
      price: '£12.00',
      size: '200g',
      image: 'honeycomb'
    },
    {
      id: 5,
      name: 'Burford Bees Honey Gift Set',
      description: 'A beautiful selection of three 120g jars of our most popular honeys, presented in a gift box. Perfect for honey lovers or as an introduction to our range.',
      price: '£18.00',
      size: '3 x 120g',
      image: 'gift-set'
    },
    {
      id: 6,
      name: 'Beeswax Candles',
      description: 'Hand-poured beeswax candles that burn cleanly with a subtle honey scent. Each candle is made from 100% pure beeswax from our hives.',
      price: '£14.00',
      size: 'Set of 3',
      image: 'candles'
    }
  ];

  return (
    <div className="products-page">
      <section className="products-hero">
        <div className="products-hero-content">
          <h1>Our Honey Products</h1>
          <p>Ethically produced and harvested from the heart of the Cotswolds</p>
        </div>
      </section>
      
      <section className="product-intro">
        <div className="container">
          <h2>From Our Hives to Your Table</h2>
          <p>At Burford Bees, we take pride in producing high-quality, raw honey that preserves all the natural enzymes, antioxidants, and flavors that make honey such a remarkable food. Our honey is never over-processed or pasteurized, ensuring you get all the natural goodness that bees intended.</p>
          <p>We harvest our honey seasonally, which means the taste and appearance may vary throughout the year depending on which flowers our bees have been visiting. This natural variation is something we celebrate as part of the authentic honey experience.</p>
        </div>
      </section>
      
      <section className="products-grid">
        <div className="container">
          <div className="products-list">
            {products.map(product => (
              <div className="product-card" key={product.id}>
                <div className={`product-image ${product.image}`}></div>
                <div className="product-details">
                  <h3>{product.name}</h3>
                  <div className="product-meta">
                    <span className="product-price">{product.price}</span>
                    <span className="product-size">{product.size}</span>
                  </div>
                  <p className="product-description">{product.description}</p>
                  <button className="btn">Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="wholesale-info">
        <div className="container">
          <div className="wholesale-content">
            <h2>Wholesale Opportunities</h2>
            <p>Are you a retailer, restaurant, or hotel interested in stocking Burford Bees products? We offer wholesale options for businesses that share our passion for quality, local produce.</p>
            <p>Please contact us to discuss our wholesale pricing and delivery options.</p>
            <button className="btn wholesale-btn">Contact for Wholesale</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Products;