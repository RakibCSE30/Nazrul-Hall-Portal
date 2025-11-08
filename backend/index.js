require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const authRoutes = require('./routes/auth');
const studentsRoutes = require('./routes/students');
const tokenRoutes = require('./routes/tokens');
const paymentRoutes = require('./routes/payment');

const app = express();

// === Middleware ===
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

// === PING ROUTE (এটা অবশ্যই থাকতে হবে) ===
app.get('/api/ping', (req, res) => {
  console.log('PING REQUEST RECEIVED!');
  return res.json({
    ok: true,
    message: 'Backend is alive!',
    time: new Date().toISOString(),
  });
});

// === Routes ===
app.use('/api/auth', authRoutes);
app.use('/api/students', studentsRoutes);
app.use('/api/tokens', tokenRoutes);
app.use('/api/pay', paymentRoutes);

// === 404 ===
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// === PORT ===
const PORT = process.env.PORT || 5000;

// === MongoDB + Server ===
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, '0.0.0.0', () => {
      console.log(`Server running on http://localhost:${PORT}`);
      console.log(`Test: curl http://localhost:${PORT}/api/ping`);
    });
  })
  .catch(err => {
    console.error('MongoDB connection failed:', err.message);
    process.exit(1);
  });