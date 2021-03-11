import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import EachStory from "./EachStory";
import { SERVER } from "../../../../Config";

export default function EachStoryMap(props) {
  const { storiesData, feedPic, account, userId } = props;

  const settings = {
    dots: false,
    infinite: false,
    speed: 100,
    slidesToShow: 7,
    slidesToScroll: 7,
    arrows: true,
  };

  return (
    <EachStoryMaps>
      <Slider {...settings}>
        {storiesData?.map((story) => {
          return (
            <EachStory
              thumbnailPic={SERVER + "/" + story.thumbnail_path}
              // thumbnailPic={story.thumbnail_path}
              title={story.title}
              id={userId}
              feedPic={feedPic}
              account={account}
            />
          );
        })}
      </Slider>
    </EachStoryMaps>
  );
}

const EachStoryMaps = styled.div`
  width: 94%;
  margin: auto;

  button::before {
    color: black;
  }
  .slick-disabled:before {
    display: none;
  }
`;
