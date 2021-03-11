import React from "react";
import styled from "styled-components";

const CreatedAt = (props) => {
  const { time } = props;

  const setDate = new Date(time);
  const now = new Date();
  const distance = now.getTime() - setDate.getTime();

  const day = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  return (
    <CreatedAtWrapper>
      {day > 0
        ? `${day}일 전`
        : hours < 24 && hours > 0
        ? `${hours}시간 전`
        : minutes < 60 && minutes > 0
        ? `${minutes}분 전`
        : `방금 전`}
    </CreatedAtWrapper>
  );
};

export default CreatedAt;

const CreatedAtWrapper = styled.div``;
