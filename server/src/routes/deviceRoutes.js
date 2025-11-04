const express = require('express');
const router = express.Router();
const deviceController = require('../controllers/deviceController');
const auth = require('../middleware/auth');

// Add a new device
router.post('/add', auth, deviceController.addDevice);

// Update device status
router.patch('/:deviceId/status', auth, deviceController.updateDeviceStatus);

// Get devices for a specific school
router.get('/school/:schoolId', auth, deviceController.getSchoolDevices);

module.exports = router;