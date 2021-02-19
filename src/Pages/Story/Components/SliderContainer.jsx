import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import SlidableCard from "./SlidableCard";

function SlideContainer(props) {
  const { storyImages } = props;

  const history = useHistory();

  return (
    <Swiper slidesPerView={4} slideToClickedSlide={true} centeredSlides={true}>
      {storyImages.map((storyItems, index) => {
        return (
          <>
            {storyItems.length === 0 ? null : (
              <SwiperSlide key={index}>
                <SwiperContainer>
                  <BackgroundColor />
                  <SlidableCard storyItems={storyItems}></SlidableCard>
                  <ButtonForm>
                    <SendMessageBox
                      name="message"
                      placeholder={
                        storyItems[0]?.user_account + " 에게" + " 답장하기"
                      }
                    />
                    <SendMessage onClick={() => history.push("/message")}>
                      <i className="icon far fa-paper-plane" />
                    </SendMessage>
                  </ButtonForm>
                </SwiperContainer>
              </SwiperSlide>
            )}
          </>
        );
      })}
    </Swiper>
  );
}

export default SlideContainer;

const SwiperContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 480px;
  height: 95vh;
`;

const BackgroundColor = styled.div`
  position: absolute;
  width: 100%;
  height: 95vh;
  background: linear-gradient(to top, black, #4d4d4d, black);
  opacity: 0.3;
  z-index: 4;
`;

const ButtonForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 25px;
  z-index: 5;
`;

const SendMessageBox = styled.input`
  width: 380px;
  height: 44px;
  padding: 8px 12px;
  border-radius: 25px;
  border: 1px solid #fff;
  color: #fff;
  outline: none;

  &::placeholder {
    color: #fff;
  }
`;

const SendMessage = styled.div`
  cursor: pointer;

  .icon {
    font-size: 25px;
    color: #fff;
  }
`;
