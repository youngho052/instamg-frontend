import React, { Component } from "react";
import styled from "styled-components";

const SUGGESTED_USER = [
  {
    id: 1,
    img:
      "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/65301861_1133737230166874_8745166478287831040_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=-PZ1BOWVH_wAX8-S_6-&oh=230913f18c6c472272a19febe34b32e4&oe=60722D44",
    name: "seonmi_kate",
    url: "https://www.instagram.com/seonmi_kate/",
  },
  {
    id: 2,
    img:
      "https://instagram.fsyq4-1.fna.fbcdn.net/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=instagram.fsyq4-1.fna.fbcdn.net&_nc_ohc=88ZHX6Q9C1YAX_NO2T-&oh=ad1004e1bc95bcef5a0649595281b60d&oe=606FB88F&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2",
    name: "qkrdudgh1701",
    url: "https://www.instagram.com/qkrdudgh1701/",
  },
  {
    id: 3,
    img:
      "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/43817532_275052879803001_858155816023228416_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=muyI5mKkxB8AX8TqYuO&tp=1&oh=a87112a5ed25ed8e6fa29deb584264b9&oe=6062C23D",
    name: "redsaumon",
    url: "https://www.instagram.com/redsaumon/",
  },
  {
    id: 4,
    img:
      "https://instagram.fsyq4-1.fna.fbcdn.net/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=instagram.fsyq4-1.fna.fbcdn.net&_nc_ohc=88ZHX6Q9C1YAX_NO2T-&oh=ad1004e1bc95bcef5a0649595281b60d&oe=606FB88F&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2",
    name: "lylarmee",
    url: "https://www.instagram.com/lylarmee/",
  },
  {
    id: 5,
    img:
      "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/130971299_780265755896795_1133188926566823481_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=7DJ7f2qCvcIAX9AQLpS&tp=1&oh=baa3bbd1a3fdcbbacb93681d27f807cd&oe=6061FFE5",
    name: "sarang_lover_",
    url: "https://www.instagram.com/sarang_lover_/",
  },
];

export default class SuggestedWrapper extends Component {
  render() {
    return (
      <SuggestedWrapperBox>
        {SUGGESTED_USER.map((profile, idx) => {
          return (
            <div key={idx} className="suggested-wrapper">
              <div className="suggested-profile">
                <div className="suggested-profile-pic">
                  <a href={profile.url}>
                    <img alt={profile.name} src={profile.img} />
                  </a>
                </div>
                <div className="suggested-profile-wrapper">
                  <div className="suggested-profile-name">
                    <a href={profile.url}>{profile.name}</a>
                  </div>
                </div>
              </div>
              <div className="suggested-follow-button">
                <button>팔로우</button>
              </div>
            </div>
          );
        })}
      </SuggestedWrapperBox>
    );
  }
}

const SuggestedWrapperBox = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: inherit;

  .suggested-wrapper {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;

    .suggested-profile {
      display: flex;
      align-items: center;
      width: 230px;

      .suggested-profile-pic {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 42px;
        height: 42px;

        img {
          width: 32px;
          height: 32px;
          border-radius: 50%;
        }
      }

      .suggested-profile-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 5px;

        .suggested-profile-name {
          align-self: stretch;
          font-size: 14px;
          font-weight: 600;

          a {
            text-decoration: none;
            color: #262626;
          }
        }
        .suggested-profile-message {
          font-size: 12px;
          color: #8e8e8e;
        }
      }
    }
    .suggested-follow-button {
      display: flex;
      justify-content: flex-end;
      width: 63px;
      button {
        color: #0095f6;
        font-size: 12px;
        font-weight: 600;
        padding: 0px;
      }
    }
  }
`;
