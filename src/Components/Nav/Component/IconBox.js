import React, { useState } from "react";
import styled from "styled-components";
import { Route, useHistory, withRouter } from "react-router-dom";
import { ICON_DATA } from "../Data/IconData";
import { PROFILE_DATA } from "../Data/ProfileIconData";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownDivider,
} from "styled-dropdown-component";
import ProfilePic from "../../../Components/ProfilePic/ProfilePic";
import { Home } from "@styled-icons/octicons/Home";
import { HomeFill } from "@styled-icons/octicons/HomeFill";
import { Send } from "@styled-icons/feather/Send";
import { SendPlane } from "@styled-icons/remix-fill/SendPlane";

function IconBox(props) {
  const { profileimg } = props;
  const [hidden, setHidden] = useState(true);

  const logoutHandle = () => {
    localStorage.removeItem("token");
    window.location.replace("/login");
  };

  const history = useHistory();
  console.log(props);
  return (
    <IconBoxs>
      {props.location.pathname === "/main" ? (
        <HomeFillIcon />
      ) : (
        <HomeIcon onClick={() => history.push({ pathname: "/main" })} />
      )}

      {props.location.pathname === "/message" ? (
        <SendPlaneIcon />
      ) : (
        <SendIcon onClick={() => history.push({ pathname: "/message" })} />
      )}

      {ICON_DATA.map((item) => {
        return <i className={item.icon} />;
      })}
      <Dropdown>
        <ProfilePic src={profileimg} onClick={() => setHidden(!hidden)} />
        <DropdownMenus hidden={hidden} toggle={() => setHidden(!hidden)}>
          {PROFILE_DATA.map((item, index) => {
            return (
              <DropdownItems
                onClick={() =>
                  (item.content === "설정") &
                  history.push({ pathname: "/myprofile" })
                }
                key={index}
              >
                <i className={item.icon} />
                <span>{item.content}</span>
              </DropdownItems>
            );
          })}
          <DropdownDivider />
          <DropdownItem onClick={logoutHandle}>로그아웃</DropdownItem>
        </DropdownMenus>
      </Dropdown>
    </IconBoxs>
  );
}

export default withRouter(IconBox);

const IconBoxs = styled.div`
  display: flex;
  align-items: center;

  .icon {
    width: 40px;
    font-size: 22px;
    cursor: pointer;
  }

  img {
    width: 22px;
    height: 22px;
    margin-left: 5px;
    border-radius: 50%;
    border: 1px solid #000;
    cursor: pointer;
  }
`;

const DropdownMenus = styled(DropdownMenu)`
  width: 230px;
  ${DropdownItem} {
    cursor: pointer;
  }
`;

const DropdownItems = styled(DropdownItem)`
  margin-top: 10px;

  .icon {
    margin-left: -10px;
  }

  span {
    margin-left: 10px;
  }
`;

const HomeIcon = styled(Home)`
  width: 23px;
  margin-right: 10px;
  cursor: pointer;
`;

const HomeFillIcon = styled(HomeFill)`
  width: 23px;
  cursor: pointer;
`;

const SendIcon = styled(Send)`
  width: 25px;
  cursor: pointer;
`;

const SendPlaneIcon = styled(SendPlane)`
  width: 25px;
  cursor: pointer;
`;
