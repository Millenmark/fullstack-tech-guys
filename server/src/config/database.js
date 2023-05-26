import mysql from "mysql2";

const connectToDatabase = () => {
  const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: process.env.MYSQL_PASSWORD,
    database: "techguys",
  });

  console.log("Connected to MySQL Database");

  return db;
};

export default connectToDatabase;
