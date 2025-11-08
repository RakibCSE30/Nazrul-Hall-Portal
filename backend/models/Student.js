const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
  serial: { type: Number, index: true },
  name: { type: String, index: true },
  room: { type: String, index: true }, // e.g. "401"
  floor: { type: Number, index: true },
  dept: { type: String, index: true },
  batch: { type: Number, index: true },
  blood: { type: String, index: true },
  phone: String,
  photo: String
});

// compound index for common queries: room + batch
StudentSchema.index({ room: 1, batch: 1 });

module.exports = mongoose.model('Student', StudentSchema);