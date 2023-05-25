import style from "./Navbar.module.css"
import { Container } from "../../UI";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Container className={style.navHeader}>
      <Link to="/">
        <h1>TechGuy Blog</h1>
      </Link>

      <nav>
        <ul>
          <li>
            <Link to="/write">Write</Link>
          </li>
        </ul>
      </nav>
    </Container>
  );
};

export default Navbar;
