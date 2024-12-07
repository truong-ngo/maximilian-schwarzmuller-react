import React from "react";
import classes from "./Header.module.css";
import img from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton>Add to cart</HeaderCartButton>
      </header>
      <div className={classes["main-image"]}>
        <img src={img} />
      </div>
    </React.Fragment>
  );
};

export default Header;
