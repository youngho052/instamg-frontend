import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ImgVideoSectionOfModal from "./Component/ImgVideoSectionOfModal/ImgVideoSectionOfModal";
import TextSectionOfModal from "./Component/TextSectionOfModal/TextSectionOfModal";
import { ArrowIosBackOutline } from "@styled-icons/evaicons-outline/ArrowIosBackOutline";
import { ArrowIosForwardOutline } from "@styled-icons/evaicons-outline/ArrowIosForwardOutline";

export default function ThumbnailModal(props) {
  const {
    eachModalAllData,
    modalShow,
    onCloseModal,
    handleIdx,
    currentIdx,
    hasModalVideoFilter1st,
    showPostLength,
  } = props;

  const ClickArrow = (e, num) => {
    handleIdx(num);
    e.stopPropagation();
  };

  return (
    <ThumbnailModalWrapper modalShow={modalShow} onClick={onCloseModal}>
      <LeftArrow onClick={(e) => ClickArrow(e, -1)} currentIdx={currentIdx} />
      <ThumbnailModalWindow onClick={(e) => e.stopPropagation()}>
        <ImgVideoSectionOfModal
          eachModalMediaFile={eachModalAllData?.file}
          modalShow={modalShow}
        />
        <TextSectionOfModal
          eachModalAllData={eachModalAllData}
          currentIdx={currentIdx}
          hasModalVideoFilter1st={hasModalVideoFilter1st}
        />
      </ThumbnailModalWindow>
      <RightArrow
        onClick={(e) => ClickArrow(e, +1)}
        showPostLength={showPostLength - 1 === currentIdx}
      />
    </ThumbnailModalWrapper>
  );
}

const ThumbnailModalWrapper = styled.div`
  /* border: 1px solid pink; */
  display: ${(props) => (props.modalShow ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  flex-direction: row;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 3;
`;

const LeftArrow = styled(ArrowIosBackOutline)`
  display: ${(props) => (props.currentIdx > 0 ? "flex" : "none")};
  width: 40px;
  padding-left: ${(props) => (props.currentIdx > 0 ? "0px" : "40px")};
  color: #cfcfcf;
  cursor: pointer;
`;

const RightArrow = styled(ArrowIosForwardOutline)`
  display: ${(props) => (props.showPostLength ? "none" : "flex")};
  width: 40px;
  padding-right: ${(props) => (props.showPostLength ? "40px" : "0px")};
  color: #cfcfcf;
  cursor: pointer;
`;

const ThumbnailModalWindow = styled.main`
  /* border: 1px solid orange; */
  display: flex;
`;
