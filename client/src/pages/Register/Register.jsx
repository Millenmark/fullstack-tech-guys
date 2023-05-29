import "./Register.module.css";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button } from "../../UI";
import { useState } from "react";
import axios from "axios";

const Register = () => {
  const [inputs, setInputs] = useState({
    name: "",
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
      await axios.post("http://localhost:5000/api/auth/register", inputs);
      navigate("/");
    } catch (error) {
      setError(error?.response?.data);
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
            required
          />
        </div>
        <Button type="submit">Register</Button>
        {error && <p>{error}</p>}
        <p>
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </Form>
    </>
  );
};

export default Register;
