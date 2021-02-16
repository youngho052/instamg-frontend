import React from "react";
import styled from "styled-components";
import { Bookmark } from "@styled-icons/material-sharp/Bookmark";
import { BookmarkBorder } from "@styled-icons/material-sharp/BookmarkBorder";

/**
 *
 * @param {string} loading - 필수속성: isFilled(불린), 선택 속성: size(기본: 33px), Iconstyles, WrapStyles
 */

export default function BookMark(props) {
  const { size, Iconstyles, isFilled, WrapStyles } = props;

  return (
    <BookmarkWrap style={WrapStyles}>
      {isFilled ? (
        <Bookmark
          size={size ? size : "33px"}
          style={Iconstyles}
          isFilled={isFilled}
        />
      ) : (
        <BookmarkBorder
          size={size ? size : "33px"}
          style={Iconstyles}
          isFilled={isFilled}
        />
      )}
    </BookmarkWrap>
  );
}

const BookmarkWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
