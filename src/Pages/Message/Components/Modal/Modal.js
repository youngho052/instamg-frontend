import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { SERVER } from "../../../../Config";
import ProfilePic from "../../../../Components/ProfilePic/ProfilePic";

function Modal(props) {
  const { onClose, show, sendUserInfo } = props;
  const [followUser, setFollowUser] = useState([]);

  useEffect(() => {
    fetch(`${SERVER}/direct_message/search`, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((result) => setFollowUser(result.following));
  }, []);

  if (!show) {
    return null;
  }

  const imageStyle = {
    width: "35px",
    height: "35px",
    marginRight: "15px",
    borderRadius: "50%",
  };

  return (
    <Modals onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation(e)}>
        <ModalHeader>
          <ModalTitle>새로운 메시지</ModalTitle>
        </ModalHeader>
        <ModalBody>
          <span>추천</span>
          {followUser.map((item, index) => {
            const { user_account, profile_photo, room_name } = item;
            return (
              <FollowUsers
                key={index}
                onClick={() =>
                  sendUserInfo(user_account, profile_photo, room_name)
                }
              >
                <ProfilePic WrapDivstyles={imageStyle} src={profile_photo} />
                <span>{user_account}</span>
              </FollowUsers>
            );
          })}
        </ModalBody>
        <ModalFooter>
          <Button onClick={onClose}>나가기</Button>
        </ModalFooter>
      </ModalContent>
    </Modals>
  );
}

export default Modal;

const Modals = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  width: 350px;
  border-radius: 20px;
  background-color: #fff;
`;

const ModalHeader = styled.div`
  padding: 10px;
`;

const ModalTitle = styled.h4`
  text-align: center;
  margin: 0;
`;

const ModalBody = styled.div`
  padding: 10px;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
`;

const FollowUsers = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const ModalFooter = styled.div`
  padding: 10px;
`;

const Button = styled.button``;
