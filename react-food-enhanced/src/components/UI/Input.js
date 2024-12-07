import React, { useImperativeHandle, useRef } from "react";
import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  const inputRef = useRef();

  useImperativeHandle(ref, () => {
    return {
      value: inputRef.current
    }
  })

  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input 
        ref={inputRef}
        id={props.input.id}
        type={props.input.type}
        min={props.input.min}
        max={props.input.max}
        step={props.input.step}
        defaultValue={props.input.defaultValue}
      />
    </div>
  );
});

export default Input;
