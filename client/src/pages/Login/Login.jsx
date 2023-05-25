/* eslint-disable react/no-unescaped-entities */
import style from "./Login.module.css";
import { Link } from "react-router-dom";
import { Button, Form } from "../../UI";

const Login = () => {
  return (
    <>
      <Form>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" required/>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" required/>
        </div>
        <Button type="submit">Log in</Button>
        <p>
          Don't have an account yet? <Link to="/register">Register here</Link>
        </p>
      </Form>
    </>
  );
};

export default Login;
