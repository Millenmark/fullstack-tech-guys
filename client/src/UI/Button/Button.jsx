/* eslint-disable react/prop-types */
import style from "./Button.module.css";

const Button = ({ children, type, onClick, className }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${style.button} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
