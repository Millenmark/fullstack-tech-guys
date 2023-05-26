import "./Register.module.css";
import { Link } from "react-router-dom";
import { Form, Button } from "../../UI";
import { useState } from "react";
import axios from "axios"

const Register = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: ""
  })

  const handleChange = (e) => {
    setInputs((prev) => {
      return ({...prev, [e.target.name]:e.target.value})
    })
  }

  console.log(inputs)

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/register",
        inputs
      );
      console.log(res)
    } catch (error) {
      console.log(error)
    }

  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" onChange={handleChange} required/>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" onChange={handleChange} required/>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" onChange={handleChange} required/>
        </div>
        <Button type="submit">Register</Button>
        <p>
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </Form>
    </>
  );
};

export default Register;
