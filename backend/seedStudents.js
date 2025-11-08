require('dotenv').config();
const mongoose = require('mongoose');
const Student = require('./models/Student');

const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
const depts = ['CSE','EEE','BBA','ENG','Math','Physics'];
const getRandomImage = i => `https://i.pravatar.cc/150?img=${(i % 70) + 1}`;

async function seed() {
  await mongoose.connect(process.env.MONGO_URI);
  await Student.deleteMany({});
  const students = [];
  let serial = 1;
  const batches = [48,49,50,51,52,53];
  for (const batch of batches) {
    for (let i = 1; i <= 220; i++) { // ~1320 total
      const roomFloor = Math.floor(Math.random()*6) + 1;
      const roomNum = `${roomFloor}0${Math.floor(Math.random()*12)+1}`;
      students.push({
        serial: serial++,
        name: `Student ${serial}`,
        room: roomNum,
        floor: roomFloor,
        dept: depts[Math.floor(Math.random()*depts.length)],
        batch,
        blood: bloodGroups[Math.floor(Math.random()*bloodGroups.length)],
        phone: `017${Math.floor(10000000 + Math.random()*90000000)}`,
        photo: getRandomImage(i)
      });
    }
  }
  await Student.insertMany(students, { ordered: false });
  console.log('Seeded', students.length);
  mongoose.disconnect();
}

seed();