import React, { useState } from "react";
import styled from "styled-components";
import Modal from "../Components/Modal/Modal";

function MessageBox(props) {
  const { sendUserInfo } = props;
  const [show, setShow] = useState(false);

  return (
    <MessageBoxs>
      <IconBox>
        <i className="icon far fa-paper-plane" />
      </IconBox>
      <P>내 메시지</P>
      <Span>친구나 그룹에 비공개 사진과 메시지를 보내보세요.</Span>
      <Button onClick={() => setShow(true)}>메시지 보내기</Button>
      <Modal
        onClose={() => setShow(false)}
        show={show}
        sendUserInfo={sendUserInfo}
      />
    </MessageBoxs>
  );
}

export default MessageBox;

const MessageBoxs = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 650px;
  height: 841px;
`;

const IconBox = styled.div`
  width: 96px;
  height: 96px;
  border-radius: 50%;
  border: 1px solid #000;

  .icon {
    margin: 20px 18px;
    font-size: 53px;
  }
`;

const P = styled.p`
  margin-top: 15px;
  font-size: 22px;
  color: #262626;
`;

const Span = styled.span`
  margin-top: 10px;
  font-size: 14px;
  color: #262626;
  font-weight: bold;
`;

const Button = styled.button`
  width: 107px;
  height: 30px;
  margin-top: 15px;
  background-color: #0095f6;
  border-radius: 5px;
  color: #fff;
`;
