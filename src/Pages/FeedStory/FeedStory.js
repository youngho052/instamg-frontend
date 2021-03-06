import React, { useEffect, useState } from "react";
import styled from "styled-components";
import FeedStorySlider from "./Components/FeedStorySlider";
import { FEED_STORY } from "../../Config";

function Story(props) {
  const [feedImages, setFeedImages] = useState([]);
  console.log(props.match);
  useEffect(() => {
    fetch(`${FEED_STORY}/${props.match.params.id}`, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((result) => setFeedImages(result.profile_story));
  }, []);

  return (
    <Storys>
      <StoryContainer>
        <FeedStorySlider feedImages={feedImages} />
      </StoryContainer>
    </Storys>
  );
}

export default Story;

const Storys = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #1a1a1a;

  .swiper-slide {
    margin-top: 50px;
    transform: scale(0.5);
  }

  .swiper-slide-active {
    transform: scale(1);
  }
`;

const StoryContainer = styled.div`
  margin: 0 auto;
`;
