const express = require("express")
const mongoose = require("mongoose")
const app = express()

app.use(express.json())

mongoose
  .connect("mongodb://127.0.0.:27017/mydatabse")
  .then(() => console.log("MongoDb ulandi"))
  .catch((error) => console.log(error))

app.get("/", (req, res) => {
  res.send("Server ishlayapti!")
})

app.listen(3000, () => {
  console.log("Server ishga tushdi")
})
