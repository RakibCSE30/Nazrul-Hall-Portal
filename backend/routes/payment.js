const express = require('express');
const Token = require('../models/Token');
const User = require('../models/User');
const router = express.Router();

// simulate payment: we accept a "transaction" object and randomly succeed/fail
router.post('/simulate', async (req, res) => {
  const { userId, amount, method } = req.body;
  // naive simulation: succeed 95% of time
  const success = Math.random() < 0.95;
  const txId = `TX-${Date.now()}-${Math.floor(Math.random()*9999)}`;
  if (success) {
    // in real world validate with provider API
    res.json({ success: true, txId, message: 'Payment success (simulated)' });
  } else {
    res.json({ success: false, txId, message: 'Payment failed (simulated)' });
  }
});

module.exports = router;