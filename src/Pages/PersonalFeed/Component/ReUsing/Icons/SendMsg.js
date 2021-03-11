import React from "react";
import styled from "styled-components";
import { Send } from "@styled-icons/feather/Send";

/**
 *
 * @param {string} loading - 선택 속성: size(기본: 29px), Iconstyle, clickMsgWrap, MsgWrapStyles
 */

export default function SendMsg(props) {
  const { size, Iconstyle, clickMsgWrap, MsgWrapStyles } = props;
  return (
    <MsgWrap style={MsgWrapStyles} onClick={clickMsgWrap}>
      <Send size={size ? size : "29px"} style={Iconstyle} />
    </MsgWrap>
  );
}

const MsgWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
