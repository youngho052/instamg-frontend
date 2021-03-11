import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import IdBtnBundle from "./IdBtnBundle";
import InteractionBundle from "./InteractionBundle";
import ProfilePic from "../ReUsing/ProfilePic/ProfilePic";

export default function PersonalInfo(props) {
  const history = useHistory();
  const { userAllData } = props;

  const clickedProfilePic = () => {
    history.push(`/story`);
  };

  return (
    <PersonalInfoWrapper>
      <ProfilePic
        src={userAllData?.profile_photo}
        hasTodayLive={userAllData?.today_live}
        onClick={clickedProfilePic}
        WrapDivstyles={{
          width: "170px",
          height: "170px",
          marginLeft: "67px",
        }}
      />
      <InfoTextWrapper>
        <IdBtnBundle userAllData={userAllData} />
        <InteractionBundle userAllData={userAllData} />
        <IntroOverlappedFollowersBundle>
          <Intro>{userAllData?.profile_message}</Intro>
        </IntroOverlappedFollowersBundle>
      </InfoTextWrapper>
    </PersonalInfoWrapper>
  );
}

const PersonalInfoWrapper = styled.header`
  /* border: 1px solid blue; */
  display: flex;
  justify-content: space-between;
  width: 935px;
  margin: 30px auto 44px;
`;

const InfoTextWrapper = styled.section`
  /* border: 1px solid black; */
  width: 613.33px;
  height: 100%;
`;

const IntroOverlappedFollowersBundle = styled.section`
  /* border: 1px solid yellow; */
`;

const Intro = styled.section`
  /* border: 1px solid red; */
  font-size: 16px;
  overflow: hidden;
  word-wrap: break-word;
`;
