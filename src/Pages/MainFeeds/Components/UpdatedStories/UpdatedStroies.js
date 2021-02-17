import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import UpdatedStory from "./Components/UpdatedStory";
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";

SwiperCore.use([Navigation]);

function UpdatedStories(props) {
  const { stories } = props;
  const onlyStoryArr = stories?.slice?.(0, -1);

  return (
    <UpdatedStoriesWrapper>
      <Swiper slidesPerView={7.5} navigation>
        {onlyStoryArr &&
          onlyStoryArr
            ?.sort((a, b) =>
              a[a.length - 1]?.created_at < b[b.length - 1]?.created_at
                ? 1
                : a[a.length - 1]?.created_at > b[b.length - 1]?.created_at
                ? -1
                : 0,
            )
            ?.map((story, idx) => {
              return story.length === 0 ? null : (
                <SwiperSlide key={idx}>
                  <UpdatedStory storyProfile={story[story.length - 1]} />
                </SwiperSlide>
              );
            })}
      </Swiper>
    </UpdatedStoriesWrapper>
  );
}

export default UpdatedStories;

const UpdatedStoriesWrapper = styled.div`
  display: flex;
  overflow: hidden;
  align-items: center;
  width: 614px;
  height: 118px;
  border: 1px solid #dbdbdb;
  margin: 24px 0;
  padding: 16px p;
  background-color: white;

  .swiper-container {
    width: inherit;
  }

  .swiper-button-next,
  .swiper-button-prev {
    width: 25px !important;
    height: 25px !important;
    background-color: rgb(239, 239, 239) !important;
    border-radius: 50% !important;
    opacity: 0.7 !important;

    &::after {
      color: rgba(0, 0, 0, 0.5) !important;
      font-size: 10px !important;
      font-weight: 600 !important;
    }
  }

  .swiper-button-disabled,
  .swiper-pagination-disabled {
    opacity: 0 !important;
    pointer-events: none !important;
    cursor: auto !important;
  }

  .swiper-pagination-bullet {
    width: 6px !important;
    height: 6px !important;
    margin: 3px !important;
  }

  .swiper-pagination-bullet-active {
    background-color: #fafafa !important;
  }
`;
