const mongoose = require('mongoose');

const dashboardSchema = new mongoose.Schema({
  cardHolder: { type: String, required: true },
  cardNumber: { type: String, required: true },
  currency: { type: String, required: true },
  category: { type: String, required: true },
  paymentDate: { type: Date, required: true },
  notes: { type: String, default: "" },
  address: { type: String, required: true },
  amount: { type: Number, required: true }  // ✅ ADD THIS LINE
}, {
  timestamps: true
});

module.exports = mongoose.model('Dashboard', dashboardSchema);
