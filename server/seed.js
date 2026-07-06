require("dotenv").config()
const mongoose = require("mongoose")
const Product = require("./models/Product")
const products = require("./data/products.json")

mongoose.connect(process.env.MONGO_URI)

async function seed() {
  try {
    await Product.deleteMany({})
    await Product.insertMany(products)
    console.log("Products qo'shildi!")
    process.exit()
  } catch (err) {
    console.log(err)
  }
}

seed()
