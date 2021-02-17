import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { SERVER } from "../../../../../Config";
import profileImg from "../../../../../Images/profile.jpg";

function UpdatedStory(props) {
  const { storyProfile } = props;
  const history = useHistory();

  const goToStoryOnMain = () => {
    history.push(`/story`);
  };

  return (
    <UpdatedStoryWrapper>
      {storyProfile === undefined ? null : (
        <div className="story-wrapper">
          <div className="story-circle" onClick={goToStoryOnMain}>
            <img
              src={
                storyProfile?.profile_photo === null
                  ? profileImg
                  : SERVER + "/" + storyProfile?.profile_photo
              }
            />
          </div>
          <span>{storyProfile?.user_account}</span>
        </div>
      )}
    </UpdatedStoryWrapper>
  );
}

export default UpdatedStory;

const UpdatedStoryWrapper = styled.div`
  .story-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 28px;

    .story-circle {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 66px;
      height: 66px;
      border-radius: 50%;
      border: 2px double transparent;
      background-image: linear-gradient(white, white),
        linear-gradient(45deg, #f99848, #cc3c95);
      background-origin: border-box;
      background-clip: content-box, border-box;
      cursor: pointer;

      img {
        width: 56px;
        height: 56px;
        border-radius: 50%;
      }
    }
    span {
      margin-top: 4px;
      font-size: 12px;
    }
  }
`;
