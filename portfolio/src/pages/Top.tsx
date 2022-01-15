import React from "react";
import styled from "styled-components";

import IconBar from "../components/IconBar";
import GlobalFonts from "../GlobalFonts";

const StyledContainer = styled.div`
  height: 100%;
  width: 100%;
  background-color: transparent;
`;

const StyledImage = styled.img`
  height: 100%;
  width: 100%;
  position: absolute;
  object-fit: cover;
  opacity: 0.7;
  z-index: -1;
`;

const StyledBlank = styled.div`
  height: 30%;
`;

const StyledTitle = styled.h1`
  text-align: center;
  color: white;
  font-weight: bolder;
  font-size: 14rem;
`;

const StyledSubTitle = styled.h2`
  text-align: center;
  color: white;
  font-size: 8rem;
`;

const baseUrl = "https://storage.googleapis.com/champon-portfolio/images";

const Top = () => {
  return (
    <StyledContainer>
      <GlobalFonts />
      <StyledImage src={`${baseUrl}/space.jpg`} />
      <StyledBlank />
      <StyledTitle>Yoshiki Nagasaki</StyledTitle>
      <StyledSubTitle>champon</StyledSubTitle>
      <IconBar />
    </StyledContainer>
  );
};

export default Top;
