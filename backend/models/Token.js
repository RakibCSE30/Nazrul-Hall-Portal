const mongoose = require('mongoose');

const TokenSchema = new mongoose.Schema({
  user: { type: mongoose.Types.ObjectId, ref: 'User', index: true },
  studentId: String, // store student identifier
  meal: { type: String, enum: ['dupur', 'rat'], default: 'rat' }, // dupur=afternoon, rat=night
  amount: Number,
  paymentMethod: String, // bkash | nagad
  paymentRef: String, // transaction id (simulated)
  status: { type: String, enum: ['active', 'cancelled', 'used'], default: 'active' },
  date: String, // YYYY-MM-DD for easy per-day queries
  time: String, // HH:mm string
  createdAt: { type: Date, default: Date.now }
});

TokenSchema.index({ date: 1, user: 1, meal: 1 });

module.exports = mongoose.model('Token', TokenSchema);