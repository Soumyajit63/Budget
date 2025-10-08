const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../models/registerschema');

router.post('/', async (req, res) => {
  const { fullName, phoneNumber, email, passWord } = req.body;

  console.log("Received body:", req.body); // debug log

  if (!fullName || !phoneNumber || !email || !passWord) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: 'Email already exists' });
    }

    const hashedPassword = await bcrypt.hash(passWord, 10);

    const newUser = new User({
      fullName,
      phoneNumber,
      email,
      passWord: hashedPassword
    });

    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });

  } catch (err) {
    console.error('Error in registration:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
