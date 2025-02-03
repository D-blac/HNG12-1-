const express = require('express');
const cors = require('cors');
const { classifyNumber } = require('./controllers/classifyController');

const app = express();
const PORT = process.env.PORT || 7777;

// Enable CORS
app.use(cors());

// Root Endpoint (Optional)
app.get('/', (req, res) => {
    res.send('Welcome to the Number Classification API');
});

// API Route
app.get('/api/classify-number', classifyNumber);

// 404 Error Handling for Undefined Routes
app.use((req, res) => {
    res.status(404).json({ error: 'Endpoint not found' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
