import React, { useState } from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";
import Silder from "react-slick";
import { SERVER } from "../../../../Config";

export default function ImgVideoSectionOfModal(props) {
  const { eachModalMediaFile, modalShow } = props;
  const [videoPlay, setVideoPlay] = useState(false);

  var settings = {
    dots: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  return (
    <ImgVideoSectionOfModalWrapper>
      <SlideWrapper>
        <Silder {...settings}>
          {eachModalMediaFile?.map((eachfile) => {
            return eachfile.file_type === "image" ? (
              <OneImg src={SERVER + "/" + eachfile.path} />
            ) : (
              // <OneImg src={eachfile.path} />
              <ReactPlayer
                url={SERVER + "/" + eachfile.path}
                // url={eachfile.path}
                width={"100%"}
                playing={modalShow}
                constrols={modalShow}
              />
            );
          })}
        </Silder>
      </SlideWrapper>
    </ImgVideoSectionOfModalWrapper>
  );
}

const ImgVideoSectionOfModalWrapper = styled.section`
  /* border: 1px solid green; */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 614px;
  min-height: 450px;
  background-color: black;
`;

const SlideWrapper = styled.div`
  /* border: 1px solid red; */
  width: 100%;
  max-height: 622px;
  /* overflow: hidden; */
  .slick-list {
    height: 100%;
  }

  .slick-slide {
    max-height: 620px;
    overflow: hidden;
  }

  .slick-prev {
    left: 9px;
    z-index: 1;
  }

  .slick-next {
    right: 9px;
    z-index: 1;
  }

  .slick-dots {
    bottom: 5px;
    li button:before {
      color: white;
    }
  }
`;

const OneImg = styled.img`
  /* border: 1px solid yellow; */
`;

const OneVideo = styled.video`
  /* border: 1px solid lightblue; */
`;
