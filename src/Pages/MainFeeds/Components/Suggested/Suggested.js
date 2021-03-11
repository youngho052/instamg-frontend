import React, { Component } from "react";
import styled from "styled-components";
import SuggestedTitle from "./Components/SuggestedTitle";
import SuggestedWrapper from "./Components/SuggestedWrapper";

export default class Suggested extends Component {
  render() {
    return (
      <SuggestedSection>
        <SuggestedTitle />
        <div className="suggested-wrapper">
          <SuggestedWrapper />
        </div>
      </SuggestedSection>
    );
  }
}

const SuggestedSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 293px;
  margin-bottom: 20px;

  .suggested-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
