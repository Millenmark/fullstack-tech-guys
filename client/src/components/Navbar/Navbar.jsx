import style from "./Navbar.module.css";
import { Button, Container } from "../../UI";
import { Link } from "react-router-dom";

const Navbar = () => {
  const categories = ["science", "ai", "tech", "computers", "gaming"];

  return (
    <Container className={style.navHeader}>
      <Link to="/">
        <h1>TechGuy Blog</h1>
      </Link>

      <nav className={style.nav}>
        <ul>
          {categories.map((cat, index) => (
            <li key={index}>
              <Link to={`/?cat=${cat}`}>
                <h5>{cat}</h5>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className={style.profile}>
        <div>
          <input type="checkbox" name="profile" id="profile" />
          <label htmlFor="profile">John</label>
          <div>
            <Link to="/profile">Profile</Link>
            <Link to="/write">Write a Blog</Link>
          </div>
        </div>
        <Button>Log out</Button>
      </div>
    </Container>
  );
};

export default Navbar;
