const Faculty = require("../models/Faculty");

// Create a new faculty member
exports.createFaculty = async (req, res) => {
  try {
    const faculty = new Faculty(req.body);
    await faculty.save();
    res.status(201).send(faculty);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// Get all faculty members
exports.getAllFaculty = async (req, res) => {
  try {
    const faculty = await Faculty.find();
    res.status(200).send(faculty);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Get faculty details by ID
exports.getFacultyById = async (req, res) => {
  try {
    const { id } = req.params;
    const faculty = await Faculty.findById(id);
    if (!faculty) return res.status(404).send("Faculty not found");
    res.status(200).send(faculty);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Update faculty details
exports.updateFaculty = async (req, res) => {
  try {
    const { id } = req.params;
    const faculty = await Faculty.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!faculty) return res.status(404).send("Faculty not found");
    res.status(200).send(faculty);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// Delete faculty member
exports.deleteFaculty = async (req, res) => {
  try {
    const { id } = req.params;
    const faculty = await Faculty.findByIdAndDelete(id);
    if (!faculty) return res.status(404).send("Faculty not found");
    res.status(200).send("Faculty deleted successfully");
  } catch (error) {
    res.status(500).send(error.message);
  }
};
