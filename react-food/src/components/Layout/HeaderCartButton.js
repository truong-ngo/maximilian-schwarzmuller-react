import { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import ModalContext from "../../context/modal-context";
import CartContext from "../../context/cart.context";

const HeaderCartButton = (props) => {
  const modalCtx = useContext(ModalContext);
  const cartCtx = useContext(CartContext);

  const [isButtonHighlighted, setIsButtonHighlighted] = useState(false);

  const numberOfCardItem = cartCtx.items.reduce((currentNum, item) => {
    return currentNum + item.amount;
  }, 0);

  const { items } = cartCtx;

  const btnClasses = `${classes.button} ${
    isButtonHighlighted ? classes.bump : ""
  }`;

  useEffect(() => {
    if (items.length == 0) {
      return;
    }
    setIsButtonHighlighted(true);
    const timer = setTimeout(() => {
      setIsButtonHighlighted(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={modalCtx.onOpenModal}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCardItem}</span>
    </button>
  );
};

export default HeaderCartButton;
