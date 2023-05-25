import style from "./Register.module.css";
import { Link } from "react-router-dom";
import { Form, Button } from "../../UI";

const Register = () => {
  return (
    <>
      <Form>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" required/>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" required/>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" required/>
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
