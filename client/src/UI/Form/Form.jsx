/* eslint-disable react/prop-types */
import style from "./Form.module.css";

const Form = ({ children, className, onSubmit }) => {
  return (
    <form className={`${style.form} ${className}`} onSubmit={onSubmit}>
      {children}
    </form>
  );
};

export default Form;
