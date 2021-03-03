import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ProfileModify from "./ProfileModify";
import ProfilePic from "../../../Components/ProfilePic/ProfilePic";
import { SERVER } from "../../../Config";

function ProfileInfo(props) {
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

  //받아온 데이터들을 각각의 스테이트값에 업데이트
  useEffect(() => {
    setUserInfo({
      account: userData.account,
      email: userData.email,
      phone: userData.phone,
      profile_message: userData.profile_message,
    });
  }, [userData]);

  // 처음 받아오는 데이터
  useEffect(() => {
    fetch(`${SERVER}/user/profile`, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((result) => setUserData(result.profile));
  }, []);

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

    fetch(`${SERVER}/user/profile`, {
      method: "POST",
      headers: {
        // "Content-Type": "multopart/form-data",
        Authorization: localStorage.getItem("token"),
      },
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.message === "CHANGE_COMPLETE") {
          alert("수정완료");
        }
      });
  };

  // const InputItem = (type, name, value, placeholder) => {
  //   return (
  //     <InputContainer>
  //       <Span>{placeholder}</Span>
  //       <InputForm
  //         type={type}
  //         name={name}
  //         value={value}
  //         onChange={onChange.bind()}
  //         placeholder={placeholder}
  //       />
  //     </InputContainer>
  //   );
  // };
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
