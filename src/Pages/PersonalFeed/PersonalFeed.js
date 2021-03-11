import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PersonalInfo from "./Component/PersonalInfo/PersonalInfo";
import Story from "./Component/Story/Story";
import Posts from "./Component/Posts/Posts";
import Navbar from "../../Components/Nav/Navbar";
import { FEED_PROFILE } from "../../Config";
import Footer from "../../Components/Footer/Footer";

export default function PersonalFeed(props) {
  const [userAllData, setUserAllData] = useState();

  useEffect(() => {
    // fetch("/data/personalFeed/profile.json")
    fetch(`${FEED_PROFILE}/${props.match.params.id}`, {
      // fetch(`${FEED_PROFILE}/5`, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((res) => setUserAllData(res.profile));
  }, []);

  return (
    <PersonalFeedWrapper>
      <Navbar />
      <Main>
        <PersonalInfo userAllData={userAllData} />
        <Story
          feedPic={userAllData?.profile_photo}
          account={userAllData?.account}
          userId={userAllData?.id}
        />
        <Posts userAllData={userAllData} />
      </Main>
      <Footer />
    </PersonalFeedWrapper>
  );
}

const PersonalFeedWrapper = styled.div`
  /* border: 1px solid red; */
  width: 100%;
  background-color: rgba(var(--b3f, 250, 250, 250), 1);
`;

const Nav = styled.nav`
  /* border: 1px solid black; */
  height: 54px;
`;

const Main = styled.main`
  /* border: 1px solid yellow; */
  // padding: 30px 86.5px 0px;
`;
