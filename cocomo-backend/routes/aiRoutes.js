const express = require('express');
const { getEffortEstimate } = require('../controllers/aiController');

const router = express.Router();

// Route for AI-based effort estimation
router.post('/estimate', getEffortEstimate);

module.exports = router;
