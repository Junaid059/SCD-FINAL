const express = require("express");
const {
  createFaculty,
  getAllFaculty,
  getFacultyById,
  updateFaculty,
  deleteFaculty,
} = require("../controllers/facultyController");

const router = express.Router();

// Create a new faculty member
router.post("/", createFaculty);

// Get all faculty members
router.get("/", getAllFaculty);

// Get faculty details by ID
router.get("/:id", getFacultyById);

// Update faculty details
router.put("/:id", updateFaculty);

// Delete a faculty member
router.delete("/:id", deleteFaculty);

module.exports = router;
