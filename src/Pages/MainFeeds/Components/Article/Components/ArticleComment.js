import React, { useState } from "react";
import styled from "styled-components";
import { FaHeart } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { TiDeleteOutline } from "react-icons/ti";
import { HiPencil } from "react-icons/hi";
import { AiOutlineEnter } from "react-icons/ai";
import {
  COMMENT_POST,
  LIKE_COMMENT,
  DELETE_COMMENT,
} from "../../../../../Config";

function ArticleComment(props) {
  const { newComment, comment, userInfo } = props;
  const [isCmtHeartClicked, setIsCmtHeartClicked] = useState(comment?.is_liked);
  const [toggleEdit, setToggleEdit] = useState(false);
  const [editComment, setEditComment] = useState(false);
  const [isUpdatedComment, setIsUpdatedComment] = useState("");
  const [isEditedComment, setIsEditedComment] = useState(comment?.comment);
  const commentNum = comment?.comment_id || newComment?.comment_id;
  const postNum = comment?.post_id || newComment?.post_id;
  const userAccount = userInfo?.[0].user_account;
  const commentUserAccount = comment?.comment_user_account;

  const likeComment = () => {
    setIsCmtHeartClicked(!isCmtHeartClicked);
    fetch(LIKE_COMMENT + `/${commentNum}`, {
      method: "POST",
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((res) => res);
  };

  const updateComment = () => {
    fetch(COMMENT_POST + `/${postNum}` + `/${commentNum}`, {
      method: "POST",
      headers: {
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify({
        content: isEditedComment,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.message === "SUCCESS")
          return setEditComment(true), setIsUpdatedComment(isEditedComment);
      });
  };

  const deleteComment = () => {
    fetch(DELETE_COMMENT + `/${commentNum}`, {
      method: "POST",
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.message === "SUCCESS")
          return alert("댓글이 삭제되었습니다."), window.location.reload();
      });
  };

  const toggleEditBtn = () => {
    setToggleEdit(!toggleEdit);
    setIsEditedComment(comment?.content || newComment?.comment_content);
  };

  const handleEditComment = (e) => {
    setIsEditedComment(e.target.value);
    setIsUpdatedComment(e.target.value);
  };

  return (
    <ArticleCommentWrapper>
      <div className="comment-wrapper">
        <div>
          <span className="user-name">
            {comment?.comment_user_account || newComment?.user_account}
          </span>
          &nbsp;
          <span className="main-text">
            {toggleEdit ? (
              <input
                className="edit-comment-input"
                type="text"
                value={editComment ? isUpdatedComment : isEditedComment}
                onChange={(e) => handleEditComment(e)}
              />
            ) : editComment ? (
              isUpdatedComment
            ) : (
              comment?.content || newComment?.comment_content
            )}
          </span>
        </div>
        <div className="comment-buttons">
          <span className="comment-revise" onClick={toggleEditBtn}>
            {toggleEdit ? (
              <AiOutlineEnter onClick={updateComment} />
            ) : commentUserAccount === userAccount ||
              userAccount === newComment?.user_account ? (
              <HiPencil />
            ) : null}
          </span>
          <span className="comment-delete" onClick={deleteComment}>
            {commentUserAccount === userAccount ||
            userAccount === newComment?.user_account ? (
              <TiDeleteOutline />
            ) : null}
          </span>
          <span className="comment-heart" onClick={likeComment}>
            {isCmtHeartClicked ? <FaHeart color="red" /> : <FiHeart />}
          </span>
        </div>
      </div>
    </ArticleCommentWrapper>
  );
}

export default ArticleComment;

const ArticleCommentWrapper = styled.div`
  .comment-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .user-name {
      cursor: pointer;
    }

    .edit-comment-input {
      width: 470px;
      border: 1px solid #dbdbdb;
    }

    .comment-buttons {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .comment-heart {
      font-size: 14px;
      cursor: pointer;
    }

    .comment-delete {
      font-size: 14px;
      margin: 0 4px;
      cursor: pointer;
    }

    .comment-revise {
      font-size: 14px;
      cursor: pointer;
    }
  }
`;
