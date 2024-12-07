import { useReducer } from "react";
import CartContext from "./cart.context";

const INIT_CART_STATE = {
  items: [],
  totalAmount: 0,
};

const ADD_ITEM = "add_item";
const REMOVE_ITEM = "remove_item";

const check = (items, item) => {
  let check = false;
  items.forEach((el) => {
    if (el.id == item.id) {
      check = true;
      return;
    }
  });
  return check;
};

const getIndex = (items, item) => {
  return items.findIndex(el => el.id == item.id)
}

const cartReducer = (state, actions) => {
  switch (actions.type) {
    case ADD_ITEM:
      console.log(state, actions);
      let isContainItem = check(state.items, actions.item);
      let newItems = [];
      if (isContainItem) {
        newItems = [...state.items];
        let index = getIndex(state.items, actions.item)
        newItems[index].amount += actions.item.amount
      } else {
        newItems = state.items.concat([actions.item]);
      }
      return {
        items: newItems,
        totalAmount: state.totalAmount + actions.item.amount * actions.item.price
      };
    case REMOVE_ITEM:
      let index = getIndex(state.items, actions.item) 
      let result = [...state.items]
      result.splice(index, 1)
      return {
        items: result,
        totalAmount: state.totalAmount - actions.item.amount * actions.item.price
      }  
    default:
      return INIT_CART_STATE;
  }
};

const CartProvider = (props) => {
  const [cartState, dispatchCartState] = useReducer(
    cartReducer,
    INIT_CART_STATE
  );

  const addItemHandler = (item) => {
    dispatchCartState({ type: ADD_ITEM, item: item });
  };

  const removeItemHandler = (id) => {
    let item = cartState.items.find(i => i.id == id)
    dispatchCartState({ type: REMOVE_ITEM, item: item });
  };

  return (
    <CartContext.Provider
      value={{
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemHandler,
        removeItem: removeItemHandler,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
