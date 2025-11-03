const express = require('express');
const router = express.Router();
const schoolController = require('../controllers/schoolController');
const auth = require('../middleware/auth');

// All routes require authentication
router.get('/my-schools', auth, schoolController.getMySchools);
router.get('/:id', auth, schoolController.getSchool);

module.exports = router;