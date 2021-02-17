import React from "react";
import styled from "styled-components";

function ButtonForm(props) {
  const { activateBtn, clicked } = props;
  console.log("ButtonForm test:", activateBtn);

  return <ButtonForms {...props} test={activateBtn} onClick={clicked} />;
}

export default ButtonForm;

export const ButtonForms = styled.button.attrs((props) => ({
  type: props.type === "button",
}))`
  width: 268px;
  height: 32px;
  padding: 5px 9px;
  margin-top: 20px;
  border-radius: 5px;
  font-size: 16px;
  color: #fff;
  background-color: ${(props) =>
    props.test ? "#055cb1" : "rgba(0, 149, 246, 0.3)"};
`;
