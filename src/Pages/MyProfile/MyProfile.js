import React from "react";
import styled from "styled-components";
import ModifyInfo from "./Components/ModifyInfo";
import ProfileInfo from "./Components/ProfileInfo";
import Navbar from "../../Components/Nav/Navbar";

function MyProfile(props) {
  return (
    <BackgroundColors>
      <Navbar />
      <MyProfiles>
        <MyProfileContainer>
          <ModifyInfo />
          <ProfileInfo />
        </MyProfileContainer>
      </MyProfiles>
    </BackgroundColors>
  );
}

export default MyProfile;
const MyProfiles = styled.div`
  margin-top: 50px;
`;

const BackgroundColors = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: 1;
  background-color: #fafafa;
`;

const MyProfileContainer = styled.div`
  display: flex;
  width: 935px;
  height: 811px;
  margin: 0 auto;
  background-color: #fff;
  border: 1px solid #c7c7c7;
`;
