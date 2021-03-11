import React, { Component } from "react";
import styled from "styled-components";

export default class SuggestedTitle extends Component {
  render() {
    return (
      <SuggestedTitleWrapper>
        <div>회원님을 위한 추천</div>
        <div>모두 보기</div>
      </SuggestedTitleWrapper>
    );
  }
}

const SuggestedTitleWrapper = styled.div`
  display: flex;
  width: inherit;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;

  div:first-child {
    color: #8e8e8e;
    font-size: 14px;
    font-weight: 600;
  }
  div:nth-child(2) {
    color: #262626;
    font-size: 12px;
    font-weight: 600;
  }
`;
