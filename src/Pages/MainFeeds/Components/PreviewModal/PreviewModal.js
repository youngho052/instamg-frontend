import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { SERVER, FOLLOW } from "../../../../Config";
import profileImg from "../../../../Images/profile.jpg";

function PreviewModal(props) {
  const {
    previewModalInfo,
    previewModalFeed,
    isFollowed,
    header,
    getFollowStatus,
  } = props;
  const preview = useRef();
  const message = useRef();
  const history = useHistory();
  const previewImg =
    previewModalFeed && previewModalFeed.map((img) => img.file[0]).slice(0, 3);
  const previewProfileImg = previewModalInfo?.profile_photo;

  const goToPersonalFeedOnModal = () => {
    history.push(`/personalFeed/${previewModalInfo?.id}`);
  };

  const goToMyProfileOnModal = () => {
    history.push(`/myprofile`);
  };

  const goToDMOnModal = () => {
    history.push(`/message`);
  };

  const followButton = () => {
    fetch(FOLLOW + `/${header.user_id}`, {
      method: "POST",
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.message === "SUCCESS") return getFollowStatus();
      });
  };

  return previewModalInfo === undefined ? null : (
    <PreviewModalWrapper>
      <div className="preview-modal-header">
        <div className="preview-modal-header-pic">
          {previewModalInfo.today_live ? (
            <div className="story-circle">
              <img
                alt={previewModalInfo.account}
                src={
                  previewProfileImg === null
                    ? profileImg
                    : SERVER + "/" + previewProfileImg
                }
              />
            </div>
          ) : (
            <img
              alt={previewModalInfo.account}
              src={
                previewProfileImg === null
                  ? profileImg
                  : SERVER + "/" + previewProfileImg
              }
            />
          )}
        </div>
        <div className="preview-modal-header-info-wrapper">
          <span ref={preview} onClick={goToPersonalFeedOnModal}>
            {previewModalInfo.account}
          </span>
          <span>{previewModalInfo.profile_message}</span>
        </div>
      </div>
      <div className="preview-modal-total-info">
        <div className="preview-modal-total-detail-info">
          <span>게시물</span>
          <span>{previewModalInfo.post_count}개</span>
        </div>
        <div className="preview-modal-total-detail-info">
          <span>팔로워</span>
          <span>{previewModalInfo.follower_count}명</span>
        </div>
        <div className="preview-modal-total-detail-info">
          <span>팔로우</span>
          <span>{previewModalInfo.following_count}명</span>
        </div>
      </div>
      <div className="preview-modal-post-info">
        {previewImg &&
          previewImg.map((img, idx) =>
            img.file_type === "image" ? (
              <div key={idx}>
                <img src={SERVER + "/" + img.thumbnail_path} />
              </div>
            ) : (
              <div key={idx}>
                <video src={SERVER + "/" + img.thumbnail_path} />
              </div>
            ),
          )}
      </div>
      {previewModalInfo.is_myprofile ? (
        <div className="preview-modal-footer">
          <button
            className="preview-modal-edit-my-profile"
            onClick={goToMyProfileOnModal}
          >
            프로필편집
          </button>
        </div>
      ) : isFollowed ? (
        <div className="preview-modal-footer">
          <button ref={message} onClick={goToDMOnModal}>
            메시지 보내기
          </button>
          <button>팔로잉</button>
        </div>
      ) : (
        <div className="preview-modal-footer">
          <button className="blue-follow-button" onClick={followButton}>
            팔로우
          </button>
        </div>
      )}
    </PreviewModalWrapper>
  );
}

export default PreviewModal;

const PreviewModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 390px;
  height: 380px;
  border-radius: 5px;
  border: 1px solid #dbdbdb;
  z-index: 1000;

  .preview-modal-header {
    display: flex;
    width: inherit;

    .preview-modal-header-pic {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 88px;
      height: 114px;
      background-color: white;

      .story-circle {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 68px;
        height: 68px;
        border-radius: 50%;
        border: 2px double transparent;
        background-image: linear-gradient(white, white),
          linear-gradient(45deg, #f99848, #cc3c95);
        background-origin: border-box;
        background-clip: content-box, border-box;
      }

      img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
      }
    }

    .preview-modal-header-info-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 300px;
      height: 114px;

      span {
        text-decoration: none;
        cursor: pointer;

        :first-child {
          color: #262626;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 5px;
        }

        :nth-child(2) {
          color: #8e8e8e;
          font-size: 14px;
          margin-right: 10px;
        }
      }
    }
  }
  .preview-modal-total-info {
    display: grid;
    width: inherit;
    height: 70px;
    grid-template-columns: repeat(3, minmax(130px, 1fr));
    border-top: 1px solid #dbdbdb;

    .preview-modal-total-detail-info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      span {
        text-decoration: none;
        cursor: pointer;

        :first-child {
          color: #8e8e8e;
          font-size: 14px;
        }

        :nth-child(2) {
          color: #262626;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 5px;
        }
      }
    }
  }
  .preview-modal-post-info {
    display: grid;
    width: inherit;
    height: 130px;
    grid-template-columns: repeat(3, minmax(130px, 1fr));

    img,
    video {
      width: 130px;
      height: 130px;
      object-fit: cover;
    }
  }
  .preview-modal-footer {
    display: flex;
    justify-content: center;
    align-items: center;
    width: inherit;
    height: 65px;

    button {
      border: 1px solid #dbdbdb;
      border-radius: 5px;
      height: 30px;

      :first-child {
        width: 200px;
        margin-right: 10px;
      }
      :nth-child(2) {
        width: 150px;
        margin-right: 10px;
      }
    }
    .preview-modal-edit-my-profile {
      width: 300px !important;
    }

    .blue-follow-button {
      width: 300px !important;
      height: 30px;
      background-color: #0095f6;
      color: white;
      font-weight: 600;
    }
  }
`;
