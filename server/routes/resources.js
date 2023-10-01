const express = require('express');
const router = express.Router({ mergeParams: true });
const catchAsync = require('../Utils/catchAsync');
// Middleware functions
const resources = require('../controllers/resources');


module.exports = router