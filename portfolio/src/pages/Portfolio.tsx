import React from "react";
import styled, { keyframes } from "styled-components";

import ProfileImage from "../assets/images/profile.png";

const StyledBody = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
`;

const StyledPlate = styled.div`
  width: 50%;
  height: 100%;
  margin: auto;
  background-color: #292929;
`;

const StrokeAnimBefore = keyframes`
  0% {
    transform: scale3d(0,1,1);
  }
  50% {
    transform: scale3d(1,1,1);
  }
  100% {
    transform: scale3d(0,1,1);
  }
`;

const StrokeAnimAfter = keyframes`
  0% {
    transform: scale3d(1,0,1);
  }
  50% {
    transform: scale3d(1,1,1);
  }
  100% {
    transform: scale3d(1,0,1);
  }
`;

const StyledProfileIcon = styled.div`
  --border-color: cyan;
  --border-size: 0.2rem;

  width: 30%;
  height: auto;
  margin: 0 35%;
  box-sizing: border-box;
  position: relative;

  &::before,
  &::after {
    box-sizing: inherit;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    transform-origin: center;
  }
  &::before {
    border-top: var(--border-size) solid var(--border-color);
    border-bottom: var(--border-size) solid var(--border-color);
    animation: ${StrokeAnimBefore} 1.0s ease-in-out;
    transform: scale3d(0,1,1);
  }
  &::after {
    border-left var(--border-size) solid var(--border-color);
    border-right var(--border-size) solid var(--border-color);
    animation: ${StrokeAnimAfter} 1.0s ease-in-out;
    transform: scale3d(1,0,1);
  }
`;

const StyledProfileImg = styled.img`
  width: 100%;
`;

const Portfolio = () => {
  return (
    <StyledBody>
      <StyledPlate>
        <StyledProfileIcon>
          <StyledProfileImg src={ProfileImage as string} alt="profile-image" />
        </StyledProfileIcon>
      </StyledPlate>
    </StyledBody>
  );
};

export default Portfolio;
