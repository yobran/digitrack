const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check route
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'DigiTrack DLP API is running!',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// Test route
app.get('/api', (req, res) => {
  res.json({
    message: 'Welcome to DigiTrack DLP API',
    version: '1.0.0',
    endpoints: {
      health: '/api/health',
      auth: '/api/auth/*',
      schools: '/api/schools/*',
      devices: '/api/devices/*',
      visits: '/api/visits/*'
    }
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    error: 'Route not found',
    path: req.path
  });
});

// Error handler
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(err.status || 500).json({
    error: err.message || 'Internal server error',
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  });
});

// Start server
app.listen(PORT, () => {
  console.log('=================================');
  console.log('🚀 DigiTrack DLP Server Running');
  console.log('📡 Port: ' + PORT);
  console.log('🌍 Environment: ' + (process.env.NODE_ENV || 'development'));
  console.log('🔗 URL: http://localhost:' + PORT);
  console.log('✅ Health: http://localhost:' + PORT + '/api/health');
  console.log('=================================');
});

module.exports = app;
