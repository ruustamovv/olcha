require("dotenv").config()

const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()
app.use(cors())
app.use(express.json())

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Atlas ulandi"))
  .catch((err) => console.log(err))

const Product = require("./models/Product")

app.post("/products", async (req, res) => {
  const product = await Product.create(req.body)
  res.json(product)
})

app.get("/products", async (req, res) => {
  const products = await Product.find()
  res.json(products)
})

app.get("/products/:unique_name", async (req, res) => {
  const product = await Product.findOne({
    unique_name: req.params.unique_name,
  })

  res.json(product)
})

app.listen(3000)
