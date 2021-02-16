import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header/Header";
import CaptionAllComments from "./CaptionAllComments/CaptionAllComments";
import IconInteractionSection from "./IconInteractionSection/IconInteractionSection";
import FiguresOfTotalViewsLikes from "./FiguresOfTotalViewsLikes";
import UserComment from "./UserComment/UserComment";
import { TimeFormat } from "../../../PersonalFeed/Component/ReUsing/TimeFormat";
import { LIKE_ARTICLE } from "../../../../Config";

export default function TextSectionOfModal(props) {
  const { eachModalAllData, currentIdx, hasModalVideoFilter1st } = props;

  const [replyBtnAccountInfo, setReplyBtnAccountInfo] = useState({
    accountName: "",
    accountId: "",
  });
  const [modifyCommentInfo, setModifyCommentInfo] = useState({
    modifyId: "",
    modifyContent: "",
  });
  const [currentTime, setCurrentTime] = useState(new Date());
  const [likestatus, setLikestatus] = useState();
  const [likeCount, setLikeCount] = useState();

  const handleReplyBtn = (accountName, accountId) => {
    setReplyBtnAccountInfo({ accountName, accountId });
  };

  const resetReplyBtnInfo = () => {
    setReplyBtnAccountInfo({
      accountName: "",
      accountId: "",
    });
  };

  setInterval(() => setCurrentTime(new Date()), 1000 * 60);

  useEffect(() => {
    setLikestatus(eachModalAllData?.is_liked);
    setLikeCount(eachModalAllData?.like_count);
  }, [eachModalAllData?.is_liked, eachModalAllData?.like_count]);

  const clickHeart = () => {
    fetch(`${LIKE_ARTICLE}/${eachModalAllData?.post_id}`, {
      method: "POST",
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.message === "LIKE_SUCCESS") {
          setLikestatus(true);
          setLikeCount(likeCount + 1);
        }
        if (res.message === "UNLIKE_SUCCESS") {
          setLikestatus(false);
          setLikeCount(likeCount - 1);
        }
      });
  };

  return (
    <TextSectionOfModalWrapper>
      <HeadCommentCationWrapper>
        <Header eachModalAllData={eachModalAllData} />
        <CaptionAllComments
          eachModalAllData={eachModalAllData}
          handleReplyBtn={handleReplyBtn}
          setModifyCommentInfo={setModifyCommentInfo}
        />
      </HeadCommentCationWrapper>
      <BottomWrapper>
        <IconInteractionSection
          isILiked={likestatus}
          clickHeart={clickHeart}
          isMyFeed={
            eachModalAllData?.account === eachModalAllData?.login_user_account
          }
        />
        <FiguresOfTotalViewsLikes
          hasModalVideoFilter1st={hasModalVideoFilter1st}
          firstFileType={eachModalAllData?.file[0].file_type}
          figuresOfLikes={new Intl.NumberFormat().format(likeCount)}
        />
        <PostingTime>
          {TimeFormat(eachModalAllData?.created_at, currentTime)}
        </PostingTime>
        <UserComment
          replyBtnAccountInfo={replyBtnAccountInfo}
          postId={eachModalAllData?.post_id}
          resetReplyBtnInfo={resetReplyBtnInfo}
          modifyCommentInfo={modifyCommentInfo}
          setModifyCommentInfo={setModifyCommentInfo}
          currentIdx={currentIdx}
        />
      </BottomWrapper>
    </TextSectionOfModalWrapper>
  );
}

const TextSectionOfModalWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 335px;
  height: inherit;
  background-color: white;
`;

const HeadCommentCationWrapper = styled.section``;

const BottomWrapper = styled.section``;

const PostingTime = styled.section`
  padding: 0px 16px;
  font-size: 10px;
  color: rgba(var(--f52, 142, 142, 142), 1);
`;
