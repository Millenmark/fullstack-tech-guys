/* eslint-disable react/no-unescaped-entities */
import "./Login.module.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Button, Form } from "../../UI";

const Login = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/auth/login", inputs);
      navigate("/");
    } catch (error) {
      setError(error?.response?.data);
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" onChange={handleChange} required/>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" onChange={handleChange} required/>
        </div>
        <Button type="submit">Log in</Button>
        {
          error && <p>{error}</p>
        }
        <p>
          Don't have an account yet? <Link to="/register">Register here</Link>
        </p>
      </Form>
    </>
  );
};

export default Login;
