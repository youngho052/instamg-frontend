import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { FiPlusSquare } from "react-icons/fi";
import { SERVER } from "../../../../Config";
import profileImg from "../../../../Images/profile.jpg";

function MainFeedsProfile(props) {
  const { userInfo } = props;
  const history = useHistory();

  const uploadArticle = () => {
    history.push("/upload_article");
  };

  const goToPersonalFeedOnMain = () => {
    history.push(`/personalFeed/${userInfo[0].user_id}`);
  };

  return userInfo?.[0] === undefined ? null : (
    <MainFeedProfileSection>
      <div className="main-feeds-profile-wrapper">
        <div
          className="main-feeds-profile-pic"
          onClick={goToPersonalFeedOnMain}
        >
          <img
            alt={userInfo[0].user_account}
            src={
              userInfo[0].profile_photo === null
                ? profileImg
                : SERVER + "/" + userInfo[0].profile_photo
            }
          />
        </div>
        <div
          className="main-feeds-profile-name"
          onClick={goToPersonalFeedOnMain}
        >
          {userInfo[0].user_account}
        </div>
      </div>
      <div className="main-feeds-profile-upload">
        <FiPlusSquare onClick={uploadArticle} />
      </div>
    </MainFeedProfileSection>
  );
}

export default MainFeedsProfile;

const MainFeedProfileSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 293px;
  height: 66px;
  margin-bottom: 25px;

  .main-feeds-profile-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .main-feeds-profile-pic {
      width: 66px;
      height: 66px;
      cursor: pointer;
      img {
        width: inherit;
        height: inherit;
        border-radius: 50%;
      }
    }

    .main-feeds-profile-name {
      margin-left: 15px;
      cursor: pointer;
      color: #262626;
      text-decoration: none;
      font-size: 14px;
      font-weight: 600;
    }
  }

  .main-feeds-profile-upload {
    margin: 0 10px;
    color: #262626;
    text-decoration: none;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
  }
`;
