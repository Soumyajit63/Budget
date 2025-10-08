const express = require('express');
const cors = require('cors');
const { database } = require('./config/database');
const registerRoute = require('../Backend/router/register');
const loginRoute = require('../Backend/router/login');
const dashboard = require('../Backend/router/dashboard'); 
const salary = require('../Backend/router/salary');
const history = require("../Backend/router/history");

const app = express();
const PORT = 5005;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
database();

// API Routes
app.use('/api/register', registerRoute);
app.use('/api/login', loginRoute);
app.use('/api/dashboard', dashboard); // ✅ mount dashboard route
app.use('/api/salary', salary);
app.use("/api", history);


// Root route for testing
app.get('/', (req, res) => {
  res.send('✅ Budget Buddy Server is Running');
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server started on http://localhost:${PORT}`);
});
