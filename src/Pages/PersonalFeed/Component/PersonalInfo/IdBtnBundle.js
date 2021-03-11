import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { Icon } from "react-icons-kit";
import { user } from "react-icons-kit/fa/user";
import { arrows_check } from "react-icons-kit/linea/arrows_check";
import { FOLLOW } from "../../../../Config";
import BundleOfDotBtnModal from "../ReUsing/DotMenu/BundleOfDotBtnModal";

export default function IdBtnBundle({ userAllData }) {
  const history = useHistory();

  const handleMsgBtn = () => {
    history.push(userAllData?.is_myprofile ? `/myprofile` : `/message`);
  };

  const handleFlwBtn = () => {
    if (!userAllData?.is_myprofile) {
      fetch(`${FOLLOW}/${userAllData.id}`, {
        method: "POST",
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.message === "SUCCESS") {
            window.location.reload();
          }
        });
    }

    if (userAllData?.is_myprofile) {
      history.push({
        pathname: "/uploadPosts",
        state: { user_id: userAllData?.id },
      });
    }
  };

  return (
    <IdBtnBundleWrapper>
      <FeedOwnerName>{userAllData?.account}</FeedOwnerName>
      <DmBtn
        followStatus={userAllData?.is_following || userAllData?.is_myprofile}
        onClick={handleMsgBtn}
      >
        {userAllData?.is_myprofile ? "프로필 편집" : "메세지 보내기"}
      </DmBtn>
      <FollowBtn
        isMine={userAllData?.is_myprofile}
        followStatus={userAllData?.is_following}
        onClick={handleFlwBtn}
      >
        {userAllData?.is_myprofile ? (
          "게시물 등록"
        ) : userAllData?.is_following ? (
          <>
            <Icon icon={user} size={15} />
            <Icon icon={arrows_check} size={15} />
          </>
        ) : (
          "팔로우"
        )}
      </FollowBtn>
      {/* <BundleOfDotBtnModal datatype={"2"} /> */}
    </IdBtnBundleWrapper>
  );
}

const IdBtnBundleWrapper = styled.section`
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const FeedOwnerName = styled.span`
  /* border: 1px solid black; */
  margin-right: 20px;
  font-size: 28px;
`;

const DmBtn = styled.button`
  /* display: inline; */
  display: ${(props) => (props.followStatus ? "inline" : "none")};
  height: 30px;
  margin-right: 8px;
  padding: 5px 9px;
  border: 1px solid rgba(var(--ca6, 219, 219, 219), 1);
  border-radius: 4px;
  color: rgba(var(--f75, 38, 38, 38), 1);
  font-size: 14px;
  font-weight: bold;
`;

const FollowBtn = styled(DmBtn)`
  /* display: ${(props) => (props.show ? "none" : "flex")}; */
  display: flex;
  align-items: center;
  margin-right: 16px;
  padding: 0px 24px;
  ${(props) =>
    !props.followStatus &&
    !props.isMine &&
    "background-color: rgba(var(--d69,0,149,246),1); border-color: rgba(var(--d69,0,149,246),1); color: rgba(var(--eca,255,255,255),1);"};
`;
