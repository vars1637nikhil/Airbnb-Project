const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://Nikhil:WanderListPassword@cluster0.xm75evu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Connected");
  })
  .catch((err) => {
    console.log(err);
  });