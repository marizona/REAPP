const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
    trim: true,
    maxlength: 50,
  },
});

const Category = mongoose.model("Category", categorySchema);

exports.Category = Category;
