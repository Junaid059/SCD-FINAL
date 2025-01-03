const mongoose = require("mongoose");

const attendanceSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
    required: true,
  },
  facultyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Faculty",
  },
  status: {
    type: String,
    enum: ["Present", "Absent", "Late"],
    required: true,
  },
});

module.exports = mongoose.model("Attendance", attendanceSchema);
