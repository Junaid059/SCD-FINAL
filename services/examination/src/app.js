const express = require("express");
const mongoose = require("mongoose");
const examRoutes = require("./routes/examRoutes");

const app = express();

app.use(express.json());
app.use("/api/exam", examRoutes);

mongoose
  .connect("mongodb://localhost:27017/university-examination", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Examination Microservice DB Connected"))
  .catch(err => console.error(err));

const PORT = 4001;
app.listen(PORT, () => console.log(`Examination Microservice running on port ${PORT}`));
