import React, { useState } from "react";
import styled from "styled-components";
import { COMMENT_POST } from "../../../../../Config";

function AddComment(props) {
  const { content, getPostCmtMessage } = props;
  const [isComment, setIsComment] = useState("");
  const commentLength = isComment?.length;

  const handleCommentBtn = (e) => {
    setIsComment(e.target.value);
  };

  const postMainFeedComment = () => {
    fetch(COMMENT_POST + `/${content.post_id}`, {
      method: "POST",
      headers: {
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify({
        content: isComment,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        getPostCmtMessage(res.comment_data);
      });
    setIsComment("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      postMainFeedComment();
    }
  };
  return (
    <AddCommentWrapper>
      <button className="toggle-emoji-button">
        <i className="far fa-smile"></i>
      </button>
      <input
        value={isComment}
        type="text"
        onKeyPress={(e) => handleKeyPress(e)}
        onChange={(e) => handleCommentBtn(e)}
        placeholder="댓글 달기..."
      />
      <button
        disabled={commentLength === 0 ? true : false}
        className={`${
          commentLength > 0 ? "btncolorblue" : "comment-submit-button"
        }`}
        type="submit"
        onClick={postMainFeedComment}
      >
        게시
      </button>
    </AddCommentWrapper>
  );
}

export default AddComment;

const AddCommentWrapper = styled.form`
  display: flex;
  align-items: center;
  width: 614px;
  min-height: 56px;
  max-height: 81px;
  padding: 0 15px;
  border-top: 1px solid #dbdbdb;

  .toggle-emoji-button {
    padding: 8px 14px 8px 0;
    font-size: 24px;
  }
  input {
    display: flex;
    min-height: 56px;
    width: 514px;
    max-height: 80px;

    &::placeholder {
      font-size: 14px;
    }
  }
  .comment-submit-button {
    opacity: 0.5;
    padding: 0;
    color: #c5e7fd;
    font-weight: 600;

    &:disabled {
      cursor: default;
    }
  }

  .btncolorblue {
    padding: 0;
    color: #0f9bf7;
    font-weight: 600;
  }
`;
