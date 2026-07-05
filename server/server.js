const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()
app.use(cors())
app.use(express.json())

mongoose
  .connect("mongodb://127.0.0.1:27017/olcha")
  .then(() => console.log("MongoDb ulandi"))
  .catch((error) => console.log(error))

const Product = require("./models/Product")

app.post("/products", async (req, res) => {
  const product = await Product.create(req.body)
  res.json(product)
})

app.get("/products", async (req, res) => {
  const products = await Product.find()
  res.json(products)
})

app.listen(3000, () => {
  console.log("Server 3000-portda ishlayapti")
})
