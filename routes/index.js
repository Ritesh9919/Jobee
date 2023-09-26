const express = require('express');

const router = express.Router(); 
const homeController = require('../controllers/home');
const recruiter = require('./recruiter');
router.get('/', homeController.home);
router.use('/', recruiter);



module.exports = router;