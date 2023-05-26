import express from "express"
import cors from "cors"
import dotenv from "dotenv"
// Route imports
import postsRoute from "./routes/postsRoute.js"
import authRoute from "./routes/authRoute.js"
import usersRoute from "./routes/usersRoute.js"

//initialize
dotenv.config()
const port = process.env.PORT || 5000
const app = express()

//middleware
app.use(express.json())
app.use(cors())

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/posts", postsRoute)

app.listen(port, () => {
  console.log(`Server is already running... port: ${port}`)
})