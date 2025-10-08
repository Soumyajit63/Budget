const express = require('express');
const router = express.Router();
const Dashboard = require('../models/dashboardSchema');

// GET /api/dashboard/category/:category
router.get('/dashboard/category/:category', async (req, res) => {
  try {
    const category = req.params.category;
    const data = await Dashboard.find({ category });
    res.json(data);
  } catch (error) {
    console.error("❌ Error fetching category history:", error);
    res.status(500).json({ message: "Error fetching category history" });
  }
});

module.exports = router;
