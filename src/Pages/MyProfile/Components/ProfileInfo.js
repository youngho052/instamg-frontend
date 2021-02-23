import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ProfileModify from "./ProfileModify";
import ProfilePic from "../../../Components/ProfilePic/ProfilePic";
import { USER_PROFILE } from "../../../Config";
import { useHistory } from "react-router";

function ProfileInfo() {
  const [selectFile, setSelectFile] = useState();
  const [pickFile, setPickFile] = useState(false);
  const [userData, setUserData] = useState([]);
  const [userInfo, setUserInfo] = useState({
    phone: "",
    email: "",
    account: "",
    profile_message: "",
    password: "",
    new_password: "",
    new_passwordCheck: "",
  });

  const history = useHistory();
  // 이미지 업로드 핸들러
  const uploadFileHandle = (e) => {
    setSelectFile(e.target.files[0]);
    setPickFile(true);
  };

  //각각의 인풋 값 수정 핸들러
  const infoModifyHandle = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  // 처음 받아오는 데이터
  useEffect(() => {
    fetch(`${USER_PROFILE}`, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((result) => setUserData(result.profile));
  }, []);

  //받아온 데이터들을 각각의 스테이트값에 업데이트
  useEffect(() => {
    setUserInfo({
      account: userData.account,
      email: userData.email,
      phone: userData.phone,
      profile_message: userData.profile_message,
    });
  }, [userData]);

  //폼데이터 전송 핸들러
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    const {
      phone,
      email,
      account,
      profile_message,
      password,
      new_password,
    } = userInfo;

    const jsonData = {
      new_account: account,
      new_email: email,
      new_phone: phone,
      new_profile_message: profile_message,
      password: password,
      new_password: new_password,
    };

    formData.append("profile_photo", selectFile);
    formData.append("json", JSON.stringify(jsonData));

    fetch(`${USER_PROFILE}`, {
      method: "POST",
      headers: {
        Authorization: localStorage.getItem("token"),
      },
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        const errorMsg = {
          ALREADY_IN_USE_ACCOUNT: "이미 사용중인 아이디 입니다.",
          ALREADY_IN_USE_EMAIL: "이미 사용중인 이메일 입니다.",
          INVALID_EMAIL: "잘못된 이메일 형식입니다.",
          ALREADY_IN_USE_PHONE: "이미 사용중인 번호 입니다.",
          INVALID_PASSWORD: "비밀번호 형식이 잘못 되었습니다.",
          PASSWORD_MISMATCH: "기존 비밀번호를 잘못 입력 하셨습니다.",
        };

        if (result.message === "CHANGE_COMPLETE") {
          alert("수정완료");
          return;
        }

        if (result.message) {
          return alert(errorMsg[result.message]);
        }
      });
  };

  const { profile_message } = userInfo;

  const imageStyle = {
    width: "35px",
    height: "35px",
    marginRight: "15px",
    borderRadius: "50%",
  };

  return (
    <ProfileInfos>
      <ProfileForm onSubmit={handleSubmit}>
        <InformationBox>
          <ProfilePic
            WrapDivstyles={imageStyle}
            src={userData?.profile_photo}
          />
          <SubmitProfileForm>
            <Span>{userData.account}</Span>
            <ProfileUploadCont>
              <label className="input-file-button" htmlFor="input-file">
                프로필 사진 바꾸기
              </label>
              <input
                type="file"
                id="input-file"
                name="profile"
                onChange={uploadFileHandle}
                style={{ display: "none" }}
              />
            </ProfileUploadCont>
          </SubmitProfileForm>
        </InformationBox>
        <ProfileModify
          userInfo={userInfo}
          profile_message={profile_message}
          infoModifyHandle={infoModifyHandle}
        />
        <Input type="submit" value="수정하기" />
      </ProfileForm>
    </ProfileInfos>
  );
}

export default ProfileInfo;

const ProfileInfos = styled.div`
  width: 696px;
  height: 811px;
  margin: 0 auto;
`;

const ProfileForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
`;

const InformationBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const SubmitProfileForm = styled.form`
  width: 270px;
  margin-left: 25px;
`;

const ProfileUploadCont = styled.div`
  .input-file-button {
    color: blue;
    cursor: pointer;
  }
`;

const Span = styled.span``;

const Input = styled.input`
  width: 68px;
  height: 30px;
  background-color: rgba(0, 149, 246, 0.3);
  color: #fff;
  margin-top: 30px;

  &:hover {
    background-color: #0095f6;
  }
`;
