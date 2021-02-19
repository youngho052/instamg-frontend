import styled from "styled-components";
import { SERVER } from "../../../src/Config";
/**
 *
 * @param {string} loading - 속성 : WrapDivstyles(높이, 너비 등), hasTodayLive(불린), src, onClick(메소드)
 */
export default function ProfilePic(props) {
  const { hasTodayLive, src, WrapDivstyles, onClick } = props;
  const basicPicture =
    "https://www.momjobgo.com/test100/wp-content/themes/hello-momjobgo/images/default-profile.jpg";
  return (
    <ProfilePicWrapper style={WrapDivstyles} onClick={onClick}>
      <BorderImg
        src="https://unilink.us/content/border/preview/1.png"
        hasTodayLive={hasTodayLive}
      />
      <ProfileImg src={src === null ? basicPicture : SERVER + "/" + src} />
      {/* <ProfileImg src={src === null ? basicPicture : src} /> */}
    </ProfilePicWrapper>
  );
}
const ProfilePicWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  cursor: pointer;
`;
const BorderImg = styled.img`
  position: absolute;
  display: ${(props) => (props.hasTodayLive ? "flex" : "none")};
  width: inherit;
`;
const ProfileImg = styled.img`
  width: 92%;
  height: 92%;
  border-radius: 50%;
  z-index: 1;
`;
