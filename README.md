# Burford Bees Website

## Project Structure

This project is built with:
- React.js for the frontend
- Node.js with Express for the backend

The project is organized into two main directories:
- `client`: React frontend
- `server`: Node.js backend

## Features

- Home page
- About page
- Products page
- Contact page
- Basic Express.js backend for handling form submissions and serving product data

## Getting Started

### Prerequisites

- Node.js and npm installed

### Installation

1. Clone the repository
2. Install dependencies for both the client and server:

```bash
# Install client dependencies
cd client
npm install

# Install server dependencies
cd ../server
npm install
```

### Running the Application

#### Development Mode

1. Start the backend server:
```bash
cd server
npm run dev
```

2. In a separate terminal, start the React frontend:
```bash
cd client
npm start
```

3. The React application will open in your browser at `http://localhost:3000`
4. The backend API will be available at `http://localhost:5000`

#### Production Mode

To build the application for production:

```bash
# Build the React frontend
cd client
npm run build

# Start the server in production mode
cd ../server
npm start
```

## Further Development

This project serves as a foundation for a honey company website and can be extended with:
- E-commerce functionality with shopping cart and payment processing
- User authentication for customer accounts
- Blog section for honey-related content
- Integration with a content management system
