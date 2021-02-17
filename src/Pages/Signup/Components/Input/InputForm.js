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
  width: 268px;
  height: 38px;
  margin-top: 10px;
  background: #fafafa;
  border: 1px solid #dbdbdb;
  border-radius: 5px;
`;
