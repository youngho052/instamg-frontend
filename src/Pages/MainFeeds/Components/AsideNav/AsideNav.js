import React, { useState } from "react";
import "./AsideNav.scss";

const ASIDE_NAV = [
  {
    id: 1,
    content: "소개",
    url: "https://www.instagram.com/",
  },
  {
    id: 2,
    content: "도움말",
    url: "https://www.instagram.com/",
  },
  {
    id: 3,
    content: "홍보 센터",
    url: "https://www.instagram.com/",
  },
  {
    id: 4,
    content: "API",
    url: "https://www.instagram.com/",
  },
  {
    id: 5,
    content: "채용 정보",
    url: "https://www.instagram.com/",
  },
  {
    id: 6,
    content: "개인정보처리방침",
    url: "https://www.instagram.com/",
  },
  {
    id: 7,
    content: "약관",
    url: "https://www.instagram.com/",
  },
  {
    id: 8,
    content: "위치",
    url: "https://www.instagram.com/",
  },
  {
    id: 9,
    content: "인기 계정",
    url: "https://www.instagram.com/",
  },
  {
    id: 10,
    content: "해시태그",
    url: "https://www.instagram.com/",
  },
];

const LANGUAGE_OPTION = [
  {
    id: 1,
    content: "Korean",
    selected: true,
  },
  {
    id: 2,
    content: "English",
    selected: false,
  },
  {
    id: 3,
    content: "Japanese",
    selected: false,
  },
  {
    id: 4,
    content: "Chinese",
    selected: false,
  },
  {
    id: 5,
    content: "French",
    selected: false,
  },
  {
    id: 6,
    content: "Spanish",
    selected: false,
  },
  {
    id: 7,
    content: "Nedelands",
    selected: false,
  },
  {
    id: 8,
    content: "Italiano",
    selected: false,
  },
  {
    id: 9,
    content: "Espanol",
    selected: false,
  },
  {
    id: 10,
    content: "Norsk",
    selected: false,
  },
];

function AsideNav() {
  const [selectLanguageOpt, setSelectlanguageOpt] = useState(false);

  const chooseLanguage = () => {
    setSelectlanguageOpt(!selectLanguageOpt);
  };

  return (
    <div className="aside-nav">
      <nav>
        <ul>
          {ASIDE_NAV.map((linkName) => {
            return (
              <li key={linkName.id}>
                <a href={linkName.url} target="_blank">
                  {linkName.content}
                </a>
              </li>
            );
          })}
          <li>
            <span className="choose-langauge" onClick={chooseLanguage}>
              언어
            </span>
          </li>
        </ul>
        {selectLanguageOpt ? (
          <select className="select" size="10">
            {LANGUAGE_OPTION.map((language) => {
              return (
                <option key={language.id} selected={language.selected}>
                  {language.content}
                </option>
              );
            })}
          </select>
        ) : null}
      </nav>
      <span className="aside-nav-copyright">
        © 2021 INSTAGRAM FROM FACEBOOK
      </span>
    </div>
  );
}

export default AsideNav;
