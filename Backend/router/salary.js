const express = require('express');
const router = express.Router();
const Salary = require('../models/salarySchema');

router.post('/', async (req, res) => {
  const { amount } = req.body;

  if (!amount || amount <= 0) {
    return res.status(400).json({ message: 'Invalid salary amount' });
  }

  try {
    const salaryEntry = new Salary({ amount });
    await salaryEntry.save();
    res.status(201).json({ message: 'Salary saved successfully', amount });
  } catch (error) {
    console.error("❌ Error saving salary:", error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;
