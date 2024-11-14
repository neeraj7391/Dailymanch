const express = require('express');
const errorHandler = require('./middleware/errorHandler'); // Import the error handler
const categoryRoutes = require('./routes/categoryRoutes'); // Import category routes
const commentRoutes = require('./routes/commentRoutes'); // Import comment routes

const app = express();

// Middleware
app.use(express.json()); // JSON parsing middleware

// Define your routes
app.use('/api/categories', categoryRoutes);
app.use('/api/comments', commentRoutes);

// Use the error handler middleware
app.use(errorHandler);

module.exports = app;
