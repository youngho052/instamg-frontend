import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SignForm from "./Components/SignForm";

function Signup(Props) {
  return (
    <Signups>
      <SignupContainer>
        <SignIntro>
          <H1>Instamg</H1>
          <Span>친구들의 사진과 동영상을 보려면 가입하세요.</Span>
        </SignIntro>
        <LineContainer>
          <Line />
          <span>또는</span>
          <Line />
        </LineContainer>
        <SignForm />
        <Form>
          <P>
            가입하면 Instamg의 약관, 데이터 정책 및 쿠키 정책에 동의하게 됩니다.
          </P>
        </Form>
      </SignupContainer>
      <LoginContainer>
        <LoginSpan>
          계정이 있으신가요? <Link to="/login">로그인</Link>
        </LoginSpan>
      </LoginContainer>
    </Signups>
  );
}

export default Signup;

const Signups = styled.div`
  width: 100%;
  margin: 50px auto;
`;

const SignupContainer = styled.div`
  width: 350px;
  height: 500px;
  margin: 0 auto;
  border: 1px solid #dbdbdb;
  text-align: center;
`;

const SignIntro = styled.div`
  width: 270px;
  margin: 0 auto;
`;

const H1 = styled.h1`
  font-size: 45px;
  font-family: "Lobster";
  color: #262626;
  margin-top: 15px;
`;

const Span = styled.span`
  font-size: 17px;
  font-weight: bold;
  color: #8e8e8e;
`;

const LineContainer = styled.div`
  display: flex;
  align-items: center;
  width: 268px;
  margin: 0 auto;

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

const Form = styled.form`
  width: 268px;
  margin: 15px auto;
`;

const P = styled.p`
  font-size: 12px;
  font-weight: bold;
  color: #8e8e8e;
`;

const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 350px;
  height: 70px;
  margin: 30px auto;
  border: 1px solid #dbdbdb;
`;

const LoginSpan = styled.span`
  font-size: 15px;

  a {
    color: blue;
  }
`;
