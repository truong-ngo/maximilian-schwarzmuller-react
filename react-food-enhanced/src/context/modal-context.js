import React, { useReducer } from "react";

const MODAL_CLOSE = "close_modal";
const MODAL_OPEN = "open_modal";
const MODAL_INIT_STATE = false;

const ModalContext = React.createContext({
  modalInitState: MODAL_INIT_STATE,
  onOpenModal: () => {},
  onCloseModal: () => {},
});

const modalReducer = (state, actions) => {
  if (actions == MODAL_CLOSE) {
    return false;
  } else if (actions == MODAL_OPEN) {
    return true;
  }
  return false;
};

export const ModalContextProvider = (props) => {
  const [modalState, dispatchModalState] = useReducer(
    modalReducer,
    MODAL_INIT_STATE
  );

  const openModalHandler = () => {
    dispatchModalState(MODAL_OPEN);
  };

  const closeModalHandler = () => {
    dispatchModalState(MODAL_CLOSE);
  };

  return (
    <ModalContext.Provider
      value={{
        modalInitState: modalState,
        onCloseModal: closeModalHandler,
        onOpenModal: openModalHandler,
      }}
    >
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalContext;
