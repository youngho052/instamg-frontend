import React from "react";
import styled from "styled-components";

export default function FiguresOfTotalViewsLikes(props) {
  const { firstFileType, figuresOfLikes, hasModalVideoFilter1st } = props;

  return (
    <FiguresOfTotalViewsLikesWrapper>
      {!hasModalVideoFilter1st
        ? `좋아요 ${figuresOfLikes}개`
        : `조회 ${hasModalVideoFilter1st?.view_count.toLocaleString(
            "ko-KR",
          )}회`}
    </FiguresOfTotalViewsLikesWrapper>
  );
}

const FiguresOfTotalViewsLikesWrapper = styled.section`
  margin-bottom: 4px;
  padding: 0px 16px;
  font-size: 14px;
  font-weight: 600;
`;
