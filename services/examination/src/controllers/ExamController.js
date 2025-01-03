const ExamSchedule = require("../models/ExamSchedule");
const Result = require("../models/Result");
const Performance = require("../models/Performance");

exports.createSchedule = async (req, res) => {
  try {
    const schedule = new ExamSchedule(req.body);
    await schedule.save();
    res.status(201).send(schedule);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

exports.getSchedules = async (req, res) => {
  try {
    const schedules = await ExamSchedule.find();
    res.status(200).send(schedules);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.addResult = async (req, res) => {
  try {
    const result = new Result(req.body);
    await result.save();
    res.status(201).send(result);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

exports.getResults = async (req, res) => {
  try {
    const results = await Result.find();
    res.status(200).send(results);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.trackPerformance = async (req, res) => {
  try {
    const { studentId } = req.params;
    const results = await Result.find({ studentId });
    if (!results.length) {
      return res.status(404).send("No results found for this student.");
    }

    const subjects = results.map(r => r.subject);
    const averageMarks = results.reduce((sum, r) => sum + r.marksObtained, 0) / results.length;

    const performance = new Performance({ studentId, averageMarks, subjects });
    await performance.save();

    res.status(200).send(performance);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
