import React from "react";
import styled from "styled-components";

function InputForm(props) {
  return <InputForms {...props} />;
}

export default InputForm;

export const InputForms = styled.input.attrs((props) => ({
  type: props.type === "text" ? "text" : "password",
}))`
  padding: 8px 12px;
  width: 355px;
  height: 32px;
  border: 1px solid #c7c7c7;
  border-radius: 5px;
`;
