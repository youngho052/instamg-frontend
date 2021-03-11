import React, { useState } from "react";
import styled from "styled-components";

function LikeCount(props) {
  const { content, countLike } = props;

  return (
    <IsLikedWrapper>
      <span>좋아요&nbsp;</span>
      <span>{countLike}</span>
      <span>개</span>
    </IsLikedWrapper>
  );
}

export default LikeCount;

const IsLikedWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 614px;
  height: 18px;
  padding: 0 15px;
  margin-bottom: 8px;

  span {
    font-size: 14px;
    font-weight: 600;
  }
`;
