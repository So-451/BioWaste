const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes'); // Importing the routes
const cors = require('cors');
require('dotenv').config();


const app = express();
const PORT = 8080;

// Middleware
app.use(bodyParser.json()); // Parse incoming JSON requests
app.use(cors());
// Routes
app.use('/api/users', userRoutes); // Using the routes for /api/users

// MongoDB connection (ensure you have MongoDB running and replace the URI)
mongoose.connect('mongodb+srv://sarkarsolanki045:IaG6QE1DOKno9gfQ@test-pro-db.vwsht.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Error connecting to MongoDB', err);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
