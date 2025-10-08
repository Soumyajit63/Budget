const mongoose = require('mongoose');

const loginSchema = new mongoose.Schema({
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

// ✅ Model name = "loginSchema"
module.exports = mongoose.model("loginSchema", loginSchema);
