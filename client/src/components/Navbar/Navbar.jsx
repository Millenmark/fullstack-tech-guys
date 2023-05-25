import style from "./Navbar.module.css";
import { Button, Container } from "../../UI";
import { Link } from "react-router-dom";
import NameProfile from "../NameProfile/NameProfile";

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
        <NameProfile/>
        <Button>Log out</Button>
      </div>
    </Container>
  );
};

export default Navbar;
