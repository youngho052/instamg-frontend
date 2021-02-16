import React from "react";
import styled from "styled-components";

function SearchBox() {
  return (
    <SearchBoxs>
      <input type="text" placeholder="검색" />
    </SearchBoxs>
  );
}

export default SearchBox;

const SearchBoxs = styled.div`
  margin-left: 80px;

  input {
    width: 215px;
    height: 28px;
    padding: 7px;
    border-radius: 3px;
    background: #fafafa;
    border: 1px solid gray;
    outline: 0;
  }
`;
