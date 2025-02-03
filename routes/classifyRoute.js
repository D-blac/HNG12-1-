const express = require('express');
const router = express.Router();
const { classifyNumber } = require('../controllers/classifyController');

// GET /api/classify-number?number=371
router.get('/classify-number', classifyNumber);

module.exports = router;
