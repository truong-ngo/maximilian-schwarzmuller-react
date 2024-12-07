import { useContext } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import ModalContext from "../../context/modal-context";
import CartContext from "../../context/cart.context";
import CartItem from "./CartItem";

const Cart = () => {
  const modalCtx = useContext(ModalContext);
  const cartCtx = useContext(CartContext);

  const addItemHandler = (id) => {
    let item = cartCtx.items.find(i => i.id == id)
    let itemCopy = {...item, amount: 1}
    cartCtx.addItem(itemCopy)
  }

  const removeItemHandler = (id) => {
    let item = cartCtx.items.find(i => i.id == id)
    if (item.amount > 1) {
      let itemCopy = {...item, amount: -1}
      cartCtx.addItem(itemCopy)
    } else {
      cartCtx.removeItem(id)
    }
  }

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          id={item.id}
          key={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onAdd={addItemHandler.bind(null, item.id)}
          onRemove={removeItemHandler.bind(null, item.id)}
        ></CartItem>
      ))}
    </ul>
  );

  return (
    <Modal hiden={!modalCtx.modalInitState} onClick={modalCtx.onCloseModal}>
      {cartItems}
      <div className={classes.total}>
        <span>Total</span>
        <span>{cartCtx.totalAmount.toFixed(2).toString()}</span>
      </div>
      <div className={classes.actions}>
        <button
          className={classes["button--alt"]}
          onClick={modalCtx.onCloseModal}
        >
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
