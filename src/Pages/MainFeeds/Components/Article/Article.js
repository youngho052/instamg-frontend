import React from "react";
import styled from "styled-components";
import Header from "./Components/Header";
import Pictures from "./Components/Pictures";
import ButtonSection from "./Components/ButtonSection";
import MainText from "./Components/MainText";

function Article(props) {
  const { article, userInfo } = props;

  return (
    <ArticleWrapper>
      <Header header={article} userInfo={userInfo} />
      <Pictures content={article} pictures={article?.file} />
      <Contents>
        <ButtonSection content={article} />
        <MainText content={article} userInfo={userInfo} />
      </Contents>
    </ArticleWrapper>
  );
}

export default Article;

const ArticleWrapper = styled.div`
  width: 614px;
  background-color: white;
  border: 1px solid #dbdbdb;
  margin-bottom: 60px;
  position: relative;
`;

const Contents = styled.div`
  position: relative;
  border-bottom: 1px solid #dbdbdb;
`;
