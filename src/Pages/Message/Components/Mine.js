import React, { useState } from "react";
import styled from "styled-components";
import Modal from "./Modal/Modal";

function Mine(props) {
  const { userNames, sendUserInfo } = props;
  const [show, setShow] = useState(false);

  return (
    <Mines>
      <select name="" id="">
        <option value="">{userNames}</option>
      </select>
      <IconBox onClick={() => setShow(true)}>
        <i className="icon far fa-edit" />
      </IconBox>
      <Modal
        onClose={() => setShow(false)}
        show={show}
        sendUserInfo={sendUserInfo}
      />
    </Mines>
  );
}

export default Mine;

const Mines = styled.div`
  display: flex;
  width: 349px;
  height: 60px;
  padding: 0 20px;
  border-bottom: 1px solid #c7c7c7;
  border-right: 1px solid #c7c7c7;

  select {
    display: flex;
    align-items: center;
    margin: 20px auto;
    font-size: 16px;
    border: none;
    outline: none;
  }
`;

const IconBox = styled.div`
  .icon {
    font-size: 24px;
    margin-top: 15px;
    cursor: pointer;
  }
`;
