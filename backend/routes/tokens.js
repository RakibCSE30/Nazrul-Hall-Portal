const express = require('express');
const Token = require('../models/Token');
const User = require('../models/User');
const router = express.Router();

// helper: get YYYY-MM-DD
const todayStr = () => {
  const d = new Date();
  return d.toISOString().slice(0,10);
};

const isWithinCollectionWindow = () => {
  const d = new Date();
  const hour = d.getHours();
  // allowed collection/cancel between 20:00 - 22:00 (8-10 PM)
  return hour >= 20 && hour < 22;
};

// create token (after payment success)
router.post('/create', async (req, res) => {
  try {
    const { userId, meal='rat', amount, paymentMethod, paymentRef } = req.body;
    // limit: one token per meal per day (update as needed)
    const date = todayStr();
    const exists = await Token.findOne({ user: userId, date, meal, status: 'active' });
    if (exists) return res.status(400).json({ message: 'Already collected token for this meal today' });
    const token = await Token.create({
      user: userId, meal, amount, paymentMethod, paymentRef, date,
      time: new Date().toTimeString().slice(0,5)
    });
    res.json({ token });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// cancel token by id (refund if within window and same-day)
router.post('/cancel/:id', async (req, res) => {
  const id = req.params.id;
  const token = await Token.findById(id);
  if (!token) return res.status(404).json({ message: 'Token not found' });
  if (token.status !== 'active') return res.status(400).json({ message: 'Cannot cancel' });

  // allow cancellation only same date and within window
  if (token.date !== todayStr()) return res.status(400).json({ message: 'Can only cancel same day' });
  if (!isWithinCollectionWindow()) return res.status(400).json({ message: 'Cancellation window closed (8-10 PM)' });

  token.status = 'cancelled';
  await token.save();
  // refund: add to user.balance
  const user = await User.findById(token.user);
  if (user) {
    user.balance = (user.balance || 0) + (token.amount || 0);
    await user.save();
  }
  res.json({ message: 'Cancelled and refunded', token });
});

module.exports = router;