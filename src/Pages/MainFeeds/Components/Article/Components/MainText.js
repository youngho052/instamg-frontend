import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import AddComment from "./AddComment";
import ArticleComment from "./ArticleComment";
import CreatedAt from "./CreatedAt";

function MainText(props) {
  const { content, userInfo } = props;
  const history = useHistory();
  const [isMoreContent, setIsMoreContent] = useState(false);
  const [countComment, setCountComment] = useState(content.total_comments);
  const [newComment, setNewComment] = useState([]);
  const [isNewComment, setIsNewComment] = useState(false);

  const handleMoreContent = () => {
    setIsMoreContent(!isMoreContent);
  };

  const getPostCmtMessage = (commentData) => {
    setIsNewComment(true);
    setNewComment(commentData);
    setCountComment(countComment + 1);
  };

  const goToPersonalFeedOnArticle = () => {
    history.push(`/personalFeed/${content.user_id}`);
  };

  return (
    <>
      <MainTextWrapper>
        <div className="text-wrapper">
          <span className="user-name" onClick={goToPersonalFeedOnArticle}>
            {content.user_account}
          </span>
          &nbsp;
          <span className="main-text">
            {content.content?.length >= 120
              ? content.content.substr(0, 120)
              : content.content}
            {content.content?.length < 120 ? null : (
              <>
                {isMoreContent ? (
                  content.content.substr(120, content.content.length)
                ) : (
                  <>
                    <span>...</span>
                    <button
                      onClick={handleMoreContent}
                      type="button"
                      className="more-text"
                    >
                      더 보기
                    </button>
                  </>
                )}
              </>
            )}
          </span>
        </div>
        {content.total_comments === 0 && isNewComment !== true ? null : (
          <>
            <div className="more-comment">
              <button>
                <span>댓글</span>
                <span>{countComment}</span>
                <span>개 모두 보기</span>
              </button>
            </div>
            {content.comments &&
              content.comments
                .sort((a, b) =>
                  a.created_at < b.created_at
                    ? -1
                    : a.created_at > b.created_at
                    ? 1
                    : 0,
                )
                .map((comment, idx) => (
                  <ArticleComment
                    key={idx}
                    comment={comment}
                    userInfo={userInfo}
                  />
                ))}
          </>
        )}
        {isNewComment ? (
          <ArticleComment newComment={newComment} userInfo={userInfo} />
        ) : null}
        <div className="content-time">
          <CreatedAt time={content.created_at} />
        </div>
      </MainTextWrapper>
      <AddComment getPostCmtMessage={getPostCmtMessage} content={content} />
    </>
  );
}

export default MainText;

const MainTextWrapper = styled.div`
  width: 614px;
  padding: 0 15px;

  .text-wrapper {
    margin-bottom: 4px;
  }

  .user-name {
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
  }

  .main-text {
    font-size: 14px;
  }

  .more-text {
    font-size: 14px;
  }

  .more-comment {
    margin-bottom: 4px;

    button {
      font-size: 14px;
      text-decoration: none;
      padding: 0;
      color: #8e8e8e;
    }
  }

  .comment-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .comment-heart {
      font-size: 14px;
    }
  }

  .content-time {
    margin-bottom: 8px;
    font-size: 10px;
    text-decoration: none;
    color: #a3a3a3;
    cursor: pointer;
    margin-top: 6px;
  }
`;
