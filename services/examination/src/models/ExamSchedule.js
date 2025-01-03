const mongoose = require("mongoose");

const examScheduleSchema = new mongoose.Schema({
  subject: String,
  date: Date,
  facultyId: mongoose.Schema.Types.ObjectId,
});

module.exports = mongoose.model("ExamSchedule", examScheduleSchema);
