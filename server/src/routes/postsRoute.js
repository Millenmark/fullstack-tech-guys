import { Router } from "express";

const postsRoute = Router()

postsRoute.get("/", (req, res) => {
  res.send("This is post route")
})

export default postsRoute