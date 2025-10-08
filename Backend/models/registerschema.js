const mongoose = require('mongoose');

const registerSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  passWord: {
    type: String, 
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model("User", registerSchema);
