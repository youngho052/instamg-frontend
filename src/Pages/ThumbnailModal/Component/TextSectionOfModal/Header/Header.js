import React from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import ProfilePic from "../../../../PersonalFeed/Component/ReUsing/ProfilePic/ProfilePic";
import BundleOfDotBtnModal from "../../../../PersonalFeed/Component/ReUsing/DotMenu/BundleOfDotBtnModal";
import { DELETE_POSTS } from "../../../../../Config";

export default function Header(props) {
  const { eachModalAllData } = props;
  const history = useHistory();

  const otherModalData = [
    "신고",
    "팔로우 취소",
    "게시물로 이동",
    "공유 대상...",
    "링크 복사",
    "퍼가기",
  ];

  const OwnderModalData = ["게시물 수정", "게시물 삭제"];

  const clickModalBtn = async (e) => {
    if (e.currentTarget.textContent === "게시물 삭제") {
      await axios
        .delete(`${DELETE_POSTS}/${eachModalAllData?.post_id}`, {
          headers: { Authorization: localStorage.getItem("token") },
        })
        .then(() => {
          window.location.reload();
        });
    }
    if (e.currentTarget.textContent === "게시물 수정") {
      history.push({
        pathname: `/uploadPosts`,
        state: {
          user_id: eachModalAllData?.user_id,
          content: eachModalAllData?.content,
          file: eachModalAllData?.file,
        },
      });
    }
  };

  return (
    <HeaderWrapper>
      <ProfilePic
        src={eachModalAllData?.profile_photo}
        hasTodayLive={eachModalAllData?.today_live}
        WrapDivstyles={{ width: "42px", height: "42px" }}
      />
      <ContentsExceptPic>
        <AccountId>{eachModalAllData?.account}</AccountId>
        <BundleOfDotBtnModal
          datatype={
            eachModalAllData?.account === eachModalAllData?.login_user_account
              ? OwnderModalData
              : otherModalData
          }
          clickModalBtn={clickModalBtn}
        />
      </ContentsExceptPic>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  height: 72px;
  padding: 16px;
  border-bottom: 1px solid rgba(var(--ce3, 239, 239, 239), 1);
`;

const ContentsExceptPic = styled.section`
  /* border: 1px solid purple; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 256px;
  margin-left: 14px;
`;

const AccountId = styled.span`
  font-size: 14px;
  font-weight: 600;
`;
