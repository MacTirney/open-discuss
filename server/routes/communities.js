const express = require('express');
const router = express.Router({ mergeParams: true });
const catchAsync = require('../Utils/catchAsync');
// Middleware functions
const communities = require('../controllers/communities');


module.exports = router