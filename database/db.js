const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://marizona:madura27@cluster0.tb1uv.mongodb.net/Rentify?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    console.log("DB connected");
  } catch (err) {
    console.log(err);
  }
};
module.exports = connectDB;
