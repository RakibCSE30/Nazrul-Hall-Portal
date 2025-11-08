const express = require('express');
const Student = require('../models/Student');
const router = express.Router();

// GET /api/students?batch=50&dept=EEE&room=401&search=rakib&page=1&limit=50&sort=room
router.get('/', async (req, res) => {
  const { batch, dept, room, search, page = 1, limit = 50, sort = 'serial' } = req.query;
  const q = {};
  if (batch) q.batch = Number(batch);
  if (dept) q.dept = dept;
  if (room) q.room = room;
  if (search) q.$text = { $search: search }; // create text index if needed
  const skip = (page - 1) * limit;
  const rows = await Student.find(q).sort({ [sort]: 1 }).skip(skip).limit(Number(limit));
  const total = await Student.countDocuments(q);
  res.json({ rows, total });
});

// GET room details (students in room)
router.get('/room/:room', async (req, res) => {
  const room = req.params.room;
  const students = await Student.find({ room }).sort({ serial: 1 });
  res.json({ students });
});

module.exports = router;