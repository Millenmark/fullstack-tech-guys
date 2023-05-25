import style from "./NameProfile.module.css"
import { Link } from "react-router-dom";

const NameProfile = () => {
  return (
    <div className={style.profile}>
      <input type="checkbox" name="profile" id="profile" />
      <label htmlFor="profile">John</label>
      <div>
        <Link to="/profile">Profile</Link>
        <Link to="/write">Write a Blog</Link>
      </div>
    </div>
  );
};

export default NameProfile;
