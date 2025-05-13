
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();


// Middleware to handle CORS
// This allows the frontend to communicate with the backend
// without any CORS issues.
// In a production environment, you should restrict this to specific origins.
// For example, if your frontend is hosted on 'https://example.com',
// you can set the origin to that URL.
// For development, you can use '*' to allow all origins.   
app.use(
    cors(
        {
            origin: process.env.CORS_ORIGIN || '*', // Replace with your frontend URL in production
            methods: ['GET', 'POST', 'PUT', 'DELETE'],
            allowedHeaders: ['Content-Type', 'Authorization'],
        }
 ));

 // Middleware to parse JSON requests
app.use(express.json());


// Route to serve the frontend application


// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
// This is where you would define your API routes
// For example:
// const apiRoutes = require('./routes/api');
// app.use('/api', apiRoutes);
// This is where you would serve your frontend application
// For example, if your frontend is built with React and the build files are in the 'build' directory: