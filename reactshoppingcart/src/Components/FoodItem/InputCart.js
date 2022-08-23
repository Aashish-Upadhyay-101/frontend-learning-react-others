import React from "react";
import Input from "./InputCart.styled";

const InputCart = React.forwardRef((props, ref) => {
  return (
    <Input>
      <label>{props.label}</label>
      <input ref={ref} type={props.type} {...props.input} />
    </Input>
  );
});

export default InputCart;
