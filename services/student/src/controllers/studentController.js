const Student = require("../models/Student");

// Create a new student
exports.createStudent = async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.status(201).send(student);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// Get all students
exports.getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).send(students);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Get student by ID
exports.getStudentById = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await Student.findById(id);
    if (!student) return res.status(404).send("Student not found");
    res.status(200).send(student);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Update student details
exports.updateStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await Student.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!student) return res.status(404).send("Student not found");
    res.status(200).send(student);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// Delete student
exports.deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await Student.findByIdAndDelete(id);
    if (!student) return res.status(404).send("Student not found");
    res.status(200).send("Student deleted successfully");
  } catch (error) {
    res.status(500).send(error.message);
  }
};
