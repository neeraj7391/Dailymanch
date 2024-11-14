// routes/authRoutes.js
const express = require('express');
const router = express.Router();

// Dummy login route (you can replace with your own logic later)
router.post('/login', (req, res) => {
    // Add authentication logic
    res.send('Login route');
});

// Dummy register route (you can replace with your own logic later)
router.post('/register', (req, res) => {
    // Add registration logic
    res.send('Register route');
});

module.exports = router;
