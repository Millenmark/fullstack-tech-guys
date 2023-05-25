/* eslint-disable react/prop-types */
import style from "./Container.module.css";

const Container = ({ children, className }) => {
  return <div className={`${style.container} ${className}`}>{children}</div>;
};

export default Container;
