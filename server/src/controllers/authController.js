import bcrypt from "bcryptjs";
import db from "../config/database.js";
import jwt from "jsonwebtoken";

export const register = (req, res) => {
  const { email, name } = req.body;
  const q = "SELECT * FROM users WHERE email = ? OR name = ?";

  db.query(q, [email, name], (error, data) => {
    if (error) return res.json(error);
    if (data.length) return res.status(409).json("User already exists!");

    const salt = bcrypt.genSaltSync(10);
    const password = bcrypt.hashSync(req.body.password, salt);

    const q = "INSERT INTO users(`name`, `email`, `password`) VALUES (?)";
    const values = [name, email, password];

    db.query(q, [values], (error, data) => {
      if (error) return res.json(error);
      return res.status(200).json("User has been created");
    });
  });
};

export const login = (req, res) => {
  const { email } = req.body;
  const q = "SELECT * FROM users WHERE email = ?";

  db.query(q, [email], (error, data) => {
    if (error) return res.json(error);
    if (data.length === 0)
      return res.status(400).json("Wrong email or password");

    const isPasswordCorrect = bcrypt.compareSync(
      req.body.password,
      data[0].password
    );

    if (!isPasswordCorrect) {
      res.status(400).json("Wrong email or password");
    } else {
      const id = data[0].user_id;

      const token = jwt.sign({ id }, "jwtkeyrandom");

      const { password, ...other } = data[0];

      res
        .cookie("access_token", token, {
          httpOnly: true,
        })
        .status(200)
        .json(other);
    }
  });
};

export const logout = (req, res) => {};
