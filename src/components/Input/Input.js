// import { useState } from "react";

//TO DO:  consider moving the label to its own subcomponent - think through whether this is useful

const Input = (props) => {
  // Pull the label out of the properties
  const {label, ...rest} = props;
  return <>
    <label htmlFor={props.id}>{label}</label>
    <input {...rest} />
  </>;
};

export default Input;
