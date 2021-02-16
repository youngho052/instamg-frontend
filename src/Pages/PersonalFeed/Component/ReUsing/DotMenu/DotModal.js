import React from "react";
import styled from "styled-components";
import DotForm from "./Component/DotForm";

export default function DotModal(props) {
  const { show, onClose, datatype, clickModalBtn } = props;

  return (
    <DotModalWrapper onClick={onClose} show={show}>
      {/* <DotForm format={datatype === "1" ? datatype1 : datatype2} /> */}
      <DotForm
        format={datatype ? datatype : datatype1}
        onClose={onClose}
        clickModalBtn={clickModalBtn}
      />
    </DotModalWrapper>
  );
}

// datatype
const datatype1 = [
  "신고",
  "팔로우 취소",
  "게시물로 이동",
  "공유 대상...",
  "링크 복사",
  "퍼가기",
];

const datatype2 = ["이 사용자 차단하기", "제한", "사용자 신고"];

// styled Component
const DotModalWrapper = styled.div`
  /* border: 1px solid green; */
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${(props) => (props.show ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  z-index: 2;
`;
