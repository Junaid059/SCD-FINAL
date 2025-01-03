const mongoose = require("mongoose");

const resultSchema = new mongoose.Schema({
  studentId: mongoose.Schema.Types.ObjectId,
  subject: String,
  marksObtained: Number,
  totalMarks: Number,
});

module.exports = mongoose.model("Result", resultSchema);
