const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');

const connectDB = require('./config/database');
const Registration = require('./models/registration');

const app = express();
const PORT = process.env.PORT || 3000;

// Database Connection
connectDB();

// Image Upload Configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/uploads/')
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname))
  }
});
const upload = multer({ storage: storage });

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'login.html'));
});

// Skip Login Route
app.get('/skip-login', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'home.html'));
});

// Home Page Route
app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'home.html'));
});

// Event Registration Route
app.post('/register', upload.single('image'), async (req, res) => {
  try {
    const { eventType, name, email, eventDate, message } = req.body;
    
    const newRegistration = new Registration({
      eventType,
      name,
      email,
      eventDate,
      image: req.file ? `/uploads/${req.file.filename}` : null,
      message
    });

    await newRegistration.save();
    res.status(201).json({ 
      message: 'Registration successful', 
      data: newRegistration 
    });
  } catch (error) {
    res.status(400).json({ 
      message: 'Registration failed', 
      error: error.message 
    });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});