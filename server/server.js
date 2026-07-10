const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

require("dotenv").config()

const app = express()
app.use(express.json())
app.use(cors())

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Atlas ulandi"))
  .catch((err) => console.log(err))

const Product = require("./models/Product")
const Banner = require("./models/Banner")

app.post("/products", async (req, res) => {
  const products = await Product.create(req.body)
  res.json(products)
})

app.get("/products", async (req, res) => {
  const products = await Product.find()
  res.json(products)
})

app.post("/banners", async (req, res) => {
  const banners = await Banner.create(req.body)
  res.json(banners)
})

app.get("/banners", async (req, res) => {
  const banners = await Banner.find()
  res.json(banners)
})

app.get("/products/:unique_name", async (req, res) => {
  const products = await Product.findOne({
    unique_name: req.params.unique_name,
  })
  res.json(products)
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server ${PORT}-portda ishga tushdi`)
})
