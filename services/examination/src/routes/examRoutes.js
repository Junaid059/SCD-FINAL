const express = require("express");
const {
  createSchedule,
  getSchedules,
  addResult,
  getResults,
  trackPerformance,
} = require("../controllers/ExamController");

const router = express.Router();

router.post("/schedule", createSchedule);
router.get("/schedule", getSchedules);
router.post("/result", addResult);
router.get("/result", getResults);
router.get("/performance/:studentId", trackPerformance);

module.exports = router;
