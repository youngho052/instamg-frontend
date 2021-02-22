import React, { useState, useEffect } from "react";
import styled from "styled-components";

/**
 *
 * @param {string} loading - 감싸는 div 태그에 높이, 너비를 지정해주고 속성으로 today_live(불린), src를 내려줄 것
 */

export default function ProfilePic(props) {
  const { hasTodayLive } = props;
  const basicPicture =
    "https://www.momjobgo.com/test100/wp-content/themes/hello-momjobgo/images/default-profile.jpg";

  return (
    <ProfilePicWrapper hasTodayLive={hasTodayLive}>
      <ProfileImg src={props.src == null ? basicPicture : props.src} />
    </ProfilePicWrapper>
  );
}

const ProfilePicWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border: 3px solid ${(props) => (props.hasTodayLive ? "red" : "white")};
  border-radius: 50%;
`;

const ProfileImg = styled.img`
  width: 93%;
  height: 93%;
  border-radius: 50%;
`;
