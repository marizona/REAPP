// // const mongoose = require("mongoose");

// // const productSchema = new mongoose.Schema({
// //   title: {
// //     type: String,
// //     required: true,
// //     minlength: 3,
// //     maxlength: 200,
// //   },
// //   owner: String,
// //   uid: String,
// //   date: {
// //     type: Date,
// //     default: new Date(),
// //   },

// //   photos: {
// //     type: [String],
// //     required: true,
// //   },

// //   description: {
// //     type: String,
// //     required: true,
// //     trim: true,
// //   },

// //   category: {
// //     type: ObjectId,
// //     ref: "Category",
// //     required: true,
// //   },

// //   price: {
// //     type: Number,
// //     required: true,
// //   },

// //   room: {
// //     type: Number,
// //     required: true,
// //   },

// //   superficie: {
// //     type: Number,
// //     required: true,
// //   },

// //   location: {
// //     type: String,
// //     required: true,
// //     trim: true,
// //   },
// // });

// // const Product = mongoose.model("Product", productSchema);

// // exports.Product = Product;

// const mongoose = require("mongoose");
// const { ObjectId } = mongoose.Schema;

// const productSchema = new mongoose.Schema(
//   {
//     title: {
//       type: String,
//       trim: true,
//       required: true,
//       maxlength: 2000,
//       text: true,
//     },

//     owner: {
//       type: String,
//       trim: true,
//       required: true,
//       maxlength: 2000,
//       text: true,
//     },

//     location: {
//       type: String,
//       trim: true,
//       required: true,
//       maxlength:2000,
//       text: true,
//     },

//     slug: {
//       type: String,
//       unique: true,
//       lowercase: true,
//       index: true,
//     },
//     description: {
//       type: String,
//       required: true,
//       maxlength: 2000,
//       text: true,
//     },
//     price: {
//       type: Number,
//       required: true,
//       trim: true,
//       maxlength: 32,
//     },
//     surface: {
//       type: Number,
//       required: true,
//       trim: true,
//       maxlength: 32,
//     },
//     rooms: {
//       type: Number,
//       trim: true,
//       maxlength: 32,
//     },
//     category: {
//       type: String,
//       required: true,
//     },

//     images: {
//       type: Array,
//     },
//   },
//   { timestamps: true }
// );

// module.exports = mongoose.model("Product", productSchema);

import mongoose from 'mongoose'

const reviewSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
)

const productSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    reviews: [reviewSchema],
    rating: {
      type: Number,
      required: true,
      default: 0,
    },
    numReviews: {
      type: Number,
      required: true,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    countInStock: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
)

const Product = mongoose.model('Product', productSchema)

export default Product
