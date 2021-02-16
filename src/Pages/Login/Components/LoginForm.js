import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import InputForm from "../../Signup/Components/Input/InputForm";
import ButtonForm from "../../Signup/Components/Button/ButtonForm";
import { SIGNIN } from "../../../Config";

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
        alert("인스타에 오신걸 환영합니다!");
        localStorage.setItem("token", result.token);
        history.push("/");
      });
  };

  const { id, password } = loginValue;
  const activateBtn = (id.length && password.length) >= 8;

  // const layoutWrapper = (children) => (
  //   <div style={{ background: "red" }}>
  //     <div>
  //       <div>{children} </div>
  //     </div>
  //   </div>
  // );

  // var items = [
  //   {
  //     inputType: "button",
  //     buttonText: "test",
  //   },
  //   { inputType: "text", placeholder: "asjdlfjskladf" },
  // ];

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

  const loginitem = [
    {
      type: "text",
      name: "id",
      placeholder: "전화번호, 사용자 이름 또는 이메일",
    },
    {
      type: "password",
      name: "password",
      placeholder: "비밀번호를 입력해주세요",
    },
  ];

  return (
    <>
      {/* {items.map((item) => {
        return layoutWrapper(
          item.inputType == "button" ? (
            <button>{item.buttonText}</button>
          ) : (
            <input placeholder={item.placeholder} />
          ),
        );
      })}
      {layoutWrapper(item1)}

      {layoutWrapper("<input />")} */}

      <LoginForms>
        {loginitem.map((item) => {
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
