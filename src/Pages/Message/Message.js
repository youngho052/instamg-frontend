import React, { useState, useEffect } from "react";
import styled from "styled-components";
import NavBar from "../../Components/Nav/Navbar";
import Footer from "../../Components/Footer/Footer";
import Mine from "./Components/Mine";
import SendUser from "./Components/SendUser";
import MessageBox from "./Components/MessageBox";
import SendMessageBox from "./Components/SendMessageBox";
import { MESSAGE, SERVER } from "../../Config";

function Message() {
  const [toggle, setToggle] = useState(true);
  const [userProfile, setUserProfile] = useState({});
  const [targetUser, setTargetUser] = useState();
  const [targetUserProfile, setTargetUserProfile] = useState();
  const [roomNames, setRoomNames] = useState();
  const [messageData, setMessageData] = useState([]);

  const sendUserInfo = (account, photo, room_name) => {
    setUserProfile((prevUserProfile) => {
      return {
        ...prevUserProfile,
        talked_user: [
          ...prevUserProfile.talked_user,
          {
            talked_user_account: account,
            profile_photo: photo,
            room_name: room_name,
          },
        ],
      };
    });

    setTargetUserProfile(photo);

    toggleHandle(account);
  };

  useEffect(() => {
    fetch(`${MESSAGE}`, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setUserProfile(result.user_list);
      });
  }, []);

  let user_account = userProfile?.user_account;

  const toggleHandle = (username, profile_photo, room_name) => {
    setToggle(false);

    const roomName = room_name;

    const roomNamed = user_account + username;

    setTargetUser(username);
    setTargetUserProfile(profile_photo);

    fetch(`${MESSAGE}/${room_name ? roomName : roomNamed}`, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((result) => setMessageData(result.message_list));

    if (room_name) {
      setRoomNames(roomName);
      return;
    }

    if (!room_name) {
      setRoomNames(roomNamed);
      return;
    }
  };

  return (
    <BackgroundColors>
      <NavBar />
      <Messages>
        <MessageContainer>
          <SideMenu>
            <Mine userNames={user_account} sendUserInfo={sendUserInfo} />
            <SendUser
              userProfile={userProfile?.talked_user}
              toggleHandle={toggleHandle}
            />
          </SideMenu>
          {toggle ? (
            <MessageBox sendUserInfo={sendUserInfo} />
          ) : (
            <SendMessageBox
              user_account={user_account}
              targetUserProfile={targetUserProfile}
              roomNames={roomNames}
              userProfile={userProfile?.talked_user}
              targetUser={targetUser}
              messageData={messageData}
              setMessageData={setMessageData}
            />
          )}
        </MessageContainer>
      </Messages>
      <Footer />
    </BackgroundColors>
  );
}

export default Message;

const BackgroundColors = styled.div`
  width: 100vw;
  height: 1000px;
  z-index: 1;
  background-color: #fafafa;
`;

const Messages = styled.div`
  width: 970px;
  height: 841px;
  margin: 20px auto;
  border: 1px solid #c7c7c7;
  background-color: #fff;
  z-index: 3;
`;

const MessageContainer = styled.div`
  display: flex;
`;

const SideMenu = styled.div`
  display: flex;
  flex-direction: column;
`;
