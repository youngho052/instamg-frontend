import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import InputForm from "./Input/InputForm";
import ButtonForm from "./Button/ButtonForm";
import { SIGNUP } from "../../../Config";

function SignForm(props) {
  const [signupValue, setSignupValue] = useState({
    phone: "",
    email: "",
    id: "",
    password: "",
  });

  const history = useHistory();

  const handleSignup = (e) => {
    const { name, value } = e.target;
    setSignupValue({
      ...signupValue,
      [name]: value,
    });
  };

  const signupClicked = (e) => {
    const { id, password, phone, email } = signupValue;

    if (!id) {
      alert("ID 값을 입력해주세요.");
      return;
    }

    if (!password) {
      alert("PASSWORD 값을 입력해주세요.");
      return;
    }

    fetch(SIGNUP, {
      method: "POST",
      body: JSON.stringify({
        account: id,
        password,
        ...(phone ? { phone } : {}),
        ...(email ? { email } : {}),
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        const errorMsg = {
          ACCOUNT_ALREADY_EXIST: "사용중인 아이디입니다.",
          MINIMUM_PASSWORD_LENGTH_IS_8: "비밀번호는 8자 이상이여야 합니다.",
          EMAIL_ALREADY_EXIST: "사용중인 이메일입니다.",
          WRONG_EMAIL_FORMAT: "잘못된 이메일 형식입니다.",
        };

        if (result.message === "SUCCESS") {
          alert("회원가입 성공!");
          history.push("/login");
          return;
        }

        if (result.message) {
          return alert(errorMsg[result.message]);
        }
      });
  };

  const { phone, email, id, password } = signupValue;
  const activateBtn = (id.length && password.length) >= 8;

  return (
    <>
      <SignupForms>
        <InputForm
          type="text"
          name="phone"
          value={phone}
          placeholder="휴대폰"
          onChange={handleSignup}
        />
        <InputForm
          type="text"
          name="email"
          value={email}
          placeholder="이메일"
          onChange={handleSignup}
        />
        <InputForm
          type="text"
          name="id"
          value={id}
          placeholder="사용자ID *"
          onChange={handleSignup}
        />
        <InputForm
          type="password"
          name="password"
          value={password}
          placeholder="비밀번호 *"
          onChange={handleSignup}
        />
      </SignupForms>
      <ButtonForm
        type="button"
        activateBtn={activateBtn}
        clicked={signupClicked}
      >
        가입
      </ButtonForm>
    </>
  );
}

export default SignForm;

const SignupForms = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
