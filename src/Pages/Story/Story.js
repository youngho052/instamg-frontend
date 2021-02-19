import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SliderContainer from "./Components/SliderContainer";
import { STORY } from "../../Config";

function Story() {
  const [storyImages, setStoryImages] = useState([]);

  useEffect(() => {
    fetch(`${STORY}`, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((result) => setStoryImages(result.story_list));
  }, []);

  return (
    <Storys>
      <StoryContainer>
        <SliderContainer storyImages={storyImages} />
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
    margin-top: 20px;
    transform: scale(0.5);
  }

  .swiper-slide-active {
    transform: scale(1);
  }
`;

const StoryContainer = styled.div`
  margin: 0 auto;
`;
