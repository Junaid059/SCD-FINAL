const express = require("express");
const mongoose = require("mongoose");
const attendanceRoutes = require("./routes/attendanceRoutes");

const app = express();

app.use(express.json());
app.use("/api/attendance", attendanceRoutes);

mongoose
  .connect("mongodb://localhost:27017/university-attendance", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Attendance Microservice DB Connected"))
  .catch((err) => console.error(err));

const PORT = 4002;
app.listen(PORT, () => console.log(`Attendance Microservice running on port ${PORT}`));
