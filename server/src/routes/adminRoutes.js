const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');
const prisma = new PrismaClient();


// Get all schools (admin view)
router.get('/admin/schools', async (req, res) => {
  try {
    const schools = await prisma.school.findMany({
      include: {
        subCounty: true,
        county: true,
        user: { select: { id: true, name: true, email: true } }
      },
      orderBy: { createdAt: 'desc' }
    });
    res.json(schools);
  } catch (error) {
    console.error('Admin schools error:', error);
    res.status(500).json({ error: 'Failed to fetch schools' });
  }
});

// Create school (admin)
router.post('/admin/schools', async (req, res) => {
  try {
    const { name, code, location, headteacherName, headteacherPhone, hasElectricity, hasInternet, totalStudents, subCountyId, countyId, userId } = req.body;
    
    const school = await prisma.school.create({
      data: {
        name,
        code,
        location,
        headteacherName,
        headteacherPhone,
        hasElectricity: hasElectricity || false,
        hasInternet: hasInternet || false,
        totalStudents: totalStudents || 0,
        subCountyId,
        countyId,
        userId: userId || null
      },
      include: {
        subCounty: true,
        county: true,
        user: { select: { name: true } }
      }
    });
    
    res.status(201).json(school);
  } catch (error) {
    console.error('Create school error:', error);
    res.status(500).json({ error: 'Failed to create school' });
  }
});

// Get all users (admin)
router.get('/admin/users', async (req, res) => {
  try {
    const users = await prisma.user.findMany({
      include: {
        county: { select: { name: true } }
      },
      orderBy: { name: 'asc' }
    });
    res.json(users);
  } catch (error) {
    console.error('Admin users error:', error);
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});

// Create user (admin - for adding interns)
router.post('/admin/users', async (req, res) => {
  try {
    const { name, email, phone, countyId, password, role } = req.body;
    
    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email }
    });
    
    if (existingUser) {
      return res.status(400).json({ error: 'User with this email already exists' });
    }
    
    const hashedPassword = await bcrypt.hash(password, 10);
    
    const user = await prisma.user.create({
      data: {
        name,
        email,
        phone: phone || null,
        countyId: countyId || null,
        password: hashedPassword,
        role: role || 'intern'
      },
      include: {
        county: { select: { name: true } }
      }
    });
    
    res.status(201).json(user);
  } catch (error) {
    console.error('Create user error:', error);
    res.status(500).json({ error: 'Failed to create user' });
  }
});

// Add device (admin)
router.post('/admin/devices', async (req, res) => {
  try {
    const { schoolId, deviceType, serialNumber, status, notes } = req.body;
    
    const device = await prisma.device.create({
      data: {
        schoolId,
        deviceType,
        serialNumber,
        status: status || 'working',
        conditionNotes: notes || null
      },
      include: {
        school: { select: { name: true, code: true } }
      }
    });
    
    res.status(201).json(device);
  } catch (error) {
    console.error('Add device error:', error);
    res.status(500).json({ error: 'Failed to add device' });
  }
});

module.exports = router;