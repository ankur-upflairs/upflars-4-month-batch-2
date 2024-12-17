const mongoose = require("mongoose");

exports.dbConnect = () => {
  mongoose
    .connect(
      process.env.MONGODB_URL
    )
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((error) => {
      console.log(error);
      process.exit(1);
    });
};
