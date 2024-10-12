const express = require('express');
const bodyParser = require('body-parser');
const torrentRoutes = require('./routes/torrentRoutes');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static('public'));

// API routes
app.use('/api', torrentRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
