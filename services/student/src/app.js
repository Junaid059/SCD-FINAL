const express = require("express");
const mongoose = require("mongoose");
const studentRoutes = require("./routes/studentRoutes");

const app = express();

app.use(express.json());
app.use("/api/students", studentRoutes);

mongoose
  .connect("mongodb://localhost:27017/university-students", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Student Microservice DB Connected"))
  .catch((err) => console.error(err));

const PORT = 4004;
app.listen(PORT, () => console.log(`Student Microservice running on port ${PORT}`));
