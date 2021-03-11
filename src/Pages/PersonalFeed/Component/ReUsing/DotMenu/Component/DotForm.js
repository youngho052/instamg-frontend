import React from "react";
import styled from "styled-components";
import DotFormLayout from "./DotFormLayout";

export default function DotForm(props) {
  const { format, onClose, clickModalBtn } = props;

  const combinedAllClick = (e) => {
    if (clickModalBtn) {
      clickModalBtn(e);
    }
    onClose();
  };

  return (
    <DotFormLayout>
      {format.map((text) => {
        return <Btn onClick={combinedAllClick}>{text}</Btn>;
      })}
      <CancelBtn onClick={onClose}>취소</CancelBtn>
    </DotFormLayout>
  );
}

const Btn = styled.button`
  width: 100%;
  height: 48px;
  border-bottom: 1px solid #dbdbdb;
  font-weight: bold;
  font-size: 14px;
  color: rgba(var(--i30, 237, 73, 86), 1);
`;

const CancelBtn = styled.button`
  width: 100%;
  height: 48px;
  font-size: 14px;
`;
