const express = require('express');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Initialize express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Routes
app.post('/api/contact', (req, res) => {
  const { name, email, subject, message } = req.body;
  
  // In a real application, you would:
  // 1. Validate the input
  // 2. Save to a database or send an email
  // 3. Return appropriate response
  
  console.log('Contact form submission:', { name, email, subject, message });
  
  // Simulate processing delay
  setTimeout(() => {
    res.status(200).json({ 
      success: true, 
      message: 'Thank you for your message! We will get back to you soon.' 
    });
  }, 1000);
});

app.get('/api/products', (req, res) => {
  // In a real application, this would come from a database
  const products = [
    {
      id: 1,
      name: 'Wildflower Honey',
      description: 'Our wildflower honey is collected from diverse floral sources across the Cotswolds, offering a complex flavor profile that changes subtly with each season.',
      price: 8.50,
      size: '340g',
      image: 'wildflower.jpg'
    },
    {
      id: 2,
      name: 'Heather Honey',
      description: 'This distinctive honey is harvested from heather moorlands. It has a stronger, more aromatic taste and a unique gel-like consistency thats prized by honey connoisseurs.',
      price: 9.50,
      size: '340g',
      image: 'heather.jpg'
    },
    {
      id: 3,
      name: 'Cotswold Honey',
      description: 'Sourced from hives placed in traditional Cotswold meadows, this honey offers a taste of the English countryside with delicate floral notes.',
      price: 8.50,
      size: '340g',
      image: 'cotswold.jpg'
    },
    {
      id: 4,
      name: 'Raw Honeycomb',
      description: 'Straight from the hive, our raw honeycomb is completely unprocessed and can be enjoyed as a delicious spread or natural sweet treat.',
      price: 12.00,
      size: '200g',
      image: 'honeycomb.jpg'
    },
    {
      id: 5,
      name: 'Burford Bees Honey Gift Set',
      description: 'A beautiful selection of three 120g jars of our most popular honeys, presented in a gift box. Perfect for honey lovers or as an introduction to our range.',
      price: 18.00,
      size: '3 x 120g',
      image: 'gift-set.jpg'
    },
    {
      id: 6,
      name: 'Beeswax Candles',
      description: 'Hand-poured beeswax candles that burn cleanly with a subtle honey scent. Each candle is made from 100% pure beeswax from our hives.',
      price: 14.00,
      size: 'Set of 3',
      image: 'candles.jpg'
    }
  ];
  
  res.json(products);
});

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static(path.join(__dirname, '../client/build')));
  
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
  });
}

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});