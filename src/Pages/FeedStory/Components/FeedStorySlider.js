import React, { useState } from "react";
import styled from "styled-components";
import ProfilePic from "../../../Components/ProfilePic/ProfilePic";
import { Swiper, SwiperSlide } from "swiper/react";
import ReactPlayer from "react-player";
import "swiper/swiper.scss";
import { Stop } from "@styled-icons/bootstrap/Stop";
import { ThreeDots } from "@styled-icons/bootstrap/ThreeDots";
import { PlayFill } from "@styled-icons/bootstrap/PlayFill";
import { TimeFormat } from "../../../Components/TimeData/TimeData";

function FeedStorySlider(props) {
  const { feedImages, SERVER } = props;
  const [videoControll, setVideoControll] = useState(false);

  const picWrapStyles = {
    width: "45px",
    height: "45px",
  };

  return (
    <Swiper slidesPerView={4} slideToClickedSlide={true} centeredSlides={true}>
      {feedImages.map((storyItems, index) => {
        return (
          <SwiperSlide key={index}>
            <SwiperContainer>
              <BackgroundColor />
              <UserInformContainer>
                <UserInfo>
                  <ProfilePic
                    WrapDivstyles={picWrapStyles}
                    src={storyItems[0]?.profile_photo}
                    alt="유저 프로필 이미지"
                  />
                  <P>{storyItems.title}</P>
                  <Span>{TimeFormat(storyItems?.created_at)}</Span>
                </UserInfo>
                <IconContainer>
                  {storyItems.file_type === "video" && videoControll ? (
                    <StopIcon onClick={() => setVideoControll(false)} />
                  ) : storyItems.file_type === "video" && !videoControll ? (
                    <PlayFillIcon onClick={() => setVideoControll(true)} />
                  ) : (
                    <></>
                  )}
                  <ThreeDotIcon />
                </IconContainer>
              </UserInformContainer>
              <ImageComtainer>
                {storyItems.file_type === "image" ? (
                  <img
                    className="storyImage"
                    src={SERVER + "/" + storyItems.path}
                    alt="스토리 이미지"
                  />
                ) : (
                  <ReactPlayer
                    url={SERVER + "/" + storyItems.path}
                    playing={videoControll}
                    loop={true}
                  />
                )}
              </ImageComtainer>
              <ButtonForm>
                <Input
                  placeholder={
                    storyItems[0]?.user_account + "에게" + "답장하기"
                  }
                />
                <i className="icon far fa-paper-plane" />
              </ButtonForm>
            </SwiperContainer>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default FeedStorySlider;

const SwiperContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 90vh;
`;

const BackgroundColor = styled.div`
  position: absolute;
  width: 100%;
  height: 90vh;
  background: linear-gradient(to top, black, #4d4d4d, black);
  opacity: 0.3;
  z-index: 4;
`;

const UserInformContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
  margin-top: 30px;
  z-index: 5;
`;

const UserInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const P = styled.p`
  margin-left: 5px;
  font-size: 12px;
  font-weight: bold;
  color: #fff;
`;

const Span = styled.span`
  margin-left: 10px;
  font-size: 10px;
  color: #fff;
  opacity: 0.7;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
`;

const StopIcon = styled(Stop)`
  width: 35px;
  margin-right: 15px;
  cursor: pointer;
`;

const PlayFillIcon = styled(PlayFill)`
  width: 35px;
  margin-right: 15px;
  cursor: pointer;
`;

const ThreeDotIcon = styled(ThreeDots)`
  width: 25px;
`;

const ImageComtainer = styled.div`
  .storyImage {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    margin: auto;
  }

  video {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    margin: auto;
  }
`;

const ButtonForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
  margin-bottom: 20px;
  z-index: 5;

  .icon {
    font-size: 25px;
    color: #fff;
  }
`;

const Input = styled.input`
  width: 360px;
  height: 40px;
  padding: 8px 12px;
  border-radius: 25px;
  border: 1px solid #fff;
  color: #fff;
  outline: none;

  &::placeholder {
    color: #fff;
  }
`;
