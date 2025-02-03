const express = require('express');
const cors = require('cors');
const { classifyNumber } = require('./controllers/classifyController');

const app = express();
const PORT = process.env.PORT || 7777
;


app.use(cors());

app.get('/', (req, res) => {
    req.query.number = '371';
    classifyNumber(req, res); 
});


app.get('/api/classify-number', classifyNumber);


app.use((req, res) => {
    res.status(404).json({ error: 'Endpoint not found' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
