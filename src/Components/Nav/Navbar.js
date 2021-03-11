import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SearchBox from "./Component/SearchBox";
import IconBox from "./Component/IconBox";
import { SERVER } from "../../Config";
import "../../Styles/Common.scss";

function Navbar() {
  const [profileimg, setProfileimg] = useState();

  useEffect(() => {
    fetch(`${SERVER}/user/profile`, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((result) => setProfileimg(result.profile.profile_photo));
  }, []);

  return (
    <Navbars>
      <NavbarContainer>
        <LogoName>
          <Link to="/">instamg</Link>
        </LogoName>
        <SearchBox />
        <IconBox profileimg={profileimg} />
      </NavbarContainer>
    </Navbars>
  );
}

export default Navbar;

const Navbars = styled.div`
  width: 100%;
  height: 54px;
  background-color: #fff;
  border-bottom: 1px solid #f2f2f2;
`;

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 940px;
  height: 54px;
  margin: 0 auto;
`;

const LogoName = styled.h1`
  font-size: 25px;
  font-family: "Lobster", cursive;
  a {
    color: #000;
  }
`;
