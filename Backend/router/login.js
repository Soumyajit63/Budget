const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();

// Use the same model used during registration
const User = require('../models/registerschema');  // Make sure this points to the file where your registered users are stored

router.post('/', async (req, res) => {
  const { email, passWord } = req.body;

  if (!email || !passWord) {
    return res.status(400).json({ message: 'Email and password are required.' });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      console.log("❌ No user found with email:", email);
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    console.log("✅ User found:", user.email);

    const isMatch = await bcrypt.compare(passWord, user.passWord);
    if (!isMatch) {
      console.log("❌ Password does not match for email:", email);
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    console.log("✅ Login successful for email:", email);
    res.status(200).json({ message: 'Login successful' });

  } catch (err) {
    console.error('🔥 Login error:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
