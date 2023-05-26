import bcrypt from "bcryptjs"
import db from "../config/database.js"

export const register = (req, res) => {
  const { email, name} = req.body
  const q = "SELECT * FROM users WHERE email = ? OR name = ?"

  db.query(q, [email, name], (error, data) => {
    if(error) return res.json(error)
    if(data.length) return res.status(409).json("User already exists!")

    const salt = bcrypt.genSaltSync(10)
    const password = bcrypt.hashSync(req.body.password, salt)

    const q = "INSERT INTO users(`name`, `email`, `password`) VALUES (?)"
    const values = [name, email, password];

    db.query(q, [values], (error, data) => {
      if (error) return res.json(error)
      
      return res.status(200).json("User has been created")
    })
  })
}

export const login = (req, res) => {

}

export const logout = (req, res) => {

}