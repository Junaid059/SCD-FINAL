const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
  },
  enrollmentNumber: {
    type: String,
    required: true,
    unique: true,
  },
  department: {
    type: String,
    required: true,
  },
  grades: [
    {
      subject: String,
      grade: String,
    },
  ],
  academicProgress: {
    creditsEarned: {
      type: Number,
      default: 0,
    },
    gpa: {
      type: Number,
      default: 0,
    },
  },
});

module.exports = mongoose.model("Student", studentSchema);
