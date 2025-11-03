const { PrismaClient } = require('../prisma/client');
const prisma = new PrismaClient();

// Get all schools assigned to the current user
exports.getMySchools = async (req, res) => {
  try {
    const userId = req.userId;
    
    const assignedSchools = await prisma.schoolAssignment.findMany({
      where: { userId },
      include: {
        school: {
          include: {
            devices: true,
            visits: {
              orderBy: { visitDate: 'desc' },
              take: 5
            }
          }
        }
      }
    });

    res.json(assignedSchools.map(assignment => assignment.school));
  } catch (error) {
    console.error('Get schools error:', error);
    res.status(500).json({ error: 'Failed to fetch schools' });
  }
};

// Get single school details
exports.getSchool = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.userId;

    // Verify user has access to this school
    const assignment = await prisma.schoolAssignment.findFirst({
      where: { userId, schoolId: parseInt(id) }
    });

    if (!assignment) {
      return res.status(403).json({ error: 'Access denied to this school' });
    }

    const school = await prisma.school.findUnique({
      where: { id: parseInt(id) },
      include: {
        devices: true,
        visits: {
          include: {
            user: { select: { name: true } },
            visitPhotos: true
          },
          orderBy: { visitDate: 'desc' }
        }
      }
    });

    if (!school) {
      return res.status(404).json({ error: 'School not found' });
    }

    res.json(school);
  } catch (error) {
    console.error('Get school error:', error);
    res.status(500).json({ error: 'Failed to fetch school' });
  }
};