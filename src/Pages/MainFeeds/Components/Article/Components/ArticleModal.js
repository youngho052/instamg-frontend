import React, { useState } from "react";
import styled from "styled-components";
import { DELETE_POSTS, FOLLOW } from "../../../../../Config";

const ArticleModal = (props) => {
  const {
    show,
    onClose,
    header,
    userInfo,
    getFollowStatus,
    isFollowed,
  } = props;

  const deleteArticle = () => {
    fetch(DELETE_POSTS + `/${header.post_id}`, {
      method: "DELETE",
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.message === "SUCCESS")
          return alert("게시물이 삭제되었습니다."), window.location.reload();
      });
  };

  const toggleFollow = () => {
    fetch(FOLLOW + `/${header.user_id}`, {
      method: "POST",
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.message === "SUCCESS") return onClose(), getFollowStatus();
      });
  };

  return show ? (
    <AriticleModalWrapper>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <AriticleModalButton red>신고</AriticleModalButton>
        {userInfo[0].user_id === header.user_id ? null : isFollowed ? (
          <AriticleModalButton red onClick={toggleFollow}>
            팔로우 취소
          </AriticleModalButton>
        ) : (
          <AriticleModalButton red onClick={toggleFollow}>
            팔로우 하기
          </AriticleModalButton>
        )}
        {userInfo[0].user_id === header.user_id ? (
          <>
            <AriticleModalButton>게시물 수정</AriticleModalButton>
            <AriticleModalButton onClick={deleteArticle}>
              게시물 삭제
            </AriticleModalButton>
          </>
        ) : null}
        <AriticleModalButton last onClick={onClose}>
          취소
        </AriticleModalButton>
      </div>
    </AriticleModalWrapper>
  ) : null;
};

export default ArticleModal;

const AriticleModalWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;

  .modal-content {
    width: 400px;
    background-color: #fff;
    border-radius: 12px;
    border: 1px solid #dbdbdb;
  }
`;

const AriticleModalButton = styled.button`
  width: 398px;
  height: 48px;
  border-bottom: ${(props) => props.last || "1px solid #dbdbdb"};
  padding: 0;
  color: ${(props) => props.red && "red"};
  font-weight: 600;
`;
