const mongoose = require("mongoose");

exports.dbConnect = () => {
  mongoose
    .connect(
      "mongodb+srv://chirag:chirag123@cluster0.mk94png.mongodb.net/chirag"
    )
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((error) => {
      console.log(error);
      process.exit(1);
    });
};
