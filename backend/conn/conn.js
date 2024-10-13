const mongoose = require("mongoose");

const conn = async (req, res) => {
  try {
    await mongoose
      .connect(
        "mongodb+srv://to-do-list:todolist@cluster0.rt8ys.mongodb.net/mydatabase?retryWrites=true&w=majority"
      )
      .then(() => {
        console.log("Connected");
      });
  } catch (error) {
    console.log(error);
  }
};
conn();
