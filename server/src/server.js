const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');

const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 5000;
const JWT_SECRET = process.env.JWT_SECRET || 'dlp_mvp_secret';

// Middleware
app.use(cors());
app.use(express.json());

// Auth middleware
const auth = async (req, res, next) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) throw new Error('No token');
    
    const decoded = jwt.verify(token, JWT_SECRET);
    const user = await prisma.user.findUnique({ where: { id: decoded.userId } });
    if (!user) throw new Error('User not found');
    
    req.user = user;
    req.userId = user.id;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Please authenticate' });
  }
};

// Import routes
const authRoutes = require('./routes/authRoutes');
const schoolRoutes = require('./routes/schoolRoutes');
const deviceRoutes = require('./routes/deviceRoutes');
const visitRoutes = require('./routes/visitRoutes');
const reportRoutes = require('./routes/reportRoutes');
const statsRoutes = require('./routes/statsRoutes');
const countyRoutes = require('./routes/countyRoutes');
const adminRoutes = require('./routes/adminRoutes');

// Use routes
app.use('/api/auth', authRoutes);
app.use('/api/schools', schoolRoutes);
app.use('/api/devices', deviceRoutes);
app.use('/api/visits', visitRoutes);
app.use('/api/reports', reportRoutes);
app.use('/api/stats', statsRoutes);
app.use('/api', countyRoutes);
app.use('/api', adminRoutes);

// ==================== DASHBOARD STATS ROUTE ====================
app.get('/api/dashboard/stats', auth, async (req, res) => {
  try {
    const userId = req.userId;
    const userRole = req.user.role;

    let stats = {};
    
    if (userRole === 'intern') {
      // Intern stats - only their assigned schools
      const assignments = await prisma.schoolAssignment.findMany({
        where: { userId: userId },
        include: { school: true }
      });
      
      const schoolIds = assignments.map(a => a.school.id);
      const schoolsCount = assignments.length;

      const visitsCount = await prisma.visit.count({
        where: { 
          userId: userId,
          visitDate: {
            gte: new Date(new Date().getFullYear(), new Date().getMonth(), 1)
          }
        }
      });

      const devicesCount = await prisma.device.count({
        where: { 
          schoolId: { in: schoolIds }
        }
      });

      // Get recent visits for activity
      const recentVisits = await prisma.visit.findMany({
        where: { userId: userId },
        include: { school: true },
        orderBy: { visitDate: 'desc' },
        take: 5
      });

      stats = { 
        schools: schoolsCount, 
        visits: visitsCount, 
        devices: devicesCount,
        recentActivity: recentVisits.map(visit => ({
          type: 'visit',
          message: `Visited ${visit.school.name}`,
          timestamp: visit.visitDate,
          schoolId: visit.schoolId
        }))
      };
      
    } else {
      // Admin stats - all schools
      const schoolsCount = await prisma.school.count();
      const visitsCount = await prisma.visit.count({
        where: {
          visitDate: {
            gte: new Date(new Date().getFullYear(), new Date().getMonth(), 1)
          }
        }
      });
      const devicesCount = await prisma.device.count();

      // Admin recent activity
      const recentVisits = await prisma.visit.findMany({
        include: { 
          school: true,
          user: true 
        },
        orderBy: { visitDate: 'desc' },
        take: 5
      });

      stats = { 
        schools: schoolsCount, 
        visits: visitsCount, 
        devices: devicesCount,
        recentActivity: recentVisits.map(visit => ({
          type: 'visit',
          message: `${visit.user.name} visited ${visit.school.name}`,
          timestamp: visit.visitDate,
          schoolId: visit.schoolId
        }))
      };
    }

    res.json(stats);
  } catch (error) {
    console.error('Dashboard stats error:', error);
    res.status(500).json({ error: 'Failed to fetch dashboard stats' });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'DLP MVP Server Running' });
});

// Start server
app.listen(PORT, () => {
  console.log('=================================');
  console.log('🚀 DLP MVP Server Running');
  console.log(`📡 Port: ${PORT}`);
  console.log('💾 Database: Ready for real data');
  console.log('🔗 URL: http://localhost:5000');
  console.log('=================================');
});