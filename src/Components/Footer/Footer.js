import React from "react";
import styled from "styled-components";
import { FOOTER_DATA } from "./Data/Data";

function Footer() {
  return (
    <Footers>
      <FooterContainer>
        <Ul>
          {FOOTER_DATA.map((item) => {
            return <Li>{item.content}</Li>;
          })}
        </Ul>
        <SelectLanguage>
          <select>
            <option>Korean</option>
            <option>English</option>
            <option>Japen</option>
            <option>Chinese</option>
            <option>Spain</option>
          </select>
          <Span>© 2021 Instagram from Facebook</Span>
        </SelectLanguage>
      </FooterContainer>
    </Footers>
  );
}

export default Footer;

const Footers = styled.footer`
  width: 100%;
`;

const FooterContainer = styled.div``;

const Ul = styled.ul`
  display: flex;
  justify-content: center;
  font-size: 12px;
`;

const Li = styled.li`
  padding: 15px;
  color: #8e8e8e;
`;

const SelectLanguage = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;

  select {
    border: none;
    outline: none;
    font-size: 12px;
    color: #8e8e8e;
  }
`;

const Span = styled.span`
  margin-left: 20px;
  font-size: 12px;
  color: #8e8e8e;
`;
