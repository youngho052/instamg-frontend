import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Icon } from "react-icons-kit";
import { ic_collections } from "react-icons-kit/md/ic_collections";
import { videoCamera } from "react-icons-kit/fa/videoCamera";
import { chatbubble } from "react-icons-kit/ionicons/chatbubble";
import { play } from "react-icons-kit/fa/play";
import { numberFormatter } from "../ReUsing/ConversionNumberUnit";
import LikedIcon from "../ReUsing/Icons/LikedIcon";
import ThumbnailModal from "../../../ThumbnailModal/ThumbnailModal";
import { MODAL_API } from "../../../../Config";
import { SERVER } from "../../../../Config";
import { VIDEO_VIEW } from "../../../../Config";
import { FEED_THUMBNAILS } from "../../../../Config";

export default function Thumbnail({ postData, forwardedRef }) {
  const [eachModalAllData, setEachModalAllData] = useState();
  const [modalShow, setModalShow] = useState(false);
  const [currentIdx, setCurrentIdx] = useState();

  const handleIdx = (changeIdx) => {
    setCurrentIdx(currentIdx + changeIdx);
  };

  const onCloseModal = () => {
    setModalShow(false);
    setCurrentIdx(-1);
  };

  useEffect(() => {
    if (currentIdx >= 0) {
      fetch(`${MODAL_API}/${postData[currentIdx].post_id}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
        // fetch(`/data/ThumbnailModal/ThumbnailModal.json`)
        // fetch(`https://jsonplaceholder.typicode.com/users/${currentIdx}`)
        .then((res) => res.json())
        .then((res) => setEachModalAllData(res.post));
      setModalShow(true);
    }
  }, [currentIdx]);

  const hasModalVideoFilter1st = eachModalAllData?.file.filter(
    (eachFile) => eachFile.file_type === "video",
  )[0];

  if (modalShow && hasModalVideoFilter1st) {
    fetch(`${VIDEO_VIEW}/${hasModalVideoFilter1st?.id}`, {
      method: "POST",
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
  }

  let PhotoVideoIconStyles = {
    position: "absolute",
    right: "18px",
    top: "3px",
    color: "white",
  };

  let FiguresIconStyled = {
    marginRight: "5px",
    color: "white",
  };

  return (
    <ThumbnailWrapper>
      {postData?.map((post, idx) => {
        const multipleIconCondition =
          post.is_multiple && post.file[0].file_type == "image";

        return (
          <EachThumbnail
            onClick={() => setCurrentIdx(idx)}
            // ref={idx == postData?.length - 1 ? forwardedRef : {}}
          >
            {multipleIconCondition && (
              <Icon
                icon={ic_collections}
                style={PhotoVideoIconStyles}
                size={20}
              />
            )}
            {post.file[0].file_type == "image" ? (
              <ThumbnailImg
                src={SERVER + "/" + post.file[0].thumbnail_path}
                // src={post.file[0].thumbnail_path}
              />
            ) : (
              <>
                <Icon
                  icon={videoCamera}
                  style={PhotoVideoIconStyles}
                  size={17}
                />
                <ThumbnailVideo
                  src={SERVER + "/" + post.file[0].thumbnail_path}
                  // src={post.file[0].thumbnail_path}
                />
              </>
            )}
            <HoverBlackBackground
            // isHovered={isHovered}
            ></HoverBlackBackground>
            <CountBundles>
              <LikeViewFiguresBundle>
                {post.file[0].file_type == "image" ? (
                  <>
                    <LikedIcon
                      size={23}
                      styles={FiguresIconStyled}
                      isFilled={true}
                    />
                    {numberFormatter(post.like_count, 1)}
                  </>
                ) : (
                  <>
                    <Icon icon={play} size={23} style={FiguresIconStyled} />
                    {numberFormatter(post.file[0].view_count, 1)}
                  </>
                )}
              </LikeViewFiguresBundle>
              <CommentFiguresBundle>
                <Icon icon={chatbubble} size={23} style={FiguresIconStyled} />
                {numberFormatter(post.comments_count, 1)}
              </CommentFiguresBundle>
            </CountBundles>
          </EachThumbnail>
        );
      })}
      <ThumbnailModal
        eachModalAllData={eachModalAllData}
        modalShow={modalShow}
        onCloseModal={() => onCloseModal()}
        handleIdx={handleIdx}
        currentIdx={currentIdx}
        hasModalVideoFilter1st={hasModalVideoFilter1st}
        showPostLength={postData?.length}
      />
    </ThumbnailWrapper>
  );
}

const ThumbnailWrapper = styled.article`
  /* border: 1px solid red; */
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 100%;
`;

const EachThumbnail = styled.div`
  /* border: 1px solid lightskyblue; */
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  /* width: 33.3%; */
  margin: 0px 12px 12px 0px;
  /* width: 30%; */
  /* margin-right: 5%; */
  z-index: 3;
  &:nth-child(3n) {
    margin-right: 0px;
  }

  /* &:nth-last-child(3) {
    margin-bottom: 0px;
  } */
  /* &:hover {
    background-color: #000;
    opacity: 0.5;
  } */
`;

const ThumbnailImg = styled.img`
  width: 300px;
  height: 300px;
  /* z-index: 2;*/
`;

const ThumbnailVideo = styled.video`
  width: 300px;
  height: 300px;
`;

const HoverBlackBackground = styled.div`
  /* display: ${(props) => (props.isHovered ? "flex" : "none")}; */
  /* &:hover {
    display: none;
    cursor: pointer;
  } */
  position: absolute;
  top: 0;
  opacity: 0.5;
  background-color: black;
  width: 300px;
  height: 300px;
  cursor: pointer;
`;

const CountBundles = styled.div`
  display: flex;
  position: absolute;
  font-size: 16px;
  font-weight: 600;
  color: white;
  z-index: 1;
`;

const LikeViewFiguresBundle = styled.div`
  display: flex;
  align-items: center;
`;

const CommentFiguresBundle = styled.div`
  margin-left: 20px;
`;
