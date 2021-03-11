import React, { useState } from "react";
import styled from "styled-components";
import { FaHeart } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import LikeCount from "./LikeCount";
import { LIKE_ARTICLE } from "../../../../../Config";

function ButtonSection(props) {
  const { content } = props;
  const [isClicked, setIsClicked] = useState(content.is_liked);
  const [countLike, setCountLike] = useState(content.like_count);

  const handleArticleLiked = () => {
    setIsClicked(!isClicked);
    const articleNum = content.post_id;
    fetch(LIKE_ARTICLE + `/${articleNum}`, {
      method: "POST",
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.message === "LIKE_SUCCESS") return setCountLike(countLike + 1);
        if (res.message === "UNLIKE_SUCCESS")
          return setCountLike(countLike - 1);
      });
  };

  return (
    <>
      <ButtonSectionWrapper>
        <span className="heart" onClick={handleArticleLiked}>
          {isClicked ? <FaHeart color="red" /> : <FiHeart />}
        </span>
        <span>
          <i className="far fa-comment" />
        </span>
        <span>
          <i className="far fa-paper-plane" />
        </span>
        <span>
          <i className="far fa-bookmark" />
        </span>
      </ButtonSectionWrapper>
      <LikeCount content={content} countLike={countLike} />
    </>
  );
}

export default ButtonSection;

const ButtonSectionWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 614px;
  height: 40px;
  margin-top: 4px;

  span {
    display: flex;
    align-items: center;
    font-size: 25px;
    padding-left: 15px;

    .fa-bookmark {
      position: absolute;
      right: 15px;
    }
  }
`;
