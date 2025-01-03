const Attendance = require("../models/Attendance");

exports.recordAttendance = async (req, res) => {
  try {
    const attendance = new Attendance(req.body);
    await attendance.save();
    res.status(201).send(attendance);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

exports.getAttendanceByDate = async (req, res) => {
  try {
    const { date } = req.params;
    const attendance = await Attendance.find({ date: new Date(date) });
    res.status(200).send(attendance);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getStudentAttendance = async (req, res) => {
  try {
    const { studentId } = req.params;
    const attendance = await Attendance.find({ studentId });
    res.status(200).send(attendance);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getFacultyAttendance = async (req, res) => {
  try {
    const { facultyId } = req.params;
    const attendance = await Attendance.find({ facultyId });
    res.status(200).send(attendance);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
