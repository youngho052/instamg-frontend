import React from "react";
import styled from "styled-components";

export default function DotFormLayout(props) {
  return (
    <DotFormLayoutWrapper onClick={(e) => e.stopPropagation()}>
      {props.children}
    </DotFormLayoutWrapper>
  );
}

const DotFormLayoutWrapper = styled.aside`
  width: 400px;
  background-color: white;
  border-radius: 12px;
  overflow: hidden;
`;
