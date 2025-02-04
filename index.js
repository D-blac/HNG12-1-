// index.js
const express = require('express');
const cors = require('cors');
const { processNumber } = require('./src/controller');

const app = express();
const PORT = process.env.PORT || 7771;

// Enable CORS
app.use(cors());

// Root Endpoint - Process number 371 by default
app.get('/', (req, res) => {
    req.query.number = '371'; // Default number
    processNumber(req, res); // Reuse the existing processing function
});

// API Route for custom numbers
app.use('/api', require('./src/routes'));

// 404 Error Handling for Undefined Routes
app.use((req, res) => {
    res.status(404).json({ error: 'Endpoint not found' });
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});