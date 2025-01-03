const mongoose = require("mongoose");

const performanceSchema = new mongoose.Schema({
  studentId: mongoose.Schema.Types.ObjectId,
  averageMarks: Number,
  subjects: [String],
});

module.exports = mongoose.model("Performance", performanceSchema);
