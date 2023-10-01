const express = require('express');
const router = express.Router({ mergeParams: true });
const catchAsync = require('../Utils/catchAsync');
// Middleware functions
const discussions = require('../controllers/discussions');


module.exports = router
