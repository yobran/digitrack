const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const auth = require('../middleware/auth');

// Get dashboard stats
router.get('/dashboard', auth, async (req, res) => {
  try {
    const userId = req.user.id;
    const userRole = req.user.role;

    let stats = {};
    
    if (userRole === 'intern') {
      // Intern stats - only their assigned schools
      const schoolsCount = await prisma.school.count({
        where: { userId: userId }
      });

      const visitsCount = await prisma.schoolVisit.count({
        where: { 
          userId: userId,
          visitDate: {
            gte: new Date(new Date().getFullYear(), new Date().getMonth(), 1)
          }
        }
      });

      const devicesCount = await prisma.device.count({
        where: { 
          school: { userId: userId }
        }
      });

      // Get recent visits for activity
      const recentVisits = await prisma.schoolVisit.findMany({
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
      const visitsCount = await prisma.schoolVisit.count({
        where: {
          visitDate: {
            gte: new Date(new Date().getFullYear(), new Date().getMonth(), 1)
          }
        }
      });
      const devicesCount = await prisma.device.count();

      // Admin recent activity
      const recentVisits = await prisma.schoolVisit.findMany({
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

module.exports = router;