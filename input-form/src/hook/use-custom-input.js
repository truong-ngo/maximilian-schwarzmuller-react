import { useReducer } from "react";

const LOST_FOCUS = "lost_focus";
const TYPING = "typing";
const RESET = "reset";

const INPUT_INIT_STATE = {
  enteredValue: "",
  isTouched: false,
};

const inputReducer = (state, action) => {
  switch (action.type) {
    case TYPING:
      return {
        ...state,
        enteredValue: action.value,
      };
    case LOST_FOCUS:
      return {
        ...state,
        isTouched: true,
      };
    default:
      return INPUT_INIT_STATE;
  }
};

const useCustomInput = (validateFn) => {
  const [inputState, dispatchInputState] = useReducer(
    inputReducer,
    INPUT_INIT_STATE
  );

  const valueIsValid = validateFn(inputState.enteredValue);
  const hasError = !valueIsValid && inputState.isTouched;

  const onChange = (value) => {
    dispatchInputState({ type: TYPING, value });
  };

  const onBlur = () => {
    dispatchInputState({ type: LOST_FOCUS, value: null });
  };

  const reset = () => {
    dispatchInputState({ type: RESET, value: null });
  };

  return {
    inputState: {
      enteredValue: inputState.enteredValue,
      valueIsValid,
      isTouched: inputState.isTouched,
      hasError,
    },
    onChange,
    onBlur,
    reset,
  };
};

export default useCustomInput;
