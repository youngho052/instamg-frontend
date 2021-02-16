import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CommentCaption from "../../../../../PersonalFeed/Component/ReUsing/CommentCaption/CommentCaption";

export default function Recomments(props) {
  const [showRecommentIdx, setShowRecommentIdx] = useState(3);
  const [filteredDatas, setFilteredDatas] = useState([]);

  const {
    eachComment,
    handleReplyBtn,
    clickHeart,
    loginAccount,
    setModifyCommentInfo,
  } = props;
  const unShowedCounts = eachComment.recomment.length - showRecommentIdx + 3;

  const handleShowBtn = (datas) => {
    setShowRecommentIdx(showRecommentIdx + 3);

    const filteringDatas = datas.filter((data, idx) => {
      return idx < showRecommentIdx;
    });

    setFilteredDatas(filteringDatas);

    if (unShowedCounts <= 0) {
      setShowRecommentIdx(3);
      setFilteredDatas([]);
      return;
    }
  };

  return (
    <RecommentsBtnWrapper>
      <RecommentsShowBtn onClick={() => handleShowBtn(eachComment?.recomment)}>
        {unShowedCounts > 0 && `답글 보기 ${unShowedCounts}개`}
        {unShowedCounts <= 0 && `답글 숨기기`}
      </RecommentsShowBtn>
      <RecommentsWrapper>
        {filteredDatas.map((eachrecomment) => {
          return (
            <CommentCaption
              data={eachrecomment}
              isComment={true}
              widthTextWrap={{ width: "157px" }}
              handleReplyBtn={handleReplyBtn}
              clickHeart={() => clickHeart(eachrecomment.recomment_id)}
              loginAccount={loginAccount}
              setModifyCommentInfo={setModifyCommentInfo}
            />
          );
        })}
      </RecommentsWrapper>
    </RecommentsBtnWrapper>
  );
}

const RecommentsBtnWrapper = styled.div`
  /* border: 1px solid red; */
  margin: 16px 0 0 54px;
`;

const RecommentsShowBtn = styled.button``;

const RecommentsWrapper = styled.div`
  /* border: 1px solid pink; */
  display: flex;
  flex-direction: column;
`;
