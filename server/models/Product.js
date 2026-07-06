const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  unique_name: {
    type: String,
    required: true,
  },
  image: {
    type: [String],
    default: [],
    required: true,
  },
  colors: [
    {
      id: Number,
      colorName: String,
      colorImage: String,
    },
  ],
  old_price: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  brand: String,
  memory: String,
  rating: Number,
  reviews: Number,
})

module.exports = mongoose.model("Product", productSchema)
