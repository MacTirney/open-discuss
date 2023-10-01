const express = require('express');
const router = express.Router({ mergeParams: true });
const catchAsync = require('../Utils/catchAsync');
// Middleware functions
const comments = require('../controllers/comments');


module.exports = router