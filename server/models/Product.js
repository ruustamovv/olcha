const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: false,
  },
  colors: {
    type: String,
    required: false,
  },
  old_price: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
})

module.exports = mongoose.model("Product", productSchema)
