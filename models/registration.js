const mongoose = require('mongoose');

const RegistrationSchema = new mongoose.Schema({
  eventType: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  eventDate: {
    type: Date,
    required: true
  },
  image: {
    type: String, 
    required: false
  },
  message: {
    type: String,
    required: false
  },
  registrationDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Registration', RegistrationSchema);
