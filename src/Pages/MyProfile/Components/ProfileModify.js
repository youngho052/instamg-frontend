import React from "react";
import styled from "styled-components";
import InputForm from "./Input/InputForm";
import { INPUT_DATA } from "../Components/Data/InputData";

function ProfileModify(props) {
  const { infoModifyHandle, userInfo, profile_message } = props;
  const { new_password, new_passwordCheck } = userInfo;

  const checkPwValidation = new_password === new_passwordCheck;

  return (
    <ProfileModifys>
      {INPUT_DATA.map((item, index) => {
        const {
          type,
          name,
          label,
          placeholder,
          content,
          checkpw,
          samepw,
        } = item;
        const validationpw = !new_password ? (
          ""
        ) : checkPwValidation ? (
          <P style={{ color: "blue" }}>{samepw}</P>
        ) : (
          <P>{checkpw}</P>
        );
        return (
          <InputContainer key={index} type={type}>
            <Span>{label}</Span>
            <WriteForm>
              <InputForm
                type={type}
                name={name}
                value={userInfo[name]}
                placeholder={placeholder}
                onChange={infoModifyHandle}
              />
              {type === "text" ? <P type={type}>{content}</P> : validationpw}
            </WriteForm>
          </InputContainer>
        );
      })}
      <IntroForm>
        <Span>소개</Span>
        <Textarea
          name="profile_message"
          rows="2"
          cols="45"
          value={profile_message}
          onChange={infoModifyHandle}
        />
      </IntroForm>
    </ProfileModifys>
  );
}

export default ProfileModify;

const ProfileModifys = styled.div`
  margin-top: 30px;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 520px;
  height: ${(props) => (props.type === "password" ? "75px" : "100px")};
  margin: 0 auto;
`;

const WriteForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 355px;
  margin-top: 10px;
`;

const P = styled.p`
  width: 340px;
  margin: 10px auto;
  font-size: 12px;
  color: ${(props) => (props.type === "text" ? "#c7c7c7" : "red")};
`;

const Span = styled.span`
  width: 120px;
  margin-top: 15px;
  text-align: right;
`;

const IntroForm = styled.div`
  display: flex;
  justify-content: space-between;
  width: 520px;
  margin-top: -20px;
`;

const Textarea = styled.textarea`
  padding: 10px;
  line-height: 1.5;
  resize: vertical;
  border-radius: 5px;
  border: 1px solid #ccc;
  box-shadow: 1px 1px 1px #999;
  letter-spacing: 1px;
`;
