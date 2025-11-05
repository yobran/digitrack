const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient(); // ✅ instantiate once here

exports.generateReport = async (req, res) => {
  console.log('🚀 REPORT GENERATION INITIATED');

  try {
    const { schoolId, startDate, endDate } = req.body;
    const userId = req.userId;

    console.log('User ID:', userId, 'School ID:', schoolId);

    // 🔹 Fetch the user
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { name: true }
    });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // 🔹 Fetch assigned schools
    const schoolAssignments = await prisma.schoolAssignment.findMany({
      where: { userId },
      include: { school: true }
    });

    // Return if no assignments
    if (!schoolAssignments.length) {
      return res.json({
        summary: {
          totalSchools: 0,
          totalVisits: 0,
          totalDevices: 0,
          workingDevices: 0,
          brokenDevices: 0,
          missingDevices: 0
        },
        visits: [],
        devices: [],
        generatedAt: new Date().toISOString(),
        generatedBy: user.name
      });
    }

    // 🔹 Filtering conditions
    const visitWhere = { userId };
    const deviceWhere = { addedById: userId };

    if (schoolId && schoolId !== 'all') {
      visitWhere.schoolId = parseInt(schoolId);
      deviceWhere.schoolId = parseInt(schoolId);
    }

    if (startDate && endDate) {
      visitWhere.visitDate = {
        gte: new Date(startDate),
        lte: new Date(endDate)
      };
    }

    // 🔹 Retrieve data
    const visits = await prisma.visit.findMany({
      where: visitWhere,
      include: { school: { select: { name: true } } },
      orderBy: { visitDate: 'desc' }
    });

    const devices = await prisma.device.findMany({
      where: deviceWhere,
      include: { school: { select: { name: true } } }
    });

    // 🔹 Summary
    const summary = {
      totalSchools: schoolId === 'all' ? schoolAssignments.length : 1,
      totalVisits: visits.length,
      totalDevices: devices.length,
      workingDevices: devices.filter(d => d.status === 'working').length,
      brokenDevices: devices.filter(d => d.status === 'broken').length,
      missingDevices: devices.filter(d => d.status === 'missing').length
    };

    // 🔹 Final Report
    const report = {
      summary,
      visits: visits.map(visit => ({
        id: visit.id,
        schoolName: visit.school.name,
        visitDate: visit.visitDate.toISOString().split('T')[0],
        notes: visit.notes || 'No notes provided',
        gpsLocation: visit.gpsLatitude && visit.gpsLongitude
          ? `${visit.gpsLatitude}, ${visit.gpsLongitude}`
          : 'Location not recorded'
      })),
      devices: devices.map(device => ({
        id: device.id,
        schoolName: device.school.name,
        deviceType: device.deviceType,
        serialNumber: device.serialNumber,
        status: device.status,
        lastUpdated: device.createdAt.toISOString().split('T')[0]
      })),
      generatedAt: new Date().toISOString(),
      generatedBy: user.name
    };

    console.log('✅ REPORT GENERATED SUCCESSFULLY');
    res.json(report);

  } catch (error) {
    console.error('❌ REPORT GENERATION ERROR:', error);
    res.status(500).json({
      error: 'Failed to generate report',
      details: error.message
    });
  }
};
