import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import connectToDatabase from "./config/database.js"

//initialize
dotenv.config()
const db = connectToDatabase()
const port = process.env.PORT || 5000
const app = express()

//middleware
app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
  res.send("Hello Lodi Cakes")
})

app.listen(port, () => {
  console.log(`Server is already running... port: ${port}`)
})