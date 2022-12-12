const express = require("express");
const connectDB = require("./config/connectDB.js");
const mongoose = require("mongoose");
const Task = require("./models/taskmodel.js");
const taskRoutes = require("./routes/taskRoute.js");
const dotenv = require("dotenv").config();
const cors = require("cors")

const app = express();

//MiddleWare
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());  //gunakan cors sebelum gunakan route
app.use("/api/tasks", taskRoutes);

//Routes
app.get("/", (req, res) => {
  res.send("Hompage MERN");
});

//Create port
const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};
startServer();
 