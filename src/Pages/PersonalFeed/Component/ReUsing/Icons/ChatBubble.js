import React from "react";
import styled from "styled-components";
import { Chatbubble } from "@styled-icons/ionicons-outline/Chatbubble";
import { FilledChatbubble } from "@styled-icons/ionicons-solid/Chatbubble";

/**
 *
 * @param {string} loading - 선택 속성: size, WrapStyles, IconStyles
 */

export default function ChatBubble(props) {
  const { size, WrapStyles, IconStyles } = props;

  return (
    <ChatBubbleWrap style={WrapStyles}>
      {/* {isFilled ? (
        <FilledChatbubble size={size ? size : "29px"} />
      ) : (
        <OutlineChatBubble size={size ? size : "29px"} />
      )} */}
      <OutlineChatBubble size={size ? size : "29px"} style={IconStyles} />
    </ChatBubbleWrap>
  );
}

const ChatBubbleWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const OutlineChatBubble = styled(Chatbubble)``;

// const FilledChatBubble = styled(FilledChatbubble)``;
