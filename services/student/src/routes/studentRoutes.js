const express = require("express");
const {
  createStudent,
  getAllStudents,
  getStudentById,
  updateStudent,
  deleteStudent,
} = require("../controllers/studentController");

const router = express.Router();

// Create a new student
router.post("/", createStudent);

// Get all students
router.get("/", getAllStudents);

// Get student details by ID
router.get("/:id", getStudentById);

// Update student details
router.put("/:id", updateStudent);

// Delete a student
router.delete("/:id", deleteStudent);

module.exports = router;
