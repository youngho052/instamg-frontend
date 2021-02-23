import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import InputForm from "../../Signup/Components/Input/InputForm";
import ButtonForm from "../../Signup/Components/Button/ButtonForm";
import { SIGNIN } from "../../../Config";
import { Loginitem } from "./Data/LoginInputData";

/**
 *
 * @param {string} loading - 로딩은 트루일때 그냥 로딩만 쓰고, 폴스 일때는 false를 어사인 해줘
 */
function LoginForm(props) {
  const [loginValue, setLoginValue] = useState({
    id: "",
    email: "",
    phone: "",
    password: "",
  });

  const history = useHistory();

  const handleLogin = (e) => {
    const { name, value } = e.target;
    setLoginValue({
      ...loginValue,
      [name]: value,
    });
  };

  const loginClicked = (e) => {
    const { id, password } = loginValue;

    const loginObject = {
      account: id,
      password,
    };

    if (id.includes("@")) {
      delete loginObject.account;
      loginObject.email = id;
    }

    if (id.includes("010")) {
      delete loginObject.account;
      loginObject.phone = id;
    }

    fetch(SIGNIN, {
      method: "POST",
      body: JSON.stringify(loginObject),
    })
      .then((res) => res.json())
      .then((result) => {
        const errorMsg = {
          USER_DOES_NOT_EXIST: "존재하지 않는 계정입니다.",
          INVALID_PASSWORD: "비밀번호를 잘못 입력 하셨습니다.",
        };

        if (result.message) {
          return alert(errorMsg[result.message]);
        } else {
          alert("인스타에 오신걸 환영합니다!");
          localStorage.setItem("token", result.token);
          history.push("/");
        }
      });
  };

  const { id, password } = loginValue;
  const activateBtn = (id.length && password.length) >= 8;

  const inputItem = (type, name, placeholder) => {
    return (
      <InputForm
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={handleLogin}
      />
    );
  };

  return (
    <>
      <LoginForms>
        {Loginitem.map((item) => {
          return inputItem(item.type, item.name, item.placeholder);
        })}
      </LoginForms>
      <ButtonForm
        clicked={loginClicked}
        type="button"
        type="button"
        activateBtn={activateBtn}
      >
        로그인
      </ButtonForm>
    </>
  );
}

export default LoginForm;

const LoginForms = styled.div``;
