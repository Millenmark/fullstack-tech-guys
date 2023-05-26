import mysql from "mysql2";
import dotenv from "dotenv"

dotenv.config()

const connectToDatabase = () => {
  const db = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: "root",
    password: process.env.MYSQL_PASSWORD,
    database: "techguys",
  });

  console.log("Connected to MySQL Database");

  return db;
};

const db = connectToDatabase()

export default db;
