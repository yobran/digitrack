const express = require('express');
const router = express.Router();
const visitController = require('../controllers/visitController');
const auth = require('../middleware/auth');
const upload = require('../config/cloudinary');

// Log a new visit with photo upload support
router.post('/log', auth, upload.array('photos', 5), visitController.logVisit);

// Get visits for a specific school
router.get('/school/:schoolId', auth, visitController.getSchoolVisits);

// Serve uploaded files
router.get('/files/:filename', visitController.serveFile);

module.exports = router;