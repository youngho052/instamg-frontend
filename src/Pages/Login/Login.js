import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "./Components/LoginForm";
import styled from "styled-components";

function Login(props) {
  return (
    <Logins>
      <LoginContainer>
        <H1>Instamg</H1>
        <LoginForm />
        <LineContainer>
          <Line />
          <span>또는</span>
          <Line />
        </LineContainer>
        <ForgetPassword>
          <span>비밀번호를 잊으셨나요?</span>
        </ForgetPassword>
      </LoginContainer>
      <SignupContainer>
        <SignupSpan>
          계정이 없으신가요? <Link to="/signup">회원가입</Link>
        </SignupSpan>
      </SignupContainer>
    </Logins>
  );
}

export default Login;

const Logins = styled.div`
  width: 100%;
  height: 70vh;
  margin: 0 auto;
  margin-top: 150px;
`;

const LoginContainer = styled.div`
  width: 350px;
  height: 380px;
  margin: 0 auto;
  border: 1px solid #dbdbdb;
  text-align: center;
`;

const H1 = styled.h1`
  font-size: 45px;
  font-family: "Lobster";
  color: #262626;
  margin: 15px 0;
`;

const LineContainer = styled.div`
  display: flex;
  align-items: center;
  width: 268px;
  margin: 20px auto;

  span {
    padding: 15px;
    font-size: 12px;
    color: #8e8e8e;
  }
`;

const Line = styled.hr`
  width: 103px;
  border-top: #dbdbdb;
`;

const ForgetPassword = styled.div`
  margin: 10px auto;
  font-size: 12px;
`;

const SignupContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 350px;
  height: 70px;
  margin: 20px auto;
  border: 1px solid #dbdbdb;
`;

const SignupSpan = styled.span`
  font-size: 15px;

  a {
    color: blue;
  }
`;
