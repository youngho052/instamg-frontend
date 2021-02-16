import React, { useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import LikedIcon from "../Icons/LikedIcon";
import ProfilePic from "../ProfilePic/ProfilePic";
import { TimeFormat } from "../TimeFormat";
import BundleOfDotBtnModal from "../DotMenu/BundleOfDotBtnModal";
import { DELETE_COMMENT } from "../../../../../Config";

/**
 *
 *@param {string} loading - isComment(불린), data(키 명 일치해야 함), widthTextWrap(기본: 215px), handleReplyBtn('답글달기'버튼 온클릭 메소드), loginAccount
 */

export default function CommentCaption(props) {
  const [currentTime, setCurrentTime] = useState(new Date());
  const history = useHistory();

  const {
    isComment,
    data,
    widthTextWrap,
    handleReplyBtn,
    clickHeart,
    loginAccount,
    setModifyCommentInfo,
  } = props;

  const dotBtnDivStyles = {
    padding: "5px",
    opacity: "0.7",
    "background-color": "white",
  };

  const ProfileDivStyles = {
    width: "42px",
    height: "42px",
    marginRight: "12px",
  };

  const dotBtnContent =
    loginAccount === data?.account ? ["수정", "삭제"] : ["신고"];

  const clickModalBtn = (e) => {
    if (e.currentTarget.textContent === "삭제") {
      fetch(
        `${DELETE_COMMENT}/${
          data?.recomment_id ? data?.recomment_id : data?.comment_id
        }`,
        {
          method: "POST",
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        },
      );
    }

    if (e.currentTarget.textContent === "수정") {
      setModifyCommentInfo({
        modifyId: data?.recomment_id ? data?.recomment_id : data?.comment_id,
        modifyContent: data?.content,
      });
    }
  };

  const handleAccount = () => {
    history.push(`/personalFeed/${data?.user_id}`);
  };

  const updateTime = () => {
    setCurrentTime(new Date());
  };

  setInterval(updateTime, 1000 * 60);

  return (
    <CommentCaptionWrapper show={data?.content} isComment={isComment}>
      <ProfilePic
        src={data?.profile_photo}
        hasTodayLive={isComment ? null : data?.today_live}
        WrapDivstyles={ProfileDivStyles}
      />
      <TextWrapper style={widthTextWrap}>
        <Content>
          <AccountId onClick={handleAccount}>{data?.account}</AccountId>
          {data?.content}
        </Content>
        <Bundle isComment={isComment}>
          <PostTime>{TimeFormat(data?.created_at, currentTime)}</PostTime>
          {isComment && (
            <LikeCount>
              좋아요 {data?.like_count.toLocaleString("ko-KR")}개
            </LikeCount>
          )}
          {isComment && (
            <ReplyBtn
              onClick={() => handleReplyBtn(data?.account, data?.comment_id)}
            >
              답글 달기
            </ReplyBtn>
          )}
        </Bundle>
      </TextWrapper>
      <IconWrapper show={isComment}>
        <BundleOfDotBtnModal
          datatype={dotBtnContent}
          dotBtnDivStyles={dotBtnDivStyles}
          clickModalBtn={clickModalBtn}
        />
        <LikedIcon
          isFilled={data?.is_liked}
          size={"12px"}
          styles={{ "margin-top": "9px" }}
          clickHeart={clickHeart}
        />
      </IconWrapper>
    </CommentCaptionWrapper>
  );
}

const CommentCaptionWrapper = styled.section`
  position: relative;
  /* border: 1px solid purple; */
  display: ${(props) => (props.show ? "flex" : "none")};
  padding: 12px 16px ${(props) => (props.isComment ? "0px" : "16px")};
`;

const TextWrapper = styled.div`
  /* border: 1px solid black; */
  width: 215px;
`;

const IconWrapper = styled.div`
  display: ${(props) => (props.show ? "flex" : "none")};
  position: absolute;
  right: 16px;
`;

const AccountId = styled.span`
  margin-right: 4px;
  font-weight: 600;
  cursor: pointer;
`;

const Content = styled.div`
  font-size: 14px;
  overflow: hidden;
  word-wrap: break-word;
`;

const ContentTextarea = styled.textarea``;

const Bundle = styled.div`
  margin: ${(props) => (props.isComment ? "-2px 0 -3px" : "16px 0px -2px")};
`;

const LikeCount = styled.button`
  margin-right: 12px;
  padding: 0px;
  font-size: 12px;
  color: rgba(var(--f52, 142, 142, 142), 1);
`;

const PostTime = styled(LikeCount.withComponent("span"))``;

const ReplyBtn = styled(LikeCount)``;
