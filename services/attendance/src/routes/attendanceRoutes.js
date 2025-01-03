const express = require("express");
const {
  recordAttendance,
  getAttendanceByDate,
  getStudentAttendance,
  getFacultyAttendance,
} = require("../controllers/attendanceController");

const router = express.Router();

// Record attendance
router.post("/", recordAttendance);

// Get attendance by date
router.get("/date/:date", getAttendanceByDate);

// Get student attendance
router.get("/student/:studentId", getStudentAttendance);

// Get faculty attendance
router.get("/faculty/:facultyId", getFacultyAttendance);

module.exports = router;
