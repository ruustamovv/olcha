const mongoose = require("mongoose")
const Product = require("./models/Product")

mongoose.connect("mongodb://127.0.0.1:27017/olcha")

async function seed() {
  await Product.create({
    name: "iPhone 16",
    image: "iphone.jpg",
    old_price: 12200,
    price: 11200,
  })

  console.log("Product qo'shildi")
  process.exit()
}

seed()
