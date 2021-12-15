const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 200,
  },
  owner: String,
  uid: String,
  date: {
    type: Date,
    default: new Date(),
  },

  photos: {
    type: [String],
    required: true,
  },

  description: {
    type: String,
    required: true,
    trim: true,
  },

  category: {
    type: ObjectId,
    ref: "Category",
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },

  room: {
    type: Number,
    required: true,
  },

  superficie: {
    type: Number,
    required: true,
  },

  location: {
    type: String,
    required: true,
    trim: true,
  },
});

const Product = mongoose.model("Product", productSchema);

exports.Product = Product;
