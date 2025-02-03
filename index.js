const express = require('express');
const cors = require('cors');
const classifyRoute = require('./routes/classifyRoute');

const app = express();
const PORT = process.env.PORT || 7777;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', classifyRoute);

// Fallback Route
app.use((req, res) => {
    res.status(404).json({ error: 'Endpoint not found' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
