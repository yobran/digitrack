const express = require('express');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/authRoutes'); // ✅ Import auth routes
const schoolRoutes = require('./routes/schoolRoutes'); // ✅ Import school routes
const visitRoutes = require('./routes/visitRoutes'); // ✅ Import visit routes
const deviceRoutes = require('./routes/deviceRoutes');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;

// ===== Middleware =====
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Serve uploaded files
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

// ===== Routes =====

// Health check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'OK',
    message: 'DigiTrack DLP API is running!',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development',
  });
});

// Base API info
app.get('/api', (req, res) => {
  res.json({
    message: 'Welcome to DigiTrack DLP API',
    version: '1.0.0',
    endpoints: {
      health: '/api/health',
      auth: '/api/auth/*',
      schools: '/api/schools/*',
      visits: '/api/visits/*',
      devices: '/api/devices/*'
    },
  });
});

// ✅ Mount authentication routes
app.use('/api/auth', authRoutes);

// ✅ Mount school routes
app.use('/api/schools', schoolRoutes);

// ✅ Mount visit routes
app.use('/api/visits', visitRoutes);
// ✅ Mount device routes
app.use('/api/devices', require('./routes/deviceRoutes'));

// ===== Error & 404 Handlers =====
app.use((req, res) => {
  res.status(404).json({
    error: 'Route not found',
    path: req.path,
  });
});

app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(err.status || 500).json({
    error: err.message || 'Internal server error',
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
  });
});

// ===== Start Server =====
app.listen(PORT, () => {
  console.log('=================================');
  console.log('🚀 DigiTrack DLP Server Running');
  console.log('📡 Port:', PORT);
  console.log('🌍 Environment:', process.env.NODE_ENV || 'development');
  console.log('🔗 URL: http://localhost:' + PORT);
  console.log('✅ Health: http://localhost:' + PORT + '/api/health');
  console.log('=================================');
});

// Temporary debug route - add this after auth routes
app.get('/api/debug/me', async (req, res) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) return res.status(401).json({ error: 'No token' });
  
  try {
    const jwt = require('jsonwebtoken');
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    const { PrismaClient } = require('./prisma/client');
    const prisma = new PrismaClient();
    
    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
      select: { id: true, name: true, email: true }
    });
    
    res.json({ user });
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
});

module.exports = app;