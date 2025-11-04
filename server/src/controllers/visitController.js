const { PrismaClient } = require('../prisma/client');
const prisma = new PrismaClient();
const path = require('path');
const fs = require('fs');

// Log a new visit with photo support
exports.logVisit = async (req, res) => {
  try {
    const { schoolId, visitDate, gpsLatitude, gpsLongitude, notes } = req.body;
    const userId = req.userId;

    console.log('Logging visit:', { userId, schoolId, visitDate, gpsLatitude, gpsLongitude, notes });
    console.log('Files:', req.files);

    // Validate required fields
    if (!schoolId || !visitDate) {
      return res.status(400).json({ error: 'School and visit date are required' });
    }

    // Verify user has access to this school
    const schoolAssignment = await prisma.schoolAssignment.findFirst({
      where: { userId, schoolId: parseInt(schoolId) }
    });

    if (!schoolAssignment) {
      return res.status(403).json({ error: 'Access denied to this school' });
    }

    // Create the visit
    const visit = await prisma.visit.create({
      data: {
        userId,
        schoolId: parseInt(schoolId),
        visitDate: new Date(visitDate),
        gpsLatitude: gpsLatitude ? parseFloat(gpsLatitude) : null,
        gpsLongitude: gpsLongitude ? parseFloat(gpsLongitude) : null,
        notes: notes || null,
      },
      include: {
        school: { select: { name: true, code: true } },
        user: { select: { name: true } }
      }
    });

    // Handle photo uploads if any
    if (req.files && req.files.length > 0) {
      const photoPromises = req.files.map(file => {
        return prisma.visitPhoto.create({
          data: {
            visitId: visit.id,
            photoUrl: `/uploads/${file.filename}`
          }
        });
      });

      await Promise.all(photoPromises);
    }

    // Get the complete visit with photos
    const completeVisit = await prisma.visit.findUnique({
      where: { id: visit.id },
      include: {
        school: { select: { name: true, code: true } },
        user: { select: { name: true } },
        visitPhotos: true
      }
    });

    res.status(201).json({
      message: 'Visit logged successfully',
      visit: completeVisit
    });

  } catch (error) {
    console.error('Visit logging error:', error);
    res.status(500).json({ error: 'Failed to log visit' });
  }
};

// Get visits for a school
exports.getSchoolVisits = async (req, res) => {
  try {
    const { schoolId } = req.params;
    const userId = req.userId;

    // Verify user has access to this school
    const schoolAssignment = await prisma.schoolAssignment.findFirst({
      where: { userId, schoolId: parseInt(schoolId) }
    });

    if (!schoolAssignment) {
      return res.status(403).json({ error: 'Access denied to this school' });
    }

    const visits = await prisma.visit.findMany({
      where: { schoolId: parseInt(schoolId) },
      include: {
        user: { select: { name: true } },
        visitPhotos: true
      },
      orderBy: { visitDate: 'desc' }
    });

    res.json(visits);

  } catch (error) {
    console.error('Get visits error:', error);
    res.status(500).json({ error: 'Failed to fetch visits' });
  }
};

// Serve uploaded files
exports.serveFile = (req, res) => {
  const filename = req.params.filename;
  const filePath = path.join(__dirname, '../../uploads', filename);
  
  // Check if file exists
  if (fs.existsSync(filePath)) {
    res.sendFile(filePath);
  } else {
    res.status(404).json({ error: 'File not found' });
  }
};