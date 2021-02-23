import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ProfilePic from "../../../Components/ProfilePic/ProfilePic";

function SendUser(props) {
  const { toggleHandle, userProfile } = props;

  const imageStyle = {
    width: "56px",
    height: "56px",
    marginRight: "15px",
    borderRadius: "50%",
  };

  return (
    <SendUsers>
      {userProfile?.map((item, index) => {
        const { talked_user_account, profile_photo, room_name } = item;
        return (
          <SendUserProfile
            key={index}
            onClick={() =>
              toggleHandle(talked_user_account, profile_photo, room_name)
            }
          >
            <ProfilePic WrapDivstyles={imageStyle} src={profile_photo} />
            <span>{talked_user_account}</span>
          </SendUserProfile>
        );
      })}
    </SendUsers>
  );
}

export default SendUser;

const SendUsers = styled.div`
  width: 349px;
  height: 780px;
  border-right: 1px solid #c7c7c7;
  display: flex;
  flex-direction: column;
`;

const SendUserProfile = styled.div`
  display: flex;
  width: 270px;
  margin: 10px auto;
  cursor: pointer;

  span {
    margin-left: 15px;
    margin-top: 15px;
    font-size: 16px;
  }
`;
