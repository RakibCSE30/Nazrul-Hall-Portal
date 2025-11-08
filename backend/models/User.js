const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true, index: true },
  passwordHash: String,
  studentId: { type: String, index: true },
  mobile: String,
  role: { type: String, default: 'student' }, // admin, teacher etc.
  balance: { type: Number, default: 0 }, // for refund simulation
  resetToken: String,
  resetTokenExpiry: Date,
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);