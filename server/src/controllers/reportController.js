const { PrismaClient } = require('@prisma/client');

let prisma;

try {
  prisma = new PrismaClient();
  console.log('✅ Prisma client initialized successfully');
} catch (error) {
  console.error('❌ Prisma initialization failed:', error.message);
  // Fallback - we'll handle this in the function
}

exports.generateReport = async (req, res) => {
  console.log('🚀 REPORT GENERATION STARTED');
  
  try {
    const { schoolId, startDate, endDate } = req.body;
    const userId = req.userId;

    console.log('User ID:', userId, 'School ID:', schoolId);

    // Check if Prisma is available
    if (!prisma) {
      console.log('⚠️ Using temporary data (Prisma not available)');
      return res.json(getTemporaryReportData());
    }

    // 🔹 Try to fetch real data from database
    try {
      // Fetch user
      const user = await prisma.user.findUnique({
        where: { id: userId },
        select: { name: true }
      });

      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      // Fetch assigned schools
      const schoolAssignments = await prisma.schoolAssignment.findMany({
        where: { userId },
        include: { school: true }
      });

      // Fetch visits
      const visitWhere = { userId };
      if (schoolId && schoolId !== 'all') {
        visitWhere.schoolId = parseInt(schoolId);
      }
      if (startDate && endDate) {
        visitWhere.visitDate = {
          gte: new Date(startDate),
          lte: new Date(endDate)
        };
      }

      const visits = await prisma.visit.findMany({
        where: visitWhere,
        include: { school: { select: { name: true } } },
        orderBy: { visitDate: 'desc' }
      });

      // Fetch devices
      const deviceWhere = { addedById: userId };
      if (schoolId && schoolId !== 'all') {
        deviceWhere.schoolId = parseInt(schoolId);
      }

      const devices = await prisma.device.findMany({
        where: deviceWhere,
        include: { school: { select: { name: true } } }
      });

      // 🔹 Create report with REAL data
      const report = {
        summary: {
          totalSchools: schoolAssignments.length,
          totalVisits: visits.length,
          totalDevices: devices.length,
          workingDevices: devices.filter(d => d.status === 'working').length,
          brokenDevices: devices.filter(d => d.status === 'broken').length,
          missingDevices: devices.filter(d => d.status === 'stolen').length
        },
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
        generatedBy: user.name,
        dataSource: 'REAL DATABASE'
      };

      console.log('✅ REPORT GENERATED SUCCESSFULLY (Real Data)');
      res.json(report);

    } catch (dbError) {
      console.error('❌ Database query failed:', dbError.message);
      console.log('⚠️ Falling back to temporary data');
      res.json(getTemporaryReportData());
    }

  } catch (error) {
    console.error('❌ REPORT GENERATION ERROR:', error);
    res.status(500).json({
      error: 'Failed to generate report',
      details: error.message
    });
  }
};

// Fallback function if database fails
function getTemporaryReportData() {
  return {
    summary: {
      totalSchools: 3,
      totalVisits: 12,
      totalDevices: 68,
      workingDevices: 58,
      brokenDevices: 7,
      missingDevices: 3
    },
    visits: [
      {
        id: 1,
        schoolName: 'Nairobi Primary School',
        visitDate: '2025-11-04',
        notes: 'Regular monitoring visit. All devices working properly.',
        gpsLocation: '-1.2921, 36.8219'
      }
    ],
    devices: [
      {
        id: 1,
        schoolName: 'Nairobi Primary School',
        deviceType: 'Laptop',
        serialNumber: 'LP-NB-001',
        status: 'working',
        lastUpdated: '2025-11-04'
      }
    ],
    generatedAt: new Date().toISOString(),
    generatedBy: 'DLP Field Intern',
    dataSource: 'TEMPORARY DATA (Database unavailable)',
    note: 'This report uses temporary data. Database connection needs to be fixed.'
  };
}