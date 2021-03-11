import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import LikedIcon from "../../../../PersonalFeed/Component/ReUsing/Icons/LikedIcon";
import ChatBubble from "../../../../PersonalFeed/Component/ReUsing/Icons/ChatBubble";
import BookMark from "../../../../PersonalFeed/Component/ReUsing/Icons/BookMark";
import SendMsg from "../../../../PersonalFeed/Component/ReUsing/Icons/SendMsg";

export default function IconInteractionSection(props) {
  const { isILiked, clickHeart, isMyFeed } = props;
  const history = useHistory();

  const clickMsg = () => {
    history.push(`/message`);
  };

  const IconStyle = {
    color: "rgb(38, 38, 38)",
  };

  const IconWrapStyles = {
    width: "40px",
    height: "40px",
    cursor: "pointer",
  };

  const BookmarkWrapStyles = {
    width: "40px",
    height: "40px",
    cursor: "pointer",
    marginLeft: "auto",
    marginRight: "-10px",
  };

  return (
    <IconInteractionSectionWrapper>
      <LikedIcon
        size={28}
        isFilled={isILiked}
        clickHeart={clickHeart}
        HeartWrapStyles={IconWrapStyles}
      />
      <ChatBubble
        isFilled={false}
        WrapStyles={IconWrapStyles}
        IconStyles={IconStyle}
      />
      <SendMsg
        clickMsgWrap={clickMsg}
        Iconstyles={isMyFeed ? { display: "none" } : IconStyle}
        MsgWrapStyles={IconWrapStyles}
      />
      <BookMark
        isFilled={false}
        IconStyles={IconStyle}
        WrapStyles={BookmarkWrapStyles}
      />
    </IconInteractionSectionWrapper>
  );
}

const IconInteractionSectionWrapper = styled.section`
  display: flex;
  align-items: center;
  height: 45px;
  margin-top: 4px;
  padding: 0px 16px;
  border-top: 1px solid rgba(var(--ce3, 239, 239, 239), 1);
`;
