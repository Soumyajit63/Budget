
// const express = require('express');
// const router = express.Router();
// const Dashboard = require('../models/dashboardSchema');

// router.post('/', async (req, res) => {
//   const { cardHolder, cardNumber, currency, category, paymentDate, notes, country } = req.body;

//   console.log("✅ Received body:", req.body);

//   if (!cardHolder || !cardNumber || !currency || !category || !paymentDate || !country) {
//     return res.status(400).json({ message: 'All required fields must be filled.' });
//   }

//   try {
//     const maskedCardNumber = cardNumber.slice(-4).padStart(cardNumber.length, '*');

//     const newEntry = new Dashboard({
//       cardHolder,
//       cardNumber: maskedCardNumber,
//       currency,
//       category,
//       paymentDate: new Date(paymentDate),
//       notes: notes || "",
//       country
//     });

//     await newEntry.save();
//     console.log("✅ Expense saved to MongoDB.");
//     res.status(201).json({ message: 'Expense saved successfully' });

//   } catch (err) {
//     console.error("❌ Error saving expense:", err);
//     res.status(500).json({ message: 'Server error', error: err.message });
//   }
// });

// module.exports = router;


// const express = require('express');
// const router = express.Router();
// const Dashboard = require('../models/dashboardSchema');

// router.post('/', async (req, res) => {
//   const { cardHolder, cardNumber, currency, category, paymentDate, notes, country } = req.body;

//   if (!cardHolder || !cardNumber || !currency || !category || !paymentDate || !country) {
//     return res.status(400).json({ message: 'All required fields must be filled.' });
//   }

//   const maskedCardNumber = cardNumber.slice(-4).padStart(cardNumber.length, '*');

//   try {
//     const newEntry = new Dashboard({
//       cardHolder,
//       cardNumber: maskedCardNumber,
//       currency,
//       category,
//       paymentDate: new Date(paymentDate),
//       notes: notes || "",
//       country
//     });

//     await newEntry.save();
//     res.status(201).json({ message: 'Expense saved successfully' });

//   } catch (error) {
//     console.error("❌ Failed to save data:", error);
//     res.status(500).json({ message: 'Server error', error: error.message });
//   }
// });

// module.exports = router;



const express = require('express');
const router = express.Router();
const Dashboard = require('../models/dashboardSchema');

router.post('/', async (req, res) => {
  const { cardHolder, cardNumber, currency, category, paymentDate, notes, address, amount } = req.body;

  // Check for required fields
  if (!cardHolder || !cardNumber || !currency || !category || !paymentDate || !address || isNaN(amount)) {
    return res.status(400).json({ message: 'All required fields must be filled.' });
  }

  const maskedCardNumber = cardNumber.slice(-4).padStart(cardNumber.length, '*');

  try {
    const newEntry = new Dashboard({
      cardHolder,
      cardNumber: maskedCardNumber,
      currency,
      category,
      paymentDate: new Date(paymentDate),
      notes: notes || "",
      address,
      amount: parseFloat(amount)  // 
    });

    await newEntry.save();
    res.status(201).json({ message: 'Expense saved successfully' });

  } catch (error) {
    console.error("❌ Failed to save data:", error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// In your Express backend (dashboard.js or api.js)
router.get("/api/expenses", async (req, res) => {
  try {
    const expenses = await Expense.find(); // Find all
    res.json(expenses);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});










module.exports = router;
