import React, { Component } from "react";
import styled from "styled-components";

export default class SuggestedFollowButton extends Component {
  render() {
    return (
      <SuggestedFollowButtonWrapper>
        <button>팔로우</button>
      </SuggestedFollowButtonWrapper>
    );
  }
}

const SuggestedFollowButtonWrapper = styled.div`
  button {
    color: #0095f6;
    font-size: 12px;
    font-weight: 600;
    padding: 0px;
  }
`;
