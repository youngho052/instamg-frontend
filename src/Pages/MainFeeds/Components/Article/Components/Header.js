import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Popover from "@material-ui/core/Popover";
import PreviewModal from "../../PreviewModal/PreviewModal";
import ArticleModal from "./ArticleModal";
import {
  SERVER,
  FEED_PROFILE,
  FEED_THUMBNAILS,
  FOLLOW,
} from "../../../../../Config";
import profileImg from "../../../../../Images/profile.jpg";

function Header(props) {
  const { header, userInfo } = props;
  const [previewModalInfo, setPreviewModalInfo] = useState([]);
  const [previewModalFeed, setPreviewModalFeed] = useState([]);
  const [show, setShow] = useState(false);
  const [isFollowed, setIsFollowed] = useState(true);
  const history = useHistory();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handlePreviewClick = (event) => {
    event.preventDefault();
    setAnchorEl(event.currentTarget);
    fetch(FEED_PROFILE + `/${header.user_id}`, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((res) => setPreviewModalInfo(res.profile));
    fetch(FEED_THUMBNAILS + `/${header.user_id}`)
      .then((res) => res.json())
      .then((res) => setPreviewModalFeed(res.post_list));
  };

  const goToPersonalFeed = () => {
    history.push(`/personalFeed/${header.user_id}`);
  };

  const toggleModal = () => {
    setShow(true);
  };

  const getFollowStatus = () => {
    setIsFollowed(!isFollowed);
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

  return (
    <ArticleHeader>
      <HeaderWrapper>
        <HeaderProfilePicture>
          <img
            onClick={goToPersonalFeed}
            alt={header.user_account}
            src={
              header.profile_photo === null
                ? profileImg
                : SERVER + "/" + header.profile_photo
            }
          />
        </HeaderProfilePicture>
        <HeaderProfileName onClick={handlePreviewClick}>
          <span>{header.user_account}</span>
        </HeaderProfileName>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <PreviewModal
            className="preview-modal"
            isFollowed={isFollowed}
            previewModalInfo={previewModalInfo}
            previewModalFeed={previewModalFeed}
            header={header}
            getFollowStatus={getFollowStatus}
          />
        </Popover>
        {isFollowed ? null : (
          <span className="follow-button" onClick={followButton}>
            팔로우
          </span>
        )}
      </HeaderWrapper>
      <HeaderEllipsis onClick={toggleModal}>
        <i className="fas fa-ellipsis-h"></i>
        <ArticleModal
          show={show}
          onClose={() => setShow(false)}
          header={header}
          userInfo={userInfo}
          getFollowStatus={getFollowStatus}
          isFollowed={isFollowed}
        />
      </HeaderEllipsis>
    </ArticleHeader>
  );
}

export default Header;

const ArticleHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 614px;
  height: 60px;
  padding: 0 15px;
  border-bottom: 1px solid #dbdbdb;
`;

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;

  .preview-modal {
    border: 1px solid red;
  }

  .follow-button {
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
    margin-left: 10px;
    color: #0095f6;
  }
`;

const HeaderProfilePicture = styled.div`
  display: flex;
  align-items: center;
  width: 42px;
  height: 42px;

  .story-circle {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 42px;
    height: 42px;
    border-radius: 50%;
    border: 2px double transparent;
    background-image: linear-gradient(white, white),
      linear-gradient(45deg, #f99848, #cc3c95);
    background-origin: border-box;
    background-clip: content-box, border-box;
  }
  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    cursor: pointer;
  }
`;

const HeaderProfileName = styled.div`
  span {
    color: #262626;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
  }
`;

const HeaderEllipsis = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;

  .fa-ellipsis-h {
    cursor: pointer;
  }
`;
