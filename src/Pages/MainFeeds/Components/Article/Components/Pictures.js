import React from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { SERVER, MD_LOCAL } from "../../../../../Config";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

SwiperCore.use([Navigation, Pagination]);

function Pictures(props) {
  const { pictures } = props;

  return (
    <>
      <PictureWrapper>
        <Swiper slidesPerView={1} navigation pagination watchOverflow>
          {pictures &&
            pictures.map((picture, idx) => (
              <SwiperSlide key={idx}>
                {() => {
                  if (picture?.file_type === "image")
                    return <img src={SERVER + "/" + picture?.thumbnail_path} />;
                  if (picture?.file_type === "video")
                    return (
                      <ReactPlayer
                        width="612px"
                        loop={true}
                        controls
                        url={SERVER + "/" + picture?.path}
                      />
                    );
                }}
              </SwiperSlide>
            ))}
        </Swiper>
      </PictureWrapper>
    </>
  );
}

export default Pictures;

const PictureWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 614px;
  position: relative;

  .fa-heart-icon {
    position: absolute;
    left: 45%;
    bottom: 40%;
    font-size: 70px;
    color: whitesmoke;
    z-index: 10;
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

  .swiper-wrapper {
    display: flex;
    align-items: center;
    width: 612px;
    max-height: 620px;
    position: relative;

    img {
      width: 612px;
      height: inherit;
      /* object-fit: cover; */
    }

    div {
      display: flex;
      align-items: center;
      video {
        width: 612px;
        height: inherit;
      }
    }
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
