// CORRECT - use the installed Prisma client
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
// Add a new device to a school
exports.addDevice = async (req, res) => {
  try {
    const { schoolId, deviceType, serialNumber, status, notes } = req.body;
    const userId = req.userId;

    console.log('Adding device:', { userId, schoolId, deviceType, serialNumber, status, notes });

    // Validate required fields
    if (!schoolId || !deviceType || !serialNumber) {
      return res.status(400).json({ error: 'School, device type and serial number are required' });
    }

    // Verify user has access to this school
    const schoolAssignment = await prisma.schoolAssignment.findFirst({
      where: { userId, schoolId: parseInt(schoolId) }
    });

    if (!schoolAssignment) {
      return res.status(403).json({ error: 'Access denied to this school' });
    }

    // Check if serial number already exists
    const existingDevice = await prisma.device.findUnique({
      where: { serialNumber }
    });

    if (existingDevice) {
      return res.status(400).json({ error: 'Device with this serial number already exists' });
    }

    // Create the device
    const device = await prisma.device.create({
      data: {
        schoolId: parseInt(schoolId),
        addedById: userId,
        deviceType,
        serialNumber,
        status: status || 'working',
        notes: notes || null,
      },
      include: {
        school: { select: { name: true, code: true } },
        addedBy: { select: { name: true } }
      }
    });

    res.status(201).json({
      message: 'Device added successfully',
      device
    });

  } catch (error) {
    console.error('Device addition error:', error);
    res.status(500).json({ error: 'Failed to add device' });
  }
};

// Update device status
exports.updateDeviceStatus = async (req, res) => {
  try {
    const { deviceId } = req.params;
    const { status } = req.body;
    const userId = req.userId;

    console.log('Updating device status:', { userId, deviceId, status });

    // Verify user has access to this device
    const device = await prisma.device.findFirst({
      where: { 
        id: parseInt(deviceId),
        school: {
          assignments: {
            some: { userId }
          }
        }
      },
      include: {
        school: true
      }
    });

    if (!device) {
      return res.status(404).json({ error: 'Device not found or access denied' });
    }

    // Update device status
    const updatedDevice = await prisma.device.update({
      where: { id: parseInt(deviceId) },
      data: { status },
      include: {
        school: { select: { name: true } },
        addedBy: { select: { name: true } }
      }
    });

    res.json({
      message: 'Device status updated successfully',
      device: updatedDevice
    });

  } catch (error) {
    console.error('Device status update error:', error);
    res.status(500).json({ error: 'Failed to update device status' });
  }
};

// Get devices for a school
exports.getSchoolDevices = async (req, res) => {
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

    const devices = await prisma.device.findMany({
      where: { schoolId: parseInt(schoolId) },
      include: {
        addedBy: { select: { name: true } }
      },
      orderBy: { createdAt: 'desc' }
    });

    res.json(devices);

  } catch (error) {
    console.error('Get devices error:', error);
    res.status(500).json({ error: 'Failed to fetch devices' });
  }
};