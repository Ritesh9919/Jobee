const express = require('express');
const router = express.Router();

const recruiterController = require('../controllers/recruiter');
router.get('/recruiter/register', recruiterController.register);


module.exports = router;