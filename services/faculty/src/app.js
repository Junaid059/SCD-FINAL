const express = require("express");
const mongoose = require("mongoose");
const facultyRoutes = require("./routes/facultyRoutes");

const app = express();

app.use(express.json());
app.use("/api/faculty", facultyRoutes);

mongoose
  .connect("mongodb://localhost:27017/university-faculty", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Faculty Microservice DB Connected"))
  .catch((err) => console.error(err));

const PORT = 4003;
app.listen(PORT, () => console.log(`Faculty Microservice running on port ${PORT}`));
