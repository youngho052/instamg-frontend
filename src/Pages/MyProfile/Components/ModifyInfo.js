import React from "react";
import styled from "styled-components";
import { MODIFY_DATA } from "../Components/Data/ModifyData";

function ModifyInfo(props) {
  return (
    <ModifyInfos>
      {MODIFY_DATA.map((item, index) => {
        return <InfoContainer key={index}>{item.content}</InfoContainer>;
      })}
    </ModifyInfos>
  );
}

export default ModifyInfo;

const ModifyInfos = styled.div`
  width: 237px;
  height: 811px;
  border-right: 1px solid #c7c7c7;
`;

const InfoContainer = styled.div`
  width: 236px;
  height: 52px;
  padding: 16px 16px 16px 30px;
  font-size: 16px;

  &:hover {
    background-color: #fafafa;
    border-left: 1px solid #000;
  }
`;
