const express = require('express');
const app = express();

// Heroku provides the port via an environment variable
const PORT = process.env.PORT || 3000;

// This is your API endpoint
app.get('/api/hello', (req, res) => {
    res.json({
        message: "Hello from your Heroku API!",
        status: "success",
        timestamp: new Date()
    });
});

// Root route (for testing in the browser)
app.get('/', (req, res) => {
    res.send('API is running. Go to /api/hello to see data.');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
