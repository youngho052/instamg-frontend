import React, { useState } from "react";
import styled from "styled-components";
import { TimeFormat } from "../../../Components/TimeData/TimeData";
import ProfilePic from "../../../Components/ProfilePic/ProfilePic";
import ReactPlayer from "react-player";
import { Stop } from "@styled-icons/bootstrap/Stop";
import { ThreeDots } from "@styled-icons/bootstrap/ThreeDots";
import { PlayFill } from "@styled-icons/bootstrap/PlayFill";
import { SERVER } from "../../../Config";

function SlidableCard(props) {
  const { storyItems } = props;
  const [index, setIndex] = useState(0);
  const [isPlay, setIsPlay] = useState(false);
  const [isVideo, setIsVideo] = useState(
    storyItems[0]?.files[0].file_type === "video",
  );

  const picWrapStyles = {
    width: "45px",
    height: "45px",
  };

  let currentItem = storyItems[index];
  let timeFormatItem = storyItems[index].created_at;

  const sliderPrev = () => {
    const targetIdx = index === 0 ? 0 : index - 1;
    setIsVideo(storyItems[targetIdx].files[0].file_type === "video");
    setIndex(targetIdx);
  };

  const sliderNext = () => {
    const targetIdx =
      index === storyItems.length - 1 ? storyItems.length - 1 : index + 1;
    setIsVideo(storyItems[targetIdx].files[0].file_type === "video");
    setIndex(targetIdx);
  };
  console.log(SERVER + "/" + currentItem?.files[0]?.path);
  return (
    <StorySliders>
      <UserInformCotainer>
        <UserInfo>
          <ProfilePic
            WrapDivstyles={picWrapStyles}
            src={storyItems[0]?.profile_photo}
            alt="유저 프로필 이미지"
          />
          <P>{storyItems[0]?.user_account}</P>
          <Span>{TimeFormat(timeFormatItem)}</Span>
        </UserInfo>
        <IconContainer>
          {isVideo && isPlay ? (
            <StopIcon onClick={() => setIsPlay(false)} />
          ) : isVideo && !isPlay ? (
            <PlayFillIcon onClick={() => setIsPlay(true)} />
          ) : (
            <></>
          )}
          <ThreeDotIcon />
        </IconContainer>
      </UserInformCotainer>
      <Slider>
        {currentItem?.files[0]?.file_type === "image" ? (
          <img
            className="slider_img"
            src={SERVER + "/" + currentItem?.files[0]?.path}
          />
        ) : (
          <ReactPlayer
            playing={isPlay}
            loop={true}
            url={SERVER + "/" + currentItem?.files[0]?.path}
          />
        )}
        <SliderLeftBtn onClick={sliderPrev}>◀</SliderLeftBtn>
        <SliderRightBtn onClick={sliderNext}>▶︎</SliderRightBtn>
      </Slider>
    </StorySliders>
  );
}

export default SlidableCard;

const StorySliders = styled.div``;

const Slider = styled.div`
  .slider_img {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    object-fit: cover;
  }

  video {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 5px;
  }
`;

const UserInformCotainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: 0 auto;
  margin-top: 25px;
`;

const UserInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
`;

const P = styled.p`
  margin-left: 5px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
`;

const Span = styled.span`
  margin-left: 10px;
  font-size: 12px;
  color: #fff;
  opacity: 0.7;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  z-index: 5;
  color: #fff;
`;

const StopIcon = styled(Stop)`
  width: 35px;
  margin-right: 15px;
  cursor: pointer;
  z-index: 5;
`;

const PlayFillIcon = styled(PlayFill)`
  width: 35px;
  margin-right: 15px;
  cursor: pointer;
  z-index: 5;
`;

const ThreeDotIcon = styled(ThreeDots)`
  width: 25px;
  z-index: 5;
`;

const SliderRightBtn = styled.button`
  position: absolute;
  width: 30px;
  height: 30px;
  font-size: 34px;
  transform: translateY(-50%);
  color: #fff;
  border-radius: 10px;
  top: 50%;
  right: -7%;
  opacity: 0.3;
`;

const SliderLeftBtn = styled(SliderRightBtn)`
  left: -10%;
`;
