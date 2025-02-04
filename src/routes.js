
const express = require('express');
const router = express.Router();
const { processNumber } = require('./controller');


router.get('/classify-number', processNumber);

module.exports = router;
