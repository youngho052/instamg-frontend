import React from "react";
import styled from "styled-components";
import { numberFormatter } from "../ReUsing/ConversionNumberUnit";

export default function InteractionBundle({ userAllData }) {
  return (
    <InteractionBundleWrapper>
      {LI_LIST.map((listName) => {
        return (
          <Li>
            <ListName>
              {listName}&nbsp;
              <ListFigures>
                {listName == "게시물" &&
                  numberFormatter(userAllData?.post_count, 1)}
                {listName == "팔로워" &&
                  numberFormatter(userAllData?.follower_count, 1)}
                {listName == "팔로우" &&
                  numberFormatter(userAllData?.following_count, 1)}
              </ListFigures>
            </ListName>
          </Li>
        );
      })}
    </InteractionBundleWrapper>
  );
}

const LI_LIST = ["게시물", "팔로워", "팔로우"];

const InteractionBundleWrapper = styled.ul`
  /* border: 1px solid orange; */
  display: flex;
  /* height: 18px; */
  margin-bottom: 20px;
`;

const Li = styled.li`
  margin-right: 40px;
`;

const ListName = styled.span`
  font-size: 16px;
`;

const ListFigures = styled(ListName)`
  font-weight: bold;
`;
